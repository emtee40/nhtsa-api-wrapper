import{F as r,_ as e,g as t}from"./Fetch-44aa28fd.js";class o extends r{constructor(r){super(r)}GetParts(r){return e(this,void 0,void 0,(function*(){const e="GetParts",o=null==r?void 0:r.type,n=null==r?void 0:r.fromDate,s=null==r?void 0:r.toDate,i=null==r?void 0:r.page,a=t(r);if(r&&"object"!==a)return Promise.reject(new Error(`${e}, "params" argument must be of type object, got: <${a}> ${r}`));const u=t(o);if(o&&"number"!==u)return Promise.reject(new Error(`${e}, "params.type" argument must be of type number, got: <${u}> ${o}`));const m=t(n);if(n&&"string"!==m)return Promise.reject(new Error(`${e}, "params.fromDate" argument must be of type string, got: <${m}> ${n}`));const c=t(s);if(s&&"string"!==c)return Promise.reject(new Error(`${e}, "params.toDate" argument must be of type string, got: <${c}> ${s}`));const g=t(i);if(i&&"number"!==g)return Promise.reject(new Error(`${e}, "params.page" argument must be of type number, got: <${g}> ${i}`));const $=yield this.buildQueryString(r).catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),p=`${this.baseUrl}/${e}${$}`;return yield this.get(p).then(r=>r).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{o as GetParts};
//# sourceMappingURL=GetParts.js.map
