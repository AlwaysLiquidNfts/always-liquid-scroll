import{H as W,T as j,M as V}from"./components.0baa04e8.js";import{a as y,I as g,C as f,l as w,s as v,o as a,b as r,f as t,e as p,y as c,v as C,x as A,i as m,D as _,t as u,F as U,E as F,T,p as z,w as x,c as H,G as Y,h as G}from"./entry.7ea593c7.js";import{C as Q}from"./ChatFeed.5fc77276.js";import{C as q}from"./ConnectWalletButton.b1d316c1.js";import{W as b}from"./WaitingToast.9c5e055b.js";import{a as B}from"./FileUploadModal.6de2d8b3.js";import{g as J}from"./domainUtils.f64712d7.js";import{b as K,f as X,a as Z,s as M}from"./storageUtils.d265f6ca.js";import{a as N}from"./textUtils.b7e39c82.js";import"./composables.24212d6d.js";import"./ChatPost.4e983ddc.js";import"./user.5cad61a7.js";import"./ProfileImage.1ab620bf.js";import"./MintedPostImage.393b9949.js";import"./SwitchChainButton.ea59607e.js";import"./site.59a3d84e.js";const ee={name:"AddImageToCollectionModal",props:["cAddress","mdAddress"],components:{FileUploadInput:B},data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async addNewImage(){this.waiting=!0;const i=new g(["function addImageToCollection(address nftAddress_, string memory imageUrl_) external"]),s=new f(this.mdAddress,i,this.signer);try{const n=await s.addImageToCollection(this.cAddress,this.imageUrl),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have successfully added new image URL to the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},insertImageLink(i){this.imageUrl=i}},setup(){const{signer:i}=w(),s=v();return{signer:i,toast:s}}},te=["aria-labelledby"],se={class:"modal-dialog"},oe={class:"modal-content"},ie={class:"modal-header"},ne=["id"],ae=["id"],re={class:"modal-body"},le={class:"mt-2"},ce={key:0},de=t("p",null,"Upload new image (and then click Submit below):",-1),he=t("p",{class:"mt-3"},"Or paste image link here:",-1),me={key:1},ue={key:2,class:"mt-3"},pe=["src"],ge=t("br",null,null,-1),fe=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),_e={class:"modal-footer"},be=["disabled"],ye={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function we(i,s,n,o,e,l){const d=_("FileUploadInput");return a(),r("div",{class:"modal fade",id:"addImageToCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",se,[t("div",oe,[t("div",ie,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Add Image To Collection",8,ne),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,ae)]),t("div",re,[t("div",le,[!e.imageUrl&&i.$config.fileUploadEnabled?(a(),r("div",ce,[de,p(d,{btnCls:"btn btn-primary",maxFileSize:i.$config.fileUploadSizeLimit,onProcessUploadedFileUrl:l.insertImageLink},null,8,["maxFileSize","onProcessUploadedFileUrl"]),he])):c("",!0),i.$config.fileUploadEnabled?c("",!0):(a(),r("p",me,"Paste image link here:")),C(t("input",{"onUpdate:modelValue":s[0]||(s[0]=h=>e.imageUrl=h),type:"text",class:"form-control",id:"addImageToCollectionInputField"},null,512),[[A,e.imageUrl]]),e.imageUrl?(a(),r("div",ue,[(a(),r("img",{src:e.imageUrl,key:e.imageUrl,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,pe)),ge,fe])):c("",!0)])]),t("div",_e,[t("button",{onClick:s[1]||(s[1]=(...h)=>l.addNewImage&&l.addNewImage(...h)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),r("span",ye)):c("",!0),m(" Submit to blockchain ")],8,be)])])])],8,te)}const ve=y(ee,[["render",we]]),ke={name:"ChangeCollectionPreviewModal",props:["cAddress","mdAddress"],emits:["saveCollection"],components:{FileUploadInput:B},data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateImage(){this.waiting=!0;const i=new g(["function setCollectionPreview(address nftAddress_, string memory collectionPreview_) external"]),s=new f(this.mdAddress,i,this.signer);try{const n=await s.setCollectionPreview(this.cAddress,this.imageUrl),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT collection preview image.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{image:this.imageUrl}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},insertImageLink(i){this.imageUrl=i}},setup(){const{signer:i}=w(),s=v();return{signer:i,toast:s}}},Ce=["aria-labelledby"],Ae={class:"modal-dialog"},Ie={class:"modal-content"},xe={class:"modal-header"},Ue=["id"],Te=["id"],Me={class:"modal-body"},Ne=t("p",null,"Change your collection preview image.",-1),Fe={class:"mt-4"},Be={key:0},$e=t("p",null,"Upload new image (and then click Submit below):",-1),Se=t("p",{class:"mt-3"},"Or paste image link here:",-1),De={key:1},Pe={key:2,class:"mt-3"},Ee=["src"],Le=t("br",null,null,-1),Oe=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),Re={class:"modal-footer"},We=["disabled"],je={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Ve(i,s,n,o,e,l){const d=_("FileUploadInput");return a(),r("div",{class:"modal fade",id:"changeCollectionPreviewModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Ae,[t("div",Ie,[t("div",xe,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change Collection Preview Image",8,Ue),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Te)]),t("div",Me,[Ne,t("div",Fe,[!e.imageUrl&&i.$config.fileUploadEnabled?(a(),r("div",Be,[$e,p(d,{btnCls:"btn btn-primary",maxFileSize:i.$config.fileUploadSizeLimit,onProcessUploadedFileUrl:l.insertImageLink},null,8,["maxFileSize","onProcessUploadedFileUrl"]),Se])):c("",!0),i.$config.fileUploadEnabled?c("",!0):(a(),r("p",De,"Paste image link here:")),C(t("input",{"onUpdate:modelValue":s[0]||(s[0]=h=>e.imageUrl=h),type:"text",class:"form-control"},null,512),[[A,e.imageUrl]]),e.imageUrl?(a(),r("div",Pe,[t("img",{src:e.imageUrl,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,Ee),Le,Oe])):c("",!0)])]),t("div",Re,[t("button",{onClick:s[1]||(s[1]=(...h)=>l.updateImage&&l.updateImage(...h)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),r("span",je)):c("",!0),m(" Submit to blockchain ")],8,We)])])])],8,Ce)}const ze=y(ke,[["render",Ve]]),He={name:"ChangeDescriptionModal",props:["cAddress","cDescription","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editDescription:null,waiting:!1}},mounted(){this.componentId=this.$.uid,this.editDescription=this.cDescription},methods:{async update(){this.waiting=!0;const i=new g(["function setDescription(address nftAddress_, string memory description_) external"]),s=new f(this.mdAddress,i,this.signer);try{const n=await s.setDescription(this.cAddress,this.editDescription.replace(/"/g,"'")),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT description.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{description:this.editDescription.replace(/"/g,"'")}),this.editDescription=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{signer:i}=w(),s=v();return{signer:i,toast:s}},watch:{cDescription(){this.editDescription=this.cDescription}}},Ye=["aria-labelledby"],Ge={class:"modal-dialog"},Qe={class:"modal-content"},qe={class:"modal-header"},Je=["id"],Ke=["id"],Xe={class:"modal-body"},Ze=t("p",null,"Change your collection description.",-1),et={class:"mt-4"},tt=["for"],st=t("strong",null," Enter new description: ",-1),ot=[st],it=["id"],nt={class:"modal-footer"},at=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),rt=["disabled"],lt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function ct(i,s,n,o,e,l){return a(),r("div",{class:"modal fade",id:"changeDescriptionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Ge,[t("div",Qe,[t("div",qe,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change description",8,Je),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Ke)]),t("div",Xe,[Ze,t("div",et,[t("label",{for:"input-"+e.componentId,class:"form-label"},ot,8,tt),C(t("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>e.editDescription=d),type:"text",class:"form-control",id:"input-"+e.componentId},null,8,it),[[A,e.editDescription]])])]),t("div",nt,[at,t("button",{onClick:s[1]||(s[1]=(...d)=>l.update&&l.update(...d)),type:"button",class:"btn btn-primary",disabled:!e.editDescription||e.waiting},[e.waiting?(a(),r("span",lt)):c("",!0),m(" Submit ")],8,rt)])])])],8,Ye)}const dt=y(He,[["render",ct]]),ht={name:"ChangeNftTypeModal",props:["cAddress","cType","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editImageMetadataUrl:null,editImageOptions:[{description:"0) Onchain image(s)"},{description:"1) Static metadata URL"},{description:"2) Generative metadata (.json)"},{description:"3) Generative metadata"}],editImagePreviewUrl:"",typeChoice:0,waitingMetadata:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateMetadata(){this.waitingMetadata=!0;const i=new g(["function setMdTypeAndUrlOrImage(address nftAddress_, uint256 mdType_, string memory mdUrlOrImage_, string memory collectionImage_) external"]),s=new f(this.mdAddress,i,this.signer);this.typeChoice===0&&(this.editImagePreviewUrl=this.editImageMetadataUrl),this.editImagePreviewUrl===null&&(this.editImagePreviewUrl="");try{const n=await s.setMdTypeAndUrlOrImage(this.cAddress,this.typeChoice,this.editImageMetadataUrl,this.editImagePreviewUrl),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT image and/or metadata URL.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{type:this.typeChoice,image:this.editImagePreviewUrl}),this.editImageMetadataUrl=null,this.editImagePreviewUrl="",document.getElementById("closeModal-"+componentId).click(),this.waitingMetadata=!1):(this.toast.dismiss(o),this.waitingMetadata=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingMetadata=!1}}},setup(){const{signer:i}=w(),s=v();return{signer:i,toast:s}}},mt={class:"modal fade",id:"changeNftTypeModal",tabindex:"-1","aria-labelledby":"changeNftTypeModalLabel","aria-hidden":"true"},ut={class:"modal-dialog"},pt={class:"modal-content"},gt={class:"modal-header"},ft=t("h1",{class:"modal-title fs-5",id:"changeNftTypeModalLabel"},"Change NFT Type",-1),_t=["id"],bt={class:"modal-body"},yt=t("p",null,[t("strong",null,"Pick one of these options:")],-1),wt={class:"dropdown"},vt={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},kt={class:"dropdown-menu text-break"},Ct=["onClick"],At={class:"mt-3"},It={key:0},xt={key:1},Ut=t("strong",null,"file",-1),Tt={key:2},Mt=t("strong",null,"folder",-1),Nt={key:3},Ft=t("strong",null,"folder",-1),Bt={class:"mt-4"},$t={for:"imageMetadataUrl",class:"form-label"},St={key:0},Dt={key:1},Pt={key:2},Et={key:3},Lt={key:0,class:"mt-4"},Ot=t("label",{for:"collectionPreviewUrl",class:"form-label"},[t("strong",null," Change collection preview image (optional): ")],-1),Rt=t("div",{id:"previewImageHelp",class:"form-text"},"This is a preview image for the whole collection, not for individual NFTs.",-1),Wt={class:"modal-footer"},jt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Vt=["disabled"],zt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Ht(i,s,n,o,e,l){return a(),r("div",mt,[t("div",ut,[t("div",pt,[t("div",gt,[ft,t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,_t)]),t("div",bt,[t("p",null,"Current type of this NFT collection is: "+u(e.editImageOptions[n.cType].description)+".",1),yt,t("div",wt,[t("button",vt,u(e.editImageOptions[e.typeChoice].description),1),t("div",kt,[(a(!0),r(U,null,F(e.editImageOptions,(d,h)=>(a(),r("span",{key:h,onClick:I=>e.typeChoice=h,class:"dropdown-item cursor-pointer"},u(d.description),9,Ct))),128))])]),t("div",At,[e.typeChoice==0?(a(),r("p",It,' The "Onchain image(s)" option means that metadata is stored onchain (within the smart contract itself). Use this option if you want to add an image URL in the field below (not a metadata file). This is the default option for NFTs created through this launchpad. ')):c("",!0),e.typeChoice==1?(a(),r("p",xt,[m(' The "Static metadata URL" option means that all the NFTs in the collection have the same (static) image and meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a URL of a single metadata '),Ut,m(" (all NFTs have the same metadata and image). ")])):c("",!0),e.typeChoice==2?(a(),r("p",Tt,[m(' The "Generative metadata (.json)" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Mt,m(" URL with multiple metadata files in it, where these files HAVE a .json extension. ")])):c("",!0),e.typeChoice==3?(a(),r("p",Nt,[m(' The "Generative metadata" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Ft,m(" URL with multiple metadata files in it, where these files DO NOT HAVE a .json extension. ")])):c("",!0)]),t("div",Bt,[t("label",$t,[t("strong",null,[m(" Enter "),e.typeChoice==0?(a(),r("span",St,"image URL:")):c("",!0),e.typeChoice==1?(a(),r("span",Dt,"metadata file URL:")):c("",!0),e.typeChoice==2?(a(),r("span",Pt,"metadata folder URL:")):c("",!0),e.typeChoice==3?(a(),r("span",Et,"metadata folder URL:")):c("",!0)])]),C(t("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>e.editImageMetadataUrl=d),type:"text",class:"form-control",id:"imageMetadataUrl"},null,512),[[A,e.editImageMetadataUrl]])]),e.typeChoice>0?(a(),r("div",Lt,[Ot,C(t("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>e.editImagePreviewUrl=d),type:"text",class:"form-control",id:"collectionPreviewUrl","aria-describedby":"previewImageHelp"},null,512),[[A,e.editImagePreviewUrl]]),Rt])):c("",!0)]),t("div",Wt,[jt,t("button",{onClick:s[2]||(s[2]=(...d)=>l.updateMetadata&&l.updateMetadata(...d)),type:"button",class:"btn btn-primary",disabled:!e.editImageMetadataUrl||e.waitingMetadata},[e.waitingMetadata?(a(),r("span",zt)):c("",!0),m(" Submit ")],8,Vt)])])])])}const Yt=y(ht,[["render",Ht]]),Gt={name:"RemoveImageFromCollectionModal",props:["cAddress","mdAddress"],data(){return{componentId:null,images:[],imageUrl:null,waitingLoad:!1,waitingRemove:!1}},mounted(){this.componentId=this.$.uid},methods:{async loadImages(){this.waitingLoad=!0;const i=new g(["function getCollectionImages(address nftAddress_) external view returns (string[] memory)"]),s=new f(this.mdAddress,i,this.signer);try{this.images=await s.getCollectionImages(this.cAddress),this.waitingLoad=!1}catch(n){console.error(n),this.waitingLoad=!1}},async removeImage(i){this.waitingRemove=!0;const s=new g(["function removeImageFromCollectionByIndex(address nftAddress_, uint256 index_) external"]),n=new f(this.mdAddress,s,this.signer);try{const o=await n.removeImageFromCollectionByIndex(this.cAddress,i),e=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),l=await o.wait();if(l.status===1){this.toast.dismiss(e),this.toast("You have successfully removed an image from the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),this.imageUrl=null;const d=[...this.images];d.splice(i,1),this.images=d,this.waitingRemove=!1}else this.toast.dismiss(e),this.waitingRemove=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),console.log(l)}catch(o){console.error(o);try{let e=o.message.split("reason=")[1];e=e.split(", method=")[0],e=e.replace(/"/g,""),e=e.replace("execution reverted:","Error:"),console.log(e),this.toast(e,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingRemove=!1}}},setup(){const{signer:i}=w(),s=v();return{signer:i,toast:s}}},Qt=["aria-labelledby"],qt={class:"modal-dialog"},Jt={class:"modal-content"},Kt={class:"modal-header"},Xt=["id"],Zt=["id"],es={class:"modal-body"},ts={class:"row"},ss=["for"],os=t("strong",null," Load images from collection: ",-1),is=[os],ns=["disabled"],as={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},rs={key:0,class:"row mt-3"},ls={class:"card"},cs=["src"],ds={class:"card-body"},hs={class:"row"},ms=["onClick","disabled"],us=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function ps(i,s,n,o,e,l){return a(),r("div",{class:"modal fade",id:"removeImageFromCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",qt,[t("div",Jt,[t("div",Kt,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Remove Image From Collection",8,Xt),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Zt)]),t("div",es,[t("div",ts,[t("label",{for:"input-"+e.componentId,class:"form-label"},is,8,ss)]),t("div",null,[t("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=(...d)=>l.loadImages&&l.loadImages(...d)),disabled:e.waitingLoad},[e.waitingLoad?(a(),r("span",as)):c("",!0),m(" Load images ")],8,ns)]),e.images?(a(),r("div",rs,[(a(!0),r(U,null,F(e.images,(d,h)=>(a(),r("div",{key:d,class:"col-md-4 mb-3"},[t("div",ls,[t("img",{src:d,class:"card-img-top"},null,8,cs),t("div",ds,[t("div",hs,[t("button",{class:"btn btn-danger",onClick:I=>l.removeImage(h),disabled:e.waitingRemove||e.images.length==1}," Delete ",8,ms)])])])]))),128))])):c("",!0)]),us])])],8,Qt)}const gs=y(Gt,[["render",ps]]),fs={name:"NftCollection",data(){return{cAddress:null,cAuthorAddress:null,cAuthorDomain:null,cDescription:null,cImage:null,cName:null,cSupply:null,cType:0,mdAddress:null,priceBuyWei:null,priceSellWei:null,userTokenId:null,waitingBuy:!1,waitingData:!1,waitingSell:!1}},components:{AddImageToCollectionModal:ve,ChangeCollectionPreviewModal:ze,ChangeDescriptionModal:dt,ChangeNftTypeModal:Yt,ChatFeed:Q,ConnectWalletButton:q,RemoveImageFromCollectionModal:gs,WaitingToast:b},mounted(){this.cAddress=this.$route.query.id,this.cAddress&&this.getCollectionDetails()},computed:{getUsernameOrFullAddress(){if(this.cAuthorDomain){let i=String(this.cAuthorDomain).replace(this.$config.tldName,"");return N(i)+this.$config.tldName}else return this.cAuthorAddress},getUsernameOrShortAddress(){if(this.cAuthorAddress)if(this.cAuthorDomain){let i=String(this.cAuthorDomain).replace(this.$config.tldName,"");return N(i)+this.$config.tldName}else return T(this.cAuthorAddress);return null},isCurrentAddressOwner(){return this.cAuthorAddress&&this.address?String(this.cAuthorAddress).toLowerCase()===String(this.address).toLowerCase():!1}},methods:{getDomainName:J,async buyNft(){this.waitingBuy=!0;const i=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function mint(address to) external payable returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),s=new f(this.cAddress,i,this.signer);this.priceBuyWei=await s.getMintPrice();try{const n=await s.mint(this.address,{value:this.priceBuyWei}),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(o),this.toast("You have successfully bought the NFT! Congrats!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await s.getMintPrice(),this.priceSellWei=await s.getBurnPrice();try{this.userTokenId=await s.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await s.totalSupply(),this.waitingBuy=!1}else this.toast.dismiss(o),this.waitingBuy=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingBuy=!1}},async fetchUserDomain(){if(this.cAuthorAddress){const i=await this.getDomainName(this.cAuthorAddress);i&&(this.cAuthorDomain=i,K(window,this.cAuthorAddress,i+this.$config.tldName))}},formatPrice(i){if(i===null)return null;const s=Number(z(i));return s>100?s.toFixed(0):s>1?s.toFixed(2):s>.1?s.toFixed(4):s>.01?s.toFixed(5):s>.001?s.toFixed(6):s>1e-4?s.toFixed(7):s>1e-5?s.toFixed(8):s>1e-6?s.toFixed(9):s},async getCollectionDetails(i=!1){this.waitingData=!0;let s=X(window,this.cAddress);i&&(console.log("Refreshing collection metadata..."),s=null);let n=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(n=this.signer);const o=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function metadataAddress() public view returns (address)","function name() public view returns (string memory)","function owner() public view returns (address)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),e=new f(this.cAddress,o,n);s?.mdAddress?this.mdAddress=s.mdAddress:this.mdAddress=await e.metadataAddress();const l=new g(["function getCollectionDescription(address) public view returns (string memory)","function getCollectionMetadataType(address nftAddress_) external view returns (uint256)","function getCollectionPreviewImage(address) public view returns (string memory)"]),d=new f(this.mdAddress,l,n);this.priceBuyWei=await e.getMintPrice(),this.priceSellWei=await e.getBurnPrice(),s?.image?this.cImage=s.image:this.cImage=await d.getCollectionPreviewImage(this.cAddress),s?.description&&s.description!==""&&s.description!==null?this.cDescription=s.description:this.cDescription=await d.getCollectionDescription(this.cAddress),s?.type>=0?this.cType=s.type:this.cType=Number(await d.getCollectionMetadataType(this.cAddress)),s?.name?this.cName=s.name:this.cName=await e.name();try{this.userTokenId=await e.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.waitingData=!1,this.cSupply=await e.totalSupply(),s?.authorAddress?(this.cAuthorAddress=s.authorAddress,this.cAuthorDomain=s.authorDomain):this.cAuthorAddress=await e.owner(),this.cAuthorDomain=Z(window,this.cAuthorAddress),this.cAuthorDomain||this.fetchUserDomain(),s={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType},M(window,this.cAddress,s)},saveCollection(i){i?.type&&(this.cType=i.type),i?.description&&(this.cDescription=i.description),i?.image&&(this.cImage=i.image);const s={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType};M(window,this.cAddress,s)},async sellNft(){this.waitingSell=!0;const i=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function burn(uint256 tokenId) external returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),s=new f(this.cAddress,i,this.signer);try{const n=await s.burn(this.userTokenId),o=this.toast({component:b,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(o),this.toast("You have dumped the NFT.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await s.getMintPrice(),this.priceSellWei=await s.getBurnPrice();try{this.userTokenId=await s.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await s.totalSupply(),this.waitingSell=!1}else this.toast.dismiss(o),this.waitingSell=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingSell=!1}}},setup(){const{address:i,chainId:s,isActivated:n,signer:o}=w(),e=v();return{address:i,chainId:s,isActivated:n,shortenAddress:T,signer:o,toast:e}}},_s={class:"card border"},bs={class:"card-body"},ys={class:"fs-3"},ws={key:0,class:"mb-3 mt-3"},vs={key:1,class:"mb-3 mt-3"},ks={key:2,class:"d-flex justify-content-center mb-3"},Cs=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),As=[Cs],Is={class:"row"},xs={class:"col-md-5 text-center mb-3"},Us=["src"],Ts={class:"dropdown mt-3"},Ms=t("button",{class:"btn btn-outline-primary btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Actions ",-1),Ns={class:"dropdown-menu"},Fs={key:0},Bs=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeDescriptionModal"}," Change description ",-1),$s=[Bs],Ss={key:1},Ds=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeCollectionPreviewModal"}," Change collection preview image ",-1),Ps=[Ds],Es={key:2},Ls=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#addImageToCollectionModal"}," Add new image to collection ",-1),Os=[Ls],Rs={key:3},Ws=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#removeImageFromCollectionModal"}," Remove image from collection ",-1),js=[Ws],Vs={key:4},zs=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeNftTypeModal"}," Change collection type ",-1),Hs=[zs],Ys={class:"col-md-7"},Gs={class:"mt-1 mb-4 muted-text",style:{"font-size":"14px"}},Qs={class:"me-4"},qs=t("i",{class:"bi bi-file-earmark-text-fill me-1"},null,-1),Js={class:"me-4"},Ks=t("i",{class:"bi bi-coin me-1"},null,-1),Xs={class:"me-4"},Zs=t("i",{class:"bi bi-file-earmark-binary me-1"},null,-1),eo={class:"me-4"},to=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),so=["href"],oo={key:0},io={class:"me-4"},no=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),ao=["href"],ro={class:"row mb-3"},lo={key:0,class:"d-grid gap-2 col"},co={key:1,class:"d-grid gap-2 col"},ho=["disabled"],mo={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},uo={key:2,class:"d-grid gap-2 col"},po=["disabled"],go={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},fo={key:0},_o={key:0,class:"card border mt-3 scroll-500"},bo=G('<div class="card-body"><h5 class="mb-2 mt-3 text-center">Buy an NFT to see the chat</h5><div class="d-flex justify-content-center"><div class="col-12 col-lg-8"><p class="text-break text-center mt-3 mb-4"> This NFT&#39;s chat is open only for NFT holders. Buy an NFT to see the chat and talk with the NFT creator and other NFT holders. </p></div></div></div>',1),yo=[bo];function wo(i,s,n,o,e,l){const d=j,h=V,I=W,$=Y,S=_("ConnectWalletButton"),D=_("ChatFeed"),P=_("AddImageToCollectionModal"),E=_("ChangeCollectionPreviewModal"),L=_("ChangeDescriptionModal"),O=_("ChangeNftTypeModal"),R=_("RemoveImageFromCollectionModal");return a(),r(U,null,[p(I,null,{default:x(()=>[p(d,null,{default:x(()=>[m("NFT Collection Details | "+u(i.$config.projectMetadataTitle),1)]),_:1}),p(h,{property:"og:title",content:"NFT Collection Details | "+i.$config.projectMetadataTitle},null,8,["content"]),p(h,{name:"description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),p(h,{property:"og:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),p(h,{property:"og:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),p(h,{name:"twitter:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),p(h,{name:"twitter:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",_s,[t("div",bs,[t("p",ys,[t("i",{onClick:s[0]||(s[0]=k=>i.$router.push({path:"/nft"})),class:"bi bi-arrow-left-circle cursor-pointer"})]),e.cName?c("",!0):(a(),r("h3",ws,"NFT Collection Details")),e.cName?(a(),r("h3",vs,u(e.cName),1)):c("",!0),e.waitingData?(a(),r("div",ks,As)):c("",!0),t("div",Is,[t("div",xs,[t("img",{src:e.cImage,class:"img-fluid img-thumbnail rounded col-12"},null,8,Us),t("div",Ts,[Ms,t("ul",Ns,[l.isCurrentAddressOwner?(a(),r("li",Fs,$s)):c("",!0),l.isCurrentAddressOwner?(a(),r("li",Ss,Ps)):c("",!0),l.isCurrentAddressOwner&&e.cType==0?(a(),r("li",Es,Os)):c("",!0),l.isCurrentAddressOwner&&e.cType==0?(a(),r("li",Rs,js)):c("",!0),l.isCurrentAddressOwner?(a(),r("li",Vs,Hs)):c("",!0),t("li",null,[t("span",{class:"dropdown-item cursor-pointer",onClick:s[1]||(s[1]=k=>l.getCollectionDetails(!0))},"Refresh metadata")])])])]),t("div",Ys,[t("div",Gs,[t("p",Qs,[qs,m(" "+u(e.cDescription),1)]),t("p",Js,[Ks,m(" Buy/Sell price: "+u(l.formatPrice(e.priceBuyWei))+" "+u(i.$config.tokenSymbol)+" / "+u(l.formatPrice(e.priceSellWei))+" "+u(i.$config.tokenSymbol),1)]),t("p",Xs,[Zs,m(" "+u(e.cSupply)+" NFTs minted ",1)]),t("p",eo,[to,t("a",{href:i.$config.blockExplorerBaseUrl+"/address/"+e.cAddress,target:"_blank",style:{"text-decoration":"none"}},u(o.shortenAddress(e.cAddress)),9,so),l.getUsernameOrShortAddress?(a(),r("span",oo,[m(" by "),p($,{to:"/profile/?id="+String(l.getUsernameOrFullAddress)},{default:x(()=>[m(u(l.getUsernameOrShortAddress),1)]),_:1},8,["to"])])):c("",!0)]),t("p",io,[no,t("a",{href:i.$config.marketplaceNftCollectionBaseUrl+e.cAddress,target:"_blank",style:{"text-decoration":"none"}}," See on NFT marketplace ",8,ao)])]),t("div",ro,[o.isActivated?c("",!0):(a(),r("div",lo,[p(S,{class:"btn btn-primary",btnText:"Connect wallet"})])),o.isActivated?(a(),r("div",co,[t("button",{onClick:s[2]||(s[2]=(...k)=>l.buyNft&&l.buyNft(...k)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingBuy},[e.waitingBuy?(a(),r("span",mo)):c("",!0),m(" Buy for "+u(l.formatPrice(e.priceBuyWei))+" "+u(i.$config.tokenSymbol),1)],8,ho)])):c("",!0),o.isActivated?(a(),r("div",uo,[t("button",{onClick:s[3]||(s[3]=(...k)=>l.sellNft&&l.sellNft(...k)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingSell||!e.userTokenId||e.priceSellWei==0},[e.waitingSell?(a(),r("span",go)):c("",!0),m(" Sell for "+u(l.formatPrice(e.priceSellWei))+" "+u(i.$config.tokenSymbol),1)],8,po)])):c("",!0)]),o.isActivated?(a(),r("small",fo,[t("em",null," (Price may still change after pressing the button, so make sure to check the "+u(i.$config.tokenSymbol)+" amount in wallet.) ",1)])):c("",!0)])])])]),e.userTokenId?c("",!0):(a(),r("div",_o,yo)),i.$config.nftOrbisContext&&e.userTokenId?(a(),H(D,{key:e.cAddress,allPosts:!0,class:"mt-3 scroll-500",showQuotedPost:i.$config.showRepliesOnHomepage,orbisContext:i.$config.nftOrbisContext+":"+e.cAddress},null,8,["showQuotedPost","orbisContext"])):c("",!0),p(P,{cAddress:e.cAddress,mdAddress:e.mdAddress},null,8,["cAddress","mdAddress"]),p(E,{cAddress:e.cAddress,mdAddress:e.mdAddress,onSaveCollection:l.saveCollection},null,8,["cAddress","mdAddress","onSaveCollection"]),p(L,{cAddress:e.cAddress,cDescription:e.cDescription,mdAddress:e.mdAddress,onSaveCollection:l.saveCollection},null,8,["cAddress","cDescription","mdAddress","onSaveCollection"]),p(O,{mdAddress:e.mdAddress,cType:e.cType,cAddress:e.cAddress,onSaveCollection:l.saveCollection},null,8,["mdAddress","cType","cAddress","onSaveCollection"]),p(R,{mdAddress:e.mdAddress,cAddress:e.cAddress},null,8,["mdAddress","cAddress"])],64)}const Eo=y(fs,[["render",wo]]);export{Eo as default};
