import{_ as e}from"./tslib.es6-e8a9b979.js";import{F as r,g as t}from"./Fetch-980165d1.js";class i extends r{constructor(e){super(e)}GetVehicleVariableValuesList(r){return e(this,void 0,void 0,(function*(){const e="GetVehicleVariableValuesList",i=t(r);if("string"!==i&&"number"!==i)return Promise.reject(new Error(`${e}, "variableValue" argument is required and must be of type string or number, got: `+`<${i}> ${r}`));"string"===i&&(r=encodeURI(r));const s=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),n=`${this.baseUrl}/${e}/${r}${s}`;return yield this.get(n).then(e=>e).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{i as GetVehicleVariableValuesList};
//# sourceMappingURL=GetVehicleVariableValuesList.js.map
