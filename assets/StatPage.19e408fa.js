import{Q as _}from"./QSeparator.a2357e79.js";import{Q as y,a as x}from"./QCard.e47de17a.js";import{a4 as v,cp as f,ay as g,r as n,A as b,a6 as S,a7 as r,aF as u,K as o,I as i,F as d,H as h,E as C,L as G,aG as q,aH as w}from"./index.6869572c.js";import{V as k}from"./vue3-apexcharts.common.bb5fee99.js";import"./use-dark.5e043d57.js";const O=e=>(q("data-v-5a16ae42"),e=e(),w(),e),I={class:"column"},N={class:"text-h4 q-px-md q-mb-none q-pt-sm"},Q={class:"text-caption q-pl-lg q-pb-lg"},V={class:"row q-py-md flex-center"},A=O(()=>r("div",null,"Ratio 16:9",-1)),B={__name:"StatPage",setup(e){const l=f(),t=g(),c=n(!1),a=n({title:{text:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",align:"left"},annotations:{yaxis:[{y:null,y2:null,borderColor:"#00E233",fillColor:"red",label:{borderColor:"red",style:{color:"#fff",background:"red"},text:""}}]},chart:{height:500,toolbar:{show:!0,autoSelected:"zoom"},type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2}},colors:["#1976D2","#545454"],dataLabels:{enabled:!0},stroke:{},xaxis:{title:{text:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0432 \u0434\u043D\u044F\u0445"},type:"category"},yaxis:{title:{text:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0432 \u0433\u0440\u0430\u043C\u043C\u0430\u0445"}}}),p=n([{name:"\u0412\u0435\u0441 \u0432 \u0433\u0440\u0430\u043C\u043C\u0430\u0445",data:[]}]);b(async()=>{try{await m()}catch(s){console.log(s)}});const m=async()=>{try{await t.getListHistory(l.params.animal,l.params.part),p.value[0].data=t.resultGraphSeries,setTimeout(()=>{Math.max(...t.resultGraphOptions)>Number(t.resultGraphOptions[t.resultGraphOptions.length-1])?(a.value.annotations.yaxis[0].y=Math.max(...t.resultGraphOptions),a.value.annotations.yaxis[0].y2=Number(t.resultGraphOptions[t.resultGraphOptions.length-1]),a.value.annotations.yaxis[0].label.text="\u0412\u0435\u0441 \u043E\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u043B\u0441\u044F \u043D\u0430 "+(a.value.annotations.yaxis[0].y-a.value.annotations.yaxis[0].y2)+" \u0433\u0440\u0430\u043C\u043C\u043E\u0432"):a.value.annotations.yaxis=[],c.value=!0},1500)}catch(s){console.log(s)}};return(s,L)=>(h(),S("div",I,[r("h1",N," \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0440\u043E\u0441\u0442\u0443 "+u(o(t).currentAnimal?o(t).currentAnimal.word5:""),1),r("div",Q,u(o(l).params.part),1),i(_,{inset:""}),r("div",V,[i(y,{class:"q-ma-md col"},{default:d(()=>[c.value?(h(),C(o(k),{key:0,class:"q-pa-lg",style:{"min-height":"500px"},type:"line",height:"100%",options:a.value,series:p.value},null,8,["options","series"])):G("",!0),i(x,null,{default:d(()=>[A]),_:1})]),_:1})])]))}};var D=v(B,[["__scopeId","data-v-5a16ae42"]]);export{D as default};
