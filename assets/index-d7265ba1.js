import{l as m,b as E,R as A}from"./lib-107a1c78.js";import{d as l,j as d,o as _,c as i,f as e,i as f,a as r,t as u,r as R,k as T,e as h,g as N}from"./index-08563c0a.js";const t={ID:"Id",AVATAR:"Avatar",CUSTOMER_NAME:"CustomerName",CUSTOMER_PHONE:"CustomerPhone"},O=["src","alt"],S=l({__name:"index",props:{user:{type:Object,default:{}}},setup(c){const n=c,{user:a}=d(n);return(o,s)=>(_(),i("img",{src:e(a)[e(t).AVATAR]?e(a)[e(t).AVATAR]:"https://freesvg.org/img/Cartoon-Man-Avatar-2.png",alt:e(a)[e(t).CUSTOMER_NAME],class:"w-12 h-12 rounded-full bg-slate-100 ring-2 ring-white",loading:"lazy"},null,8,O))}}),g={className:"flex space-x-6 p-6 bg-blue-300"},x={className:"font-semibold text-slate-900 truncate pr-20"},M={className:"mt-2 text-sm leading-6 font-normal"},C=l({__name:"index",props:{user:{type:Object,default:{}}},setup(c){const n=c,{user:a}=d(n);return(o,s)=>(_(),i("article",g,[f(e(S),{user:e(a)},null,8,["user"]),r("div",null,[r("h2",x,u(e(a)[e(t).CUSTOMER_NAME]),1),r("p",M,u(e(a)[e(t).CUSTOMER_PHONE]),1)])]))}}),U={class:"container mx-auto px-4 pt-10"},b=r("h2",{class:"text-lg font-semibold text-slate-900 mb-8"},"Личный кабинет",-1),k=l({__name:"index",setup(c){const n=R();T(async()=>{const o=m();o&&await a(o)});async function a(o){await E(o).then(s=>{if(s.statusText===A.OK){const p={[t.ID]:s.data.data[t.ID],[t.AVATAR]:s.data.data[t.AVATAR],[t.CUSTOMER_NAME]:s.data.data[t.CUSTOMER_NAME],[t.CUSTOMER_PHONE]:s.data.data[t.CUSTOMER_PHONE]};n.value=p}}).catch(()=>{})}return(o,s)=>(_(),i("div",U,[b,n.value?(_(),h(e(C),{key:0,user:n.value},null,8,["user"])):N("",!0)]))}});export{k as default};
