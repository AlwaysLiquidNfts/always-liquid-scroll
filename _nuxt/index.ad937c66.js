import{M as p,N as v,a5 as k,a6 as D,a7 as j,a8 as x,a9 as O,aa as U,ab as N,ac as L}from"./entry.46d17a74.js";var A={},H={},S={};Object.defineProperty(S,"__esModule",{value:!0});var W=function(){function o(t){this.type=t,this.bubbles=!1,this.cancelable=!1,this.loaded=0,this.lengthComputable=!1,this.total=0}return o}();S.ProgressEvent=W;var f={},w=p&&p.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(t,e){o(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(f,"__esModule",{value:!0});var X=function(o){w(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t}(Error);f.SecurityError=X;var B=function(o){w(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t}(Error);f.InvalidStateError=B;var G=function(o){w(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t}(Error);f.NetworkError=G;var V=function(o){w(t,o);function t(){return o!==null&&o.apply(this,arguments)||this}return t}(Error);f.SyntaxError=V;var _={};Object.defineProperty(_,"__esModule",{value:!0});var z=function(){function o(){this.listeners={}}return o.prototype.addEventListener=function(t,e){t=t.toLowerCase(),this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e.handleEvent||e)},o.prototype.removeEventListener=function(t,e){if(t=t.toLowerCase(),!!this.listeners[t]){var r=this.listeners[t].indexOf(e.handleEvent||e);r<0||this.listeners[t].splice(r,1)}},o.prototype.dispatchEvent=function(t){var e=t.type.toLowerCase();if(t.target=this,this.listeners[e])for(var r=0,s=this.listeners[e];r<s.length;r++){var n=s[r];n.call(this,t)}var i=this["on"+e];return i&&i.call(this,t),!0},o}();_.XMLHttpRequestEventTarget=z;var R={},F=p&&p.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(t,e){o(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(R,"__esModule",{value:!0});var J=_,$=function(o){F(t,o);function t(){var e=o.call(this)||this;return e._contentType=null,e._body=null,e._reset(),e}return t.prototype._reset=function(){this._contentType=null,this._body=null},t.prototype._setData=function(e){if(e!=null)if(typeof e=="string")e.length!==0&&(this._contentType="text/plain;charset=UTF-8"),this._body=new Buffer(e,"utf-8");else if(Buffer.isBuffer(e))this._body=e;else if(e instanceof ArrayBuffer){for(var r=new Buffer(e.byteLength),s=new Uint8Array(e),n=0;n<e.byteLength;n++)r[n]=s[n];this._body=r}else if(e.buffer&&e.buffer instanceof ArrayBuffer){for(var r=new Buffer(e.byteLength),i=e.byteOffset,s=new Uint8Array(e.buffer),n=0;n<e.byteLength;n++)r[n]=s[n+i];this._body=r}else throw new Error("Unsupported send() data "+e)},t.prototype._finalizeHeaders=function(e,r){this._contentType&&!r["content-type"]&&(e["Content-Type"]=this._contentType),this._body&&(e["Content-Length"]=this._body.length.toString())},t.prototype._startUpload=function(e){this._body&&e.write(this._body),e.end()},t}(J.XMLHttpRequestEventTarget);R.XMLHttpRequestUpload=$;var y={};(function(){function o(s,n,i,h){return this instanceof o?(this.domain=s||void 0,this.path=n||"/",this.secure=!!i,this.script=!!h,this):new o(s,n,i,h)}o.All=Object.freeze(Object.create(null)),y.CookieAccessInfo=o;function t(s,n,i){return s instanceof t?s:this instanceof t?(this.name=null,this.value=null,this.expiration_date=1/0,this.path=String(i||"/"),this.explicit_path=!1,this.domain=n||null,this.explicit_domain=!1,this.secure=!1,this.noscript=!1,s&&this.parse(s,n,i),this):new t(s,n,i)}y.Cookie=t,t.prototype.toString=function(){var n=[this.name+"="+this.value];return this.expiration_date!==1/0&&n.push("expires="+new Date(this.expiration_date).toGMTString()),this.domain&&n.push("domain="+this.domain),this.path&&n.push("path="+this.path),this.secure&&n.push("secure"),this.noscript&&n.push("httponly"),n.join("; ")},t.prototype.toValueString=function(){return this.name+"="+this.value};var e=/[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;t.prototype.parse=function(n,i,h){if(this instanceof t){if(n.length>32768){console.warn("Cookie too long for parsing (>32768 characters)");return}var a=n.split(";").filter(function(E){return!!E}),c,u=a[0].match(/([^=]+)=([\s\S]*)/);if(!u){console.warn("Invalid cookie header encountered. Header: '"+n+"'");return}var l=u[1],d=u[2];if(typeof l!="string"||l.length===0||typeof d!="string"){console.warn("Unable to extract values from cookie header. Cookie: '"+n+"'");return}for(this.name=l,this.value=d,c=1;c<a.length;c+=1)switch(u=a[c].match(/([^=]+)(?:=([\s\S]*))?/),l=u[1].trim().toLowerCase(),d=u[2],l){case"httponly":this.noscript=!0;break;case"expires":this.expiration_date=d?Number(Date.parse(d)):1/0;break;case"path":this.path=d?d.trim():"",this.explicit_path=!0;break;case"domain":this.domain=d?d.trim():"",this.explicit_domain=!!this.domain;break;case"secure":this.secure=!0;break}return this.explicit_path||(this.path=h||"/"),this.explicit_domain||(this.domain=i),this}return new t().parse(n,i,h)},t.prototype.matches=function(n){return n===o.All?!0:!(this.noscript&&n.script||this.secure&&!n.secure||!this.collidesWith(n))},t.prototype.collidesWith=function(n){if(this.path&&!n.path||this.domain&&!n.domain||this.path&&n.path.indexOf(this.path)!==0||this.explicit_path&&n.path.indexOf(this.path)!==0)return!1;var i=n.domain&&n.domain.replace(/^[\.]/,""),h=this.domain&&this.domain.replace(/^[\.]/,"");if(h===i)return!0;if(h){if(!this.explicit_domain)return!1;var a=i.indexOf(h);return!(a===-1||a!==i.length-h.length)}return!0};function r(){var s,n,i;return this instanceof r?(s=Object.create(null),this.setCookie=function(a,c,u){var l,d;if(a=new t(a,c,u),l=a.expiration_date<=Date.now(),s[a.name]!==void 0){for(n=s[a.name],d=0;d<n.length;d+=1)if(i=n[d],i.collidesWith(a))return l?(n.splice(d,1),n.length===0&&delete s[a.name],!1):(n[d]=a,a);return l?!1:(n.push(a),a)}return l?!1:(s[a.name]=[a],s[a.name])},this.getCookie=function(a,c){var u,l;if(n=s[a],!!n)for(l=0;l<n.length;l+=1){if(u=n[l],u.expiration_date<=Date.now()){n.length===0&&delete s[u.name];continue}if(u.matches(c))return u}},this.getCookies=function(a){var c=[],u,l;for(u in s)l=this.getCookie(u,a),l&&c.push(l);return c.toString=function(){return c.join(":")},c.toValueString=function(){return c.map(function(E){return E.toValueString()}).join("; ")},c},this):new r}y.CookieJar=r,r.prototype.setCookies=function(n,i,h){n=Array.isArray(n)?n:n.split(e);var a=[],c,u;for(n=n.map(function(l){return new t(l,i,h)}),c=0;c<n.length;c+=1)u=n[c],this.setCookie(u,i,h)&&a.push(u);return a}})();var K=p&&p.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(t,e){o(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Z=p&&p.__assign||Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(o[s]=t[s])}return o};Object.defineProperty(H,"__esModule",{value:!0});var C=v,T=v,q=v,b=v,P=S,g=f,Q=_,I=R,M=y,m=function(o){K(t,o);function t(e){e===void 0&&(e={});var r=o.call(this)||this;return r.UNSENT=t.UNSENT,r.OPENED=t.OPENED,r.HEADERS_RECEIVED=t.HEADERS_RECEIVED,r.LOADING=t.LOADING,r.DONE=t.DONE,r.onreadystatechange=null,r.readyState=t.UNSENT,r.response=null,r.responseText="",r.responseType="",r.status=0,r.statusText="",r.timeout=0,r.upload=new I.XMLHttpRequestUpload,r.responseUrl="",r.withCredentials=!1,r._method=null,r._url=null,r._sync=!1,r._headers={},r._loweredHeaders={},r._mimeOverride=null,r._request=null,r._response=null,r._responseParts=null,r._responseHeaders=null,r._aborting=null,r._error=null,r._loadedBytes=0,r._totalBytes=0,r._lengthComputable=!1,r._restrictedMethods={CONNECT:!0,TRACE:!0,TRACK:!0},r._restrictedHeaders={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,via:!0},r._privateHeaders={"set-cookie":!0,"set-cookie2":!0},r._userAgent="Mozilla/5.0 ("+q.type()+" "+q.arch()+") node.js/"+process.versions.node+" v8/"+process.versions.v8,r._anonymous=e.anon||!1,r}return t.prototype.open=function(e,r,s,n,i){if(s===void 0&&(s=!0),e=e.toUpperCase(),this._restrictedMethods[e])throw new t.SecurityError("HTTP method "+e+" is not allowed in XHR");var h=this._parseUrl(r,n,i);this.readyState===t.HEADERS_RECEIVED||(this.readyState,t.LOADING),this._method=e,this._url=h,this._sync=!s,this._headers={},this._loweredHeaders={},this._mimeOverride=null,this._setReadyState(t.OPENED),this._request=null,this._response=null,this.status=0,this.statusText="",this._responseParts=[],this._responseHeaders=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1},t.prototype.setRequestHeader=function(e,r){if(this.readyState!==t.OPENED)throw new t.InvalidStateError("XHR readyState must be OPENED");var s=e.toLowerCase();if(this._restrictedHeaders[s]||/^sec-/.test(s)||/^proxy-/.test(s)){console.warn('Refused to set unsafe header "'+e+'"');return}r=r.toString(),this._loweredHeaders[s]!=null?(e=this._loweredHeaders[s],this._headers[e]=this._headers[e]+", "+r):(this._loweredHeaders[s]=e,this._headers[e]=r)},t.prototype.send=function(e){if(this.readyState!==t.OPENED)throw new t.InvalidStateError("XHR readyState must be OPENED");if(this._request)throw new t.InvalidStateError("send() already called");switch(this._url.protocol){case"file:":return this._sendFile(e);case"http:":case"https:":return this._sendHttp(e);default:throw new t.NetworkError("Unsupported protocol "+this._url.protocol)}},t.prototype.abort=function(){this._request!=null&&(this._request.abort(),this._setError(),this._dispatchProgress("abort"),this._dispatchProgress("loadend"))},t.prototype.getResponseHeader=function(e){if(this._responseHeaders==null||e==null)return null;var r=e.toLowerCase();return this._responseHeaders.hasOwnProperty(r)?this._responseHeaders[e.toLowerCase()]:null},t.prototype.getAllResponseHeaders=function(){var e=this;return this._responseHeaders==null?"":Object.keys(this._responseHeaders).map(function(r){return r+": "+e._responseHeaders[r]}).join(`\r
`)},t.prototype.overrideMimeType=function(e){if(this.readyState===t.LOADING||this.readyState===t.DONE)throw new t.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");this._mimeOverride=e.toLowerCase()},t.prototype.nodejsSet=function(e){if(this.nodejsHttpAgent=e.httpAgent||this.nodejsHttpAgent,this.nodejsHttpsAgent=e.httpsAgent||this.nodejsHttpsAgent,e.hasOwnProperty("baseUrl")){if(e.baseUrl!=null){var r=b.parse(e.baseUrl,!1,!0);if(!r.protocol)throw new t.SyntaxError("baseUrl must be an absolute URL")}this.nodejsBaseUrl=e.baseUrl}},t.nodejsSet=function(e){t.prototype.nodejsSet(e)},t.prototype._setReadyState=function(e){this.readyState=e,this.dispatchEvent(new P.ProgressEvent("readystatechange"))},t.prototype._sendFile=function(e){throw new Error("Protocol file: not implemented")},t.prototype._sendHttp=function(e){if(this._sync)throw new Error("Synchronous XHR processing not implemented");e&&(this._method==="GET"||this._method==="HEAD")?(console.warn("Discarding entity body for "+this._method+" requests"),e=null):e=e||"",this.upload._setData(e),this._finalizeHeaders(),this._sendHxxpRequest()},t.prototype._sendHxxpRequest=function(){var e=this;if(this.withCredentials){var r=t.cookieJar.getCookies(M.CookieAccessInfo(this._url.hostname,this._url.pathname,this._url.protocol==="https:")).toValueString();this._headers.cookie=this._headers.cookie2=r}var s=this._url.protocol==="http:"?[C,this.nodejsHttpAgent]:[T,this.nodejsHttpsAgent],n=s[0],i=s[1],h=n.request.bind(n),a=h({hostname:this._url.hostname,port:+this._url.port,path:this._url.path,auth:this._url.auth,method:this._method,headers:this._headers,agent:i});this._request=a,this.timeout&&a.setTimeout(this.timeout,function(){return e._onHttpTimeout(a)}),a.on("response",function(c){return e._onHttpResponse(a,c)}),a.on("error",function(c){return e._onHttpRequestError(a,c)}),this.upload._startUpload(a),this._request===a&&this._dispatchProgress("loadstart")},t.prototype._finalizeHeaders=function(){this._headers=Z({},this._headers,{Connection:"keep-alive",Host:this._url.host,"User-Agent":this._userAgent},this._anonymous?{Referer:"about:blank"}:{}),this.upload._finalizeHeaders(this._headers,this._loweredHeaders)},t.prototype._onHttpResponse=function(e,r){var s=this;if(this._request===e){if(this.withCredentials&&(r.headers["set-cookie"]||r.headers["set-cookie2"])&&t.cookieJar.setCookies(r.headers["set-cookie"]||r.headers["set-cookie2"]),[301,302,303,307,308].indexOf(r.statusCode)>=0){this._url=this._parseUrl(r.headers.location),this._method="GET",this._loweredHeaders["content-type"]&&(delete this._headers[this._loweredHeaders["content-type"]],delete this._loweredHeaders["content-type"]),this._headers["Content-Type"]!=null&&delete this._headers["Content-Type"],delete this._headers["Content-Length"],this.upload._reset(),this._finalizeHeaders(),this._sendHxxpRequest();return}this._response=r,this._response.on("data",function(i){return s._onHttpResponseData(r,i)}),this._response.on("end",function(){return s._onHttpResponseEnd(r)}),this._response.on("close",function(){return s._onHttpResponseClose(r)}),this.responseUrl=this._url.href.split("#")[0],this.status=r.statusCode,this.statusText=C.STATUS_CODES[this.status],this._parseResponseHeaders(r);var n=this._responseHeaders["content-length"]||"";this._totalBytes=+n,this._lengthComputable=!!n,this._setReadyState(t.HEADERS_RECEIVED)}},t.prototype._onHttpResponseData=function(e,r){this._response===e&&(this._responseParts.push(new Buffer(r)),this._loadedBytes+=r.length,this.readyState!==t.LOADING&&this._setReadyState(t.LOADING),this._dispatchProgress("progress"))},t.prototype._onHttpResponseEnd=function(e){this._response===e&&(this._parseResponse(),this._request=null,this._response=null,this._setReadyState(t.DONE),this._dispatchProgress("load"),this._dispatchProgress("loadend"))},t.prototype._onHttpResponseClose=function(e){if(this._response===e){var r=this._request;this._setError(),r.abort(),this._setReadyState(t.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}},t.prototype._onHttpTimeout=function(e){this._request===e&&(this._setError(),e.abort(),this._setReadyState(t.DONE),this._dispatchProgress("timeout"),this._dispatchProgress("loadend"))},t.prototype._onHttpRequestError=function(e,r){this._request===e&&(this._setError(),e.abort(),this._setReadyState(t.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend"))},t.prototype._dispatchProgress=function(e){var r=new t.ProgressEvent(e);r.lengthComputable=this._lengthComputable,r.loaded=this._loadedBytes,r.total=this._totalBytes,this.dispatchEvent(r)},t.prototype._setError=function(){this._request=null,this._response=null,this._responseHeaders=null,this._responseParts=null},t.prototype._parseUrl=function(e,r,s){var n=this.nodejsBaseUrl==null?e:b.resolve(this.nodejsBaseUrl,e),i=b.parse(n,!1,!0);i.hash=null;var h=(i.auth||"").split(":"),a=h[0],c=h[1];return(a||c||r||s)&&(i.auth=(r||a||"")+":"+(s||c||"")),i},t.prototype._parseResponseHeaders=function(e){this._responseHeaders={};for(var r in e.headers){var s=r.toLowerCase();this._privateHeaders[s]||(this._responseHeaders[s]=e.headers[r])}this._mimeOverride!=null&&(this._responseHeaders["content-type"]=this._mimeOverride)},t.prototype._parseResponse=function(){var e=Buffer.concat(this._responseParts);switch(this._responseParts=null,this.responseType){case"json":this.responseText=null;try{this.response=JSON.parse(e.toString("utf-8"))}catch{this.response=null}return;case"buffer":this.responseText=null,this.response=e;return;case"arraybuffer":this.responseText=null;for(var r=new ArrayBuffer(e.length),s=new Uint8Array(r),n=0;n<e.length;n++)s[n]=e[n];this.response=r;return;case"text":default:try{this.responseText=e.toString(this._parseResponseEncoding())}catch{this.responseText=e.toString("binary")}this.response=this.responseText}},t.prototype._parseResponseEncoding=function(){return/;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"]||"")[1]||"utf-8"},t.ProgressEvent=P.ProgressEvent,t.InvalidStateError=g.InvalidStateError,t.NetworkError=g.NetworkError,t.SecurityError=g.SecurityError,t.SyntaxError=g.SyntaxError,t.XMLHttpRequestUpload=I.XMLHttpRequestUpload,t.UNSENT=0,t.OPENED=1,t.HEADERS_RECEIVED=2,t.LOADING=3,t.DONE=4,t.cookieJar=M.CookieJar(),t}(Q.XMLHttpRequestEventTarget);H.XMLHttpRequest=m;m.prototype.nodejsHttpAgent=C.globalAgent;m.prototype.nodejsHttpsAgent=T.globalAgent;m.prototype.nodejsBaseUrl=null;(function(o){function t(r){for(var s in r)o.hasOwnProperty(s)||(o[s]=r[s])}Object.defineProperty(o,"__esModule",{value:!0}),t(H);var e=_;o.XMLHttpRequestEventTarget=e.XMLHttpRequestEventTarget})(A);const Y=k("XMLHttpRequest")||A.XMLHttpRequest;class tt extends D{constructor(t){super(),this.url=t}formatError(t,e,r=-1){return{error:{message:e,code:r},id:t.id,jsonrpc:t.jsonrpc}}send(t,e){return new Promise(r=>{if(t.method==="eth_subscribe"){const h=this.formatError(t,"Subscriptions are not supported by this HTTP endpoint");return this.emit("error",h),r(h)}const s=new Y;let n=!1;const i=(h,a)=>{if(!n)if(s.abort(),n=!0,e)e(h,a);else{const{id:c,jsonrpc:u}=t,l=h?{id:c,jsonrpc:u,error:{message:h.message,code:h.code}}:{id:c,jsonrpc:u,result:a};this.emit("payload",l),r(l)}};s.open("POST",this.url,!0),s.setRequestHeader("Content-Type","application/json"),s.timeout=60*1e3,s.onerror=i,s.ontimeout=i,s.onreadystatechange=()=>{if(s.readyState===4)try{const h=JSON.parse(s.responseText);i(h.error,h.result)}catch(h){i(h)}},s.send(JSON.stringify(t))})}}const et=require("web3-provider-engine"),rt=require("web3-provider-engine/subproviders/cache"),st=require("web3-provider-engine/subproviders/fixture"),nt=require("web3-provider-engine/subproviders/filters"),it=require("web3-provider-engine/subproviders/hooked-wallet"),ot=require("web3-provider-engine/subproviders/nonce-tracker"),at=require("web3-provider-engine/subproviders/subscriptions");class ct extends et{constructor(t){if(super({pollingInterval:t.pollingInterval||8e3}),this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModal=j,this.qrcodeModalOptions=void 0,this.rpc=null,this.infuraId="",this.http=null,this.isConnecting=!1,this.connected=!1,this.connectCallbacks=[],this.accounts=[],this.chainId=1,this.rpcUrl="",this.enable=async()=>{const e=await this.getWalletConnector();if(e)return this.start(),this.subscribeWalletConnector(),e.accounts;throw new Error("Failed to connect to WalleConnect")},this.request=async e=>this.send(e),this.send=async(e,r)=>{var s;if(typeof e=="string"){const n=e;let i=r;return n==="personal_sign"&&(i=x(i)),this.sendAsyncPromise(n,i)}if(e=Object.assign({id:O(),jsonrpc:"2.0"},e),e.method==="personal_sign"&&(e.params=x(e.params)),r){this.sendAsync(e,r);return}if(e.method==="eth_signTypedData_v4"&&((s=this.walletMeta)===null||s===void 0?void 0:s.name)==="MetaMask"){const{result:n}=await this.handleOtherRequests(e);return n}else return this.sendAsyncPromise(e.method,e.params)},this.onConnect=e=>{this.connectCallbacks.push(e)},this.triggerConnect=e=>{this.connectCallbacks&&this.connectCallbacks.length&&this.connectCallbacks.forEach(r=>r(e))},this.bridge=t.connector?t.connector.bridge:t.bridge||"https://bridge.walletconnect.org",this.qrcode=typeof t.qrcode>"u"||t.qrcode!==!1,this.qrcodeModal=t.qrcodeModal||this.qrcodeModal,this.qrcodeModalOptions=t.qrcodeModalOptions,this.wc=t.connector||new U({bridge:this.bridge,qrcodeModal:this.qrcode?this.qrcodeModal:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:t?.storageId,signingMethods:t?.signingMethods,clientMeta:t?.clientMeta}),this.rpc=t.rpc||null,!this.rpc&&(!t.infuraId||typeof t.infuraId!="string"||!t.infuraId.trim()))throw new Error("Missing one of the required parameters: rpc or infuraId");this.infuraId=t.infuraId||"",this.chainId=t?.chainId||this.chainId,this.initialize()}get isWalletConnect(){return!0}get connector(){return this.wc}get walletMeta(){return this.wc.peerMeta}async disconnect(){this.close()}async close(){await(await this.getWalletConnector({disableSessionCreation:!0})).killSession(),await this.onDisconnect()}async handleRequest(t){try{let e,r=null;const s=await this.getWalletConnector();switch(t.method){case"wc_killSession":await this.close(),r=null;break;case"eth_accounts":r=s.accounts;break;case"eth_coinbase":r=s.accounts[0];break;case"eth_chainId":r=s.chainId;break;case"net_version":r=s.chainId;break;case"eth_uninstallFilter":this.sendAsync(t,n=>n),r=!0;break;default:e=await this.handleOtherRequests(t)}return e||this.formatResponse(t,r)}catch(e){throw this.emit("error",e),e}}async handleOtherRequests(t){if(!N.includes(t.method)&&t.method.startsWith("eth_"))return this.handleReadRequests(t);const r=await(await this.getWalletConnector()).sendCustomRequest(t);return this.formatResponse(t,r)}async handleReadRequests(t){if(!this.http){const e=new Error("HTTP Connection not available");throw this.emit("error",e),e}return this.http.send(t)}formatResponse(t,e){return{id:t.id,jsonrpc:t.jsonrpc,result:e}}getWalletConnector(t={}){const{disableSessionCreation:e=!1}=t;return new Promise((r,s)=>{const n=this.wc;this.isConnecting?this.onConnect(i=>r(i)):!n.connected&&!e?(this.isConnecting=!0,n.on("modal_closed",()=>{s(new Error("User closed modal"))}),n.createSession({chainId:this.chainId}).then(()=>{n.on("connect",(i,h)=>{if(i)return this.isConnecting=!1,s(i);this.isConnecting=!1,this.connected=!0,h&&this.updateState(h.params[0]),this.emit("connect"),this.triggerConnect(n),r(n)})}).catch(i=>{this.isConnecting=!1,s(i)})):(this.connected||(this.connected=!0,this.updateState(n.session)),r(n))})}async subscribeWalletConnector(){const t=await this.getWalletConnector();t.on("disconnect",e=>{if(e){this.emit("error",e);return}this.onDisconnect()}),t.on("session_update",(e,r)=>{if(e){this.emit("error",e);return}this.updateState(r.params[0])})}async onDisconnect(){await this.stop(),this.emit("close",1e3,"Connection closed"),this.emit("disconnect",1e3,"Connection disconnected"),this.connected=!1}async updateState(t){const{accounts:e,chainId:r,networkId:s,rpcUrl:n}=t;(!this.accounts||e&&this.accounts!==e)&&(this.accounts=e,this.emit("accountsChanged",e)),(!this.chainId||r&&this.chainId!==r)&&(this.chainId=r,this.emit("chainChanged",r)),(!this.networkId||s&&this.networkId!==s)&&(this.networkId=s,this.emit("networkChanged",s)),this.updateRpcUrl(this.chainId,n||"")}updateRpcUrl(t,e=""){const r={infuraId:this.infuraId,custom:this.rpc||void 0};e=e||L(t,r),e?(this.rpcUrl=e,this.updateHttpConnection()):this.emit("error",new Error(`No RPC Url available for chainId: ${t}`))}updateHttpConnection(){this.rpcUrl&&(this.http=new tt(this.rpcUrl),this.http.on("payload",t=>this.emit("payload",t)),this.http.on("error",t=>this.emit("error",t)))}sendAsyncPromise(t,e){return new Promise((r,s)=>{this.sendAsync({id:O(),jsonrpc:"2.0",method:t,params:e||[]},(n,i)=>{if(n){s(n);return}r(i.result)})})}initialize(){this.updateRpcUrl(this.chainId),this.addProvider(new st({eth_hashrate:"0x00",eth_mining:!1,eth_syncing:!0,net_listening:!0,web3_clientVersion:"WalletConnect/v1.x.x/javascript"})),this.addProvider(new rt),this.addProvider(new at),this.addProvider(new nt),this.addProvider(new ot),this.addProvider(new it(this.configWallet())),this.addProvider({handleRequest:async(t,e,r)=>{try{const{error:s,result:n}=await this.handleRequest(t);r(s,n)}catch(s){r(s)}},setEngine:t=>t})}configWallet(){return{getAccounts:async t=>{try{const r=(await this.getWalletConnector()).accounts;r&&r.length?t(null,r):t(new Error("Failed to get accounts"))}catch(e){t(e)}},processMessage:async(t,e)=>{try{const s=await(await this.getWalletConnector()).signMessage([t.from,t.data]);e(null,s)}catch(r){e(r)}},processPersonalMessage:async(t,e)=>{try{const s=await(await this.getWalletConnector()).signPersonalMessage([t.data,t.from]);e(null,s)}catch(r){e(r)}},processSignTransaction:async(t,e)=>{try{const s=await(await this.getWalletConnector()).signTransaction(t);e(null,s)}catch(r){e(r)}},processTransaction:async(t,e)=>{try{const s=await(await this.getWalletConnector()).sendTransaction(t);e(null,s)}catch(r){e(r)}},processTypedMessage:async(t,e)=>{try{const s=await(await this.getWalletConnector()).signTypedData([t.from,t.data]);e(null,s)}catch(r){e(r)}}}}}export{ct as default};
