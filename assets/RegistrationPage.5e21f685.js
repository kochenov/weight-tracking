import{Q as v,a as u}from"./QForm.c26b8b90.js";import{r as m,a9 as f,E as x,F as l,G as h,H as y,a7 as e,I as t,J as o,Q as w,u as b,aa as q}from"./index.6869572c.js";import{Q as g,a as V}from"./QCard.e47de17a.js";import"./use-dark.5e043d57.js";const k={class:"row"},Q=e("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[e("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[e("div",{class:""},[e("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}}," \u0414\u041E\u0411\u0420\u041E \u041F\u041E\u0416\u0410\u041B\u041E\u0412\u0410\u0422\u042C! "),e("div",{class:"text-white q-my-sm text-subtitle1"}," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435! ")])])],-1),S={class:"col-12 col-sm-7"},B={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},C={class:"col-12 fredoka text-subtitle1"},N={class:"row q-pa-sm-sm q-pa-md"},z={class:"col-12"},U=e("div",{class:"q-mb-xl"},[e("div",{class:"flex justify-center"},[e("div",{class:"text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ")])],-1),F={class:"q-mt-lg"},I={class:"q-mt-sm"},R={class:"q-mt-sm"},J={__name:"RegistrationPage",setup(j){const r=m(null),d=m(null),i=m(null),p=f(),_=async()=>{const c=b();try{await c.registration({name:r.value,email:d.value,password:i.value})&&(q.create("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0448\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"),p.push("/"))}catch(s){console.log(s)}};return(c,s)=>{const n=h("router-link");return y(),x(g,{class:"q-ma-lg"},{default:l(()=>[e("div",k,[Q,e("div",S,[e("div",B,[e("div",C,[t(n,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:l(()=>[o(" \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E ")]),_:1})])]),e("div",N,[e("div",z,[t(V,null,{default:l(()=>[U,t(v,{class:"q-gutter-md",onSubmit:_},{default:l(()=>[t(u,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a),label:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F","lazy-rules":"",name:"name"},null,8,["modelValue"]),t(u,{modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=a=>d.value=a),label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email","lazy-rules":"",name:"email",type:"email"},null,8,["modelValue"]),t(u,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=a=>i.value=a),label:"\u041F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",name:"password",type:"password"},null,8,["modelValue"]),e("div",null,[t(w,{class:"full-width fredoka",color:"primary",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",type:"submit"}),e("div",F,[e("div",I,[o(" \u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? "),t(n,{class:"text-primary",to:"/login"},{default:l(()=>[o("\u0412\u043E\u0439\u0442\u0438")]),_:1})]),e("div",R,[o(" \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? "),t(n,{class:"text-primary",to:"/forgot-password"},{default:l(()=>[o("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C!")]),_:1})])])])]),_:1})]),_:1})])])])])]),_:1})}}};export{J as default};
