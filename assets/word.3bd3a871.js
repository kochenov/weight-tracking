const s=(t,a)=>a[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]];export{s as d};
