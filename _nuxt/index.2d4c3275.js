import{H as k,T as $,M as A}from"./components.ada17d34.js";import{a as C,I as b,C as w,A as T,l as F,o,b as d,f as e,v as E,x as M,y as m,i as _,p as S,e as h,w as g,F as I,E as v,G as B,t as p,c as L,D as P}from"./entry.823d66ad.js";import{f as D,s as q}from"./storageUtils.7fb40e16.js";import"./composables.c1b61f99.js";const j={name:"SearchNftModal",data(){return{componentId:null,searchText:"",waitingFind:!1,findError:!1}},mounted(){this.componentId=this.$.uid},methods:{async findNft(){if(this.waitingFind=!0,this.findError=!1,this.searchText){if(String(this.searchText).toLowerCase().startsWith("0x"))return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:this.searchText}}),this.searchText=null,this.waitingFind=!1;{const s=new b(["function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]);let t=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(t=this.signer);const c=await new w(this.$config.nftLaunchpadBondingAddress,s,t).getNftContractAddress(this.searchText);if(c!==T)return document.getElementById("closeModal-"+this.componentId).click(),this.$router.push({path:"/nft/collection/",query:{id:c}}),this.searchText=null,this.waitingFind=!1}return this.findError=!0,this.waitingFind=!1}}},setup(){const{chainId:s,isActivated:t,signer:r}=F();return{chainId:s,isActivated:t,signer:r}}},V=["aria-labelledby"],H={class:"modal-dialog"},U={class:"modal-content"},G={class:"modal-header"},W=["id"],Z=["id"],z={class:"modal-body"},J={class:"mb-3"},K=["for"],O=["for"],Q={key:0},R={class:"modal-footer"},X=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Y=["disabled"],tt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function et(s,t,r,c,n,l){return o(),d("div",{class:"modal fade",id:"searchNftModal",tabindex:"-1","aria-labelledby":"modalLabel-"+n.componentId,"aria-hidden":"true"},[e("div",H,[e("div",U,[e("div",G,[e("h1",{class:"modal-title fs-5",id:"modalLabel-"+n.componentId},"Find NFT collection",8,W),e("button",{id:"closeModal-"+n.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Z)]),e("div",z,[e("div",J,[e("label",{for:"input-"+n.componentId,class:"form-label"},"Enter NFT collection address or unique ID:",8,K),E(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>n.searchText=a),type:"text",class:"form-control",for:"input-"+n.componentId},null,8,O),[[M,n.searchText]])]),n.findError?(o(),d("p",Q,"Error: Collection not found...")):m("",!0)]),e("div",R,[X,e("button",{onClick:t[1]||(t[1]=(...a)=>l.findNft&&l.findNft(...a)),type:"button",class:"btn btn-primary",disabled:n.waitingFind},[n.waitingFind?(o(),d("span",tt)):m("",!0),_(" Find ")],8,Y)])])])],8,V)}const st=C(j,[["render",et]]),nt={name:"Nft",props:["hideBackButton"],data(){return{allNftsArrayLength:0,allNftsIndexStart:0,allNftsIndexEnd:0,featuredNfts:[],lastNfts:[],waitingData:!1}},components:{SearchNftModal:st},mounted(){this.$config.nftLaunchpadBondingAddress&&(this.fetchFeaturedNfts(),this.fetchLastNfts())},computed:{showLoadMoreButton(){return this.allNftsIndexEnd>0}},methods:{async fetchFeaturedNfts(){this.waitingData=!0;let s=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(s=this.signer);const t=new b(["function getFeaturedNftContracts(uint256 amount) external view returns(address[] memory)"]),c=await new w(this.$config.nftLaunchpadBondingAddress,t,s).getFeaturedNftContracts(4);await this.parseNftsArray(c,this.featuredNfts,s)},async fetchLastNfts(){this.waitingData=!0;let s=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(s=this.signer);const t=new b(["function getLastNftContracts(uint256 amount) external view returns(address[] memory)","function getNftContracts(uint256 fromIndex, uint256 toIndex) external view returns(address[] memory)","function getNftContractsArrayLength() external view returns(uint256)"]),r=new w(this.$config.nftLaunchpadBondingAddress,t,s);if(Number(this.allNftsArrayLength)===0&&(this.allNftsArrayLength=await r.getNftContractsArrayLength()),Number(this.allNftsArrayLength)===1){const c=await r.getLastNftContracts(1);await this.parseNftsArray(c,this.lastNfts,s)}else if(Number(this.allNftsArrayLength)>1){this.allNftsIndexEnd===0&&(this.allNftsIndexEnd=this.allNftsArrayLength-1,this.allNftsArrayLength<this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=0:this.allNftsIndexStart=this.allNftsArrayLength-this.$config.nftLaunchpadLatestItems);const n=[...await r.getNftContracts(this.allNftsIndexStart,this.allNftsIndexEnd)];n.reverse(),await this.parseNftsArray(n,this.lastNfts,s),this.allNftsIndexEnd>this.$config.nftLaunchpadLatestItems?this.allNftsIndexEnd=this.allNftsIndexEnd-this.$config.nftLaunchpadLatestItems:this.allNftsIndexEnd=0,this.allNftsIndexStart>this.$config.nftLaunchpadLatestItems?this.allNftsIndexStart=this.allNftsIndexStart-this.$config.nftLaunchpadLatestItems:this.allNftsIndexStart=0}this.waitingData=!1},formatPrice(s){if(s===null)return null;const t=Number(S(s));return t>100?t.toFixed(0):t>1?t.toFixed(2):t>.1?t.toFixed(4):t>.01?t.toFixed(5):t>.001?t.toFixed(6):t>1e-4?t.toFixed(7):t>1e-5?t.toFixed(8):t>1e-6?t.toFixed(9):t},async parseNftsArray(s,t,r){const c=new b(["function collectionPreview() public view returns (string memory)","function getMintPrice() public view returns (uint256)","function name() public view returns (string memory)"]);for(let n=0;n<s.length;n++){const l=new w(s[n],c,r);let a=D(window,s[n]);a||(a={address:s[n]});let f;a?.name?f=a.name:(f=await l.name(),a.name=f);const y=await l.getMintPrice();let u;if(a?.image?u=a.image:(u=await l.collectionPreview(),a.image=u),a.image.includes(".ipfs.sphn.link/")){const N=a.image.split(".ipfs.sphn.link/"),i=N[0].replace("https://",""),x=this.$config.ipfsGateway+i+"/"+N[1];a.image=x,u=x}q(window,s[n],a),t.push({address:s[n],image:u,name:f,price:y})}}},setup(){const{address:s,chainId:t,isActivated:r,signer:c}=F();return{address:s,chainId:t,isActivated:r,signer:c}}},at={class:"card border scroll-500"},it={class:"card-body"},ot=e("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),rt=[ot],ct={class:"d-flex flex-row flex-wrap mt-3"},dt=e("div",{class:"mb-3 me-auto"},"Browse NFTs",-1),lt={class:"mb-3"},ft=e("i",{class:"bi bi-plus-circle"},null,-1),ht=e("button",{class:"btn btn-outline-primary btn-sm ms-2","data-bs-toggle":"modal","data-bs-target":"#searchNftModal"},[e("i",{class:"bi bi-search"}),_(" Find ")],-1),ut={key:1,class:"mb-3"},mt={key:2,class:"row"},pt={class:"card border mb-3"},gt=["src","alt"],_t={class:"card-body rounded-bottom-3"},Nt={class:"card-text mb-1"},bt={class:"card-text"},wt={key:3,class:"mt-3 mb-3"},yt={class:"row"},It={class:"card border mb-3"},xt=["src","alt"],vt={class:"card-body rounded-bottom-3"},Lt={class:"card-text mb-1"},Ct={class:"card-text"},Ft={key:4,class:"d-flex justify-content-center mb-3"},kt=e("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),$t=[kt],At={key:5,class:"d-grid gap-2"},Tt=["disabled"],Et={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function Mt(s,t,r,c,n,l){const a=$,f=A,y=k,u=B,N=P("SearchNftModal");return o(),d(I,null,[h(y,null,{default:g(()=>[h(a,null,{default:g(()=>[_(p(s.$config.projectName),1)]),_:1}),h(f,{property:"og:title",content:s.$config.projectName},null,8,["content"]),h(f,{name:"description",content:"Social NFT Marketplace where NFTs are always liquid."}),h(f,{property:"og:image",content:s.$config.projectUrl+s.$config.previewImage},null,8,["content"]),h(f,{property:"og:description",content:"Social NFT Marketplace where NFTs are always liquid."}),h(f,{name:"twitter:image",content:s.$config.projectUrl+s.$config.previewImage},null,8,["content"]),h(f,{name:"twitter:description",content:"Social NFT Marketplace where NFTs are always liquid."})]),_:1}),e("div",at,[e("div",it,[r.hideBackButton?m("",!0):(o(),d("p",{key:0,class:"fs-3",onClick:t[0]||(t[0]=i=>s.$router.back())},rt)),e("h3",ct,[dt,e("div",lt,[h(u,{class:"btn btn-outline-primary btn-sm",to:"/nft/create"},{default:g(()=>[ft,_(" Create ")]),_:1}),ht])]),n.featuredNfts.length>0?(o(),d("h4",ut,"Featured")):m("",!0),n.featuredNfts.length>0?(o(),d("div",mt,[(o(!0),d(I,null,v(n.featuredNfts,i=>(o(),L(u,{key:i.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+i.address},{default:g(()=>[e("div",pt,[e("img",{src:i.image,class:"card-img-top",alt:i.name},null,8,gt),e("div",_t,[e("p",Nt,[e("strong",null,p(i.name),1)]),e("small",bt,p(l.formatPrice(i.price))+" "+p(s.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))])):m("",!0),n.lastNfts.length>0?(o(),d("h4",wt,"Latest")):m("",!0),e("div",yt,[(o(!0),d(I,null,v(n.lastNfts,i=>(o(),L(u,{key:i.address,class:"col-md-3 text-decoration-none",to:"/nft/collection?id="+i.address},{default:g(()=>[e("div",It,[e("img",{src:i.image,class:"card-img-top",alt:i.name},null,8,xt),e("div",vt,[e("p",Lt,[e("strong",null,p(i.name),1)]),e("small",Ct,p(l.formatPrice(i.price))+" "+p(s.$config.tokenSymbol),1)])])]),_:2},1032,["to"]))),128))]),n.waitingData?(o(),d("div",Ft,$t)):m("",!0),l.showLoadMoreButton?(o(),d("div",At,[e("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...i)=>l.fetchLastNfts&&l.fetchLastNfts(...i)),disabled:n.waitingData},[n.waitingData?(o(),d("span",Et)):m("",!0),_(" Load more ")],8,Tt)])):m("",!0)])]),h(N)],64)}const qt=C(nt,[["render",Mt]]);export{qt as default};
