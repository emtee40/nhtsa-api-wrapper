import{_ as e}from"./tslib.es6-e8a9b979.js";import{F as r,g as t}from"./Fetch-980165d1.js";class o extends r{constructor(e){super(e)}GetModelsForMakeIdYear(r){var o,i,s;return e(this,void 0,void 0,(function*(){const e="GetModelsForMakeIdYear",n=null===(o=r)||void 0===o?void 0:o.makeId,a=null===(i=r)||void 0===i?void 0:i.modelYear,m=null===(s=r)||void 0===s?void 0:s.vehicleType,c=t(r);if("object"!==c)return Promise.reject(new Error(`${e}, "params" argument must be of type object, got: `+`<${c}> ${r}`));const d=t(n);if("number"!==d)return Promise.reject(new Error(`${e}, "params.makeId" argument is required and must be of type number, got: `+`<${d}> ${n}`));if(!a&&!m)return Promise.reject(new Error(`${e}, either one of "params.modelYear" or "params.vehicleType" is required, got: `+`${a} | ${m}`));const u=t(a);if(a&&"number"!==u)return Promise.reject(new Error(`${e}, "params.modelYear" must be of type number, got: `+`<${u}> ${a}`));const $=t(m);if(m&&"string"!==$)return Promise.reject(new Error(`${e}, "params.vehicleType" must be of type string, got: `+`<${$}> ${m}`));let l=`${e}/makeId/${n}/`;l+=a&&m?`modelYear/${a}/vehicleType/${m}`:a?`modelYear/${a}`:`vehicleType/${m}`;const p=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),b=`${this.baseUrl}/${l}${p}`;return yield this.get(b).then(e=>e).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{o as GetModelsForMakeIdYear};
//# sourceMappingURL=GetModelsForMakeIdYear.js.map
