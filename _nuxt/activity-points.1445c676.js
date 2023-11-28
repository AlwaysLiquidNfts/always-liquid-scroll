import{H as l,T as u,M as _}from"./components.80dd5c65.js";import{a as p,l as m,b as y,e as o,w as i,f as t,t as n,F as v,o as f,i as h}from"./entry.46d17a74.js";import{u as b}from"./user.f2c189e5.js";import{g as P}from"./balanceUtils.6f1477f3.js";import"./composables.a6bd5e88.js";const g={name:"ActivityPoints",mounted(){this.fetchActivityPoints()},methods:{getActivityPoints:P,async fetchActivityPoints(){if(this.$config.activityPointsAddress&&this.address){const s=await this.getActivityPoints(this.address);this.userStore.setCurrentUserActivityPoints(s)}}},setup(){const{address:s}=m(),e=b();return{address:s,userStore:e}}},A={class:"card border scroll-500"},$={class:"card-body"},k=t("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),w=[k],T=t("h3",{class:"mb-3 mt-3"},"Activity Points",-1),x=t("p",{class:"text-break mt-3"}," Your current Activity Points balance: ",-1),M={class:"row"},S={class:"col-md-5"},B={class:"input-group"},C=["value"],N=t("button",{class:"btn btn-primary disabled",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Activity Points ",-1),j={class:"text-break mt-4 mb-3"};function H(s,e,U,a,V,E){const c=u,r=_,d=l;return f(),y(v,null,[o(d,null,{default:i(()=>[o(c,null,{default:i(()=>[h("Activity Points | "+n(s.$config.projectMetadataTitle),1)]),_:1}),o(r,{property:"og:title",content:"Activity Points | "+s.$config.projectMetadataTitle},null,8,["content"])]),_:1}),t("div",A,[t("div",$,[t("p",{class:"fs-3",onClick:e[0]||(e[0]=F=>s.$router.back())},w),T,x,t("div",M,[t("div",S,[t("div",B,[t("input",{value:a.userStore.getCurentUserActivityPoints,type:"text",class:"form-control",disabled:""},null,8,C),N])])]),t("p",j," By actively using "+n(s.$config.projectName)+" features, you can earn more Activity Points. ",1)])])],64)}const I=p(g,[["render",H]]);export{I as default};
