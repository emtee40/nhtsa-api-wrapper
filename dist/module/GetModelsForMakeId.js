import{_ as r}from"./tslib.es6-e8a9b979.js";import{F as e,g as t}from"./Fetch-980165d1.js";class s extends e{constructor(r){super(r)}GetModelsForMakeId(e){return r(this,void 0,void 0,(function*(){const r="GetModelsForMakeId",s=t(e);if("number"!==s)return Promise.reject(new Error(`${r}, "makeId" argument is required and must be of type number, got: `+`<${s}> ${e}`));const o=yield this.buildQueryString({}).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),i=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(i).then(r=>r).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}export{s as GetModelsForMakeId};
//# sourceMappingURL=GetModelsForMakeId.js.map
