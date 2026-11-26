
document.addEventListener('DOMContentLoaded',()=>{
 const path=location.pathname.split('/').pop();
 if(path==='materials.html'){let a=CF.read('materials');let c=document.querySelector('#materialCount');if(c)c.textContent=a.length;let l=document.querySelector('#lowCount');if(l)l.textContent=a.filter(m=>m.qty<=m.min).length}
 if(path==='expenses.html'){let t=CF.read('expenses').reduce((s,x)=>s+x.amount,0),e=document.querySelector('#expenseTotal');if(e)e.textContent=CF.money(t)}
 if(path==='analytics.html'){let o=CF.read('orders'),e=CF.read('expenses');let n=document.querySelector('#analyticsOrders');if(n)n.textContent=o.length;drawMiniChart('analyticsChart',['Jun','Jul','Aug','Sep','Oct','Nov'],[165000,182000,194000,213000,249000,284600])}
 if(path==='receipts.html'){let s=document.querySelector('#receiptOrder');if(s){let a=CF.read('orders');s.innerHTML=a.map(o=>`<option value="${o.id}">${o.id} · ${CF.esc(o.customer)} · ${CF.money(o.total)}</option>`).join('')||'<option value="">No saved orders</option>'}}
 if(path==='settings.html'){let f=document.querySelector('#settingsForm');let saved=JSON.parse(localStorage.getItem('cf_settings')||'{}');Object.keys(saved).forEach(k=>{if(f.elements[k])f.elements[k].value=saved[k]});f.onsubmit=e=>{e.preventDefault();let d={};new FormData(f).forEach((v,k)=>d[k]=v);localStorage.setItem('cf_settings',JSON.stringify(d));CF.toast('Settings saved in this browser')}}
});
function receiptFromSelect(){let id=document.querySelector('#receiptOrder').value;if(!id){CF.toast('Create an order first');return}previewReceipt(id)}
