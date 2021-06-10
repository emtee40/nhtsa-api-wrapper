var NHTSA=function(e,r){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(r),n=Object.freeze({__proto__:null});function s(e,r,t,o){return new(t||(t=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,a)}c((o=o.apply(e,r||[])).next())}))}function i(e){const r=Object.prototype.toString.call(e).toLowerCase();return r.slice(8,r.length-1)}const a={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9},c=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];const u={apiResponseFormat:"json",baseUrl:"https://vpic.nhtsa.dot.gov/api/vehicles",options:{}};class d{constructor(e){let r;r=e&&"object"===i(e)?Object.assign(Object.assign(Object.assign({},u),e),{options:Object.assign(Object.assign({},u.options),e.options)}):Object.assign({},u),this.apiResponseFormat="json",this.baseUrl=r.baseUrl,this.options=r.options}buildQueryString(e,r=!1){return s(this,void 0,void 0,(function*(){return e=e&&"object"===i(e)?Object.assign(Object.assign({},e),{format:this.apiResponseFormat}):{format:this.apiResponseFormat},yield function(e={},r=!1){if("object"!==i(e))return Promise.reject(new Error("queryString(params) - expected params in the form of an object, got: "+e));const t=Object.entries(e),o=t.length;if(o<1)return Promise.resolve("");let n=!1;const s=t.map(([e,t],s)=>{let a="",c="";const u=i(t);if(t&&"number"===u&&(t=t.toString()),(t||r)&&("string"===u||"number"===u))return n||(a="?",n=!0),s<o-1&&(c="&"),`${a}${e}=${t}${c}`});return Promise.resolve(encodeURI(s.join("")))}(e,r)}))}get(e,r={}){return s(this,void 0,void 0,(function*(){const t=i(e);if("string"!==t)return Promise.reject(new Error("Fetch.get(url) - url argument must be of type string, got: "+t));const n=i(r);if("object"!==n)return Promise.reject(new Error("Fetch.get(url, options) - options argument must be of type object, got: "+n));const s=Object.assign(Object.assign({},this.options),r),a=yield o.default(e,s).then(e=>{if(!(null==e?void 0:e.status)||e.status>=400)throw new Error(`Bad response from server, code: ${null==e?void 0:e.status}, text: ${null==e?void 0:e.statusText}, headers: ${null==e?void 0:e.headers}`);return e}).catch(e=>Promise.reject(new Error("Fetch.get() http error: "+e))),c=yield a.json().then(e=>e),u=Object.assign(Object.assign({},c),{FetchResponse:{headers:a.headers,ok:a.ok,redirected:a.redirected,status:a.status,statusText:a.statusText,url:a.url}});return Promise.resolve(u)}))}}class l extends d{constructor(e){super(e)}DecodeVin(e,r){return s(this,void 0,void 0,(function*(){const t="DecodeVin",o=i(r);if(r&&"object"!==o)return Promise.reject(new Error(`DecodeVin, "params" argument must be of type object, got: <${o}> ${r}`));const n=i(e);if("string"!==n)return Promise.reject(new Error(`DecodeVin, "vin" argument is required and must be of type string, got: <${n}> ${e}`));const s=i(null==r?void 0:r.modelYear);if((null==r?void 0:r.modelYear)&&"number"!==s)return Promise.reject(new Error(`DecodeVin, "params.modelYear" argument is required and must be of type string or number, got: <${s}> ${r.modelYear}`));const a=yield this.buildQueryString(r).catch(e=>Promise.reject(new Error(`${t}, Error building query string: ${e}`))),c=`${this.baseUrl}/${t}/${e}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${t}, Fetch.get() error: ${e}`)))}))}}class m extends d{constructor(e){super(e)}DecodeVinExtended(e,r){return s(this,void 0,void 0,(function*(){const t="DecodeVinExtended",o=i(r);if(r&&"object"!==o)return Promise.reject(new Error(`DecodeVinExtended, "params" argument must be of type object, got: <${o}> ${r}`));const n=i(e);if("string"!==n)return Promise.reject(new Error(`DecodeVinExtended, "vin" argument is required and must be of type string, got: <${n}> ${e}`));const s=i(null==r?void 0:r.modelYear);if((null==r?void 0:r.modelYear)&&"number"!==s)return Promise.reject(new Error(`DecodeVinExtended, "params.modelYear" argument is required and must be of type string or number, got: <${s}> ${r.modelYear}`));const a=yield this.buildQueryString(r).catch(e=>Promise.reject(new Error(`${t}, Error building query string: ${e}`))),c=`${this.baseUrl}/${t}/${e}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${t}, Fetch.get() error: ${e}`)))}))}}class g extends d{constructor(e){super(e)}DecodeVinValues(e,r){return s(this,void 0,void 0,(function*(){const t="DecodeVinValues",o=i(r);if(r&&"object"!==o)return Promise.reject(new Error(`DecodeVinValues, "params" argument must be of type object, got: <${o}> ${r}`));const n=i(e);if("string"!==n)return Promise.reject(new Error(`DecodeVinValues, "vin" argument is required and must be of type string, got: <${n}> ${e}`));const s=i(null==r?void 0:r.modelYear);if((null==r?void 0:r.modelYear)&&"string"!==s&&"number"!==s)return Promise.reject(new Error(`DecodeVinValues, "params.modelYear" argument is required and must be of type string or number, got: <${s}> ${r.modelYear}`));const a=yield this.buildQueryString(r).catch(e=>Promise.reject(new Error(`${t}, Error building query string: ${e}`))),c=`${this.baseUrl}/${t}/${e}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${t}, Fetch.get() error: ${e}`)))}))}}class h extends d{constructor(e){super(e)}DecodeVINValuesBatch(e){return s(this,void 0,void 0,(function*(){const r="DecodeVINValuesBatch",t=i(e);if("string"!==t)return Promise.reject(new Error(`DecodeVINValuesBatch, "inputString" argument is required and must be of type string, got: <${t}> ${e}`));const o=`${this.baseUrl}/${r}/`,n=encodeURI(`DATA=${e}&format=json`);return yield this.get(o,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class $ extends d{constructor(e){super(e)}DecodeVinValuesExtended(e,r){return s(this,void 0,void 0,(function*(){const t="DecodeVinValuesExtended",o=i(r);if(r&&"object"!==o)return Promise.reject(new Error(`DecodeVinValuesExtended, "params" argument must be of type object, got: <${o}> ${r}`));const n=i(e);if("string"!==n)return Promise.reject(new Error(`DecodeVinValuesExtended, "vin" argument is required and must be of type string, got: <${n}> ${e}`));const s=i(null==r?void 0:r.modelYear);if((null==r?void 0:r.modelYear)&&"number"!==s)return Promise.reject(new Error(`DecodeVinValuesExtended, "params.modelYear" argument is required and must be of type string or number, got: <${s}> ${r.modelYear}`));const a=yield this.buildQueryString(r).catch(e=>Promise.reject(new Error(`${t}, Error building query string: ${e}`))),c=`${this.baseUrl}/${t}/${e}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${t}, Fetch.get() error: ${e}`)))}))}}class p extends d{constructor(e){super(e)}DecodeWMI(e){return s(this,void 0,void 0,(function*(){const r="DecodeWMI",t=i(e);if("string"!==t)return Promise.reject(new Error(`DecodeWMI, "WMI" argument is required and must be of type string, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class y extends d{constructor(e){super(e)}GetAllMakes(){return s(this,void 0,void 0,(function*(){const e=yield this.buildQueryString().catch(e=>Promise.reject(new Error("GetAllMakes, Error building query string: "+e))),r=`${this.baseUrl}/GetAllMakes${e}`;return yield this.get(r).then(e=>e).catch(e=>Promise.reject(new Error("GetAllMakes, Fetch.get() error: "+e)))}))}}class b extends d{constructor(e){super(e)}GetAllManufacturers(e={}){return s(this,void 0,void 0,(function*(){const r="GetAllManufacturers",t=i(e);if("object"!==t)return Promise.reject(new Error(`GetAllManufacturers, "params" argument must be of type object, got: <${t}> ${e}`));const o=i(e.manufacturerType);if(e.manufacturerType&&"string"!==o)return Promise.reject(new Error(`GetAllManufacturers, "params.manufacturerType" argument must be of type string, got: <${o}> ${e.manufacturerType}`));const n=i(e.page);if(e.page&&"number"!==n)return Promise.reject(new Error(`GetAllManufacturers, "params.page" argument must be of type number, got: <${n}> ${e.page}`));const s=yield this.buildQueryString(e).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),a=`${this.baseUrl}/${r}${s}`;return yield this.get(a).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class f extends d{constructor(e){super(e)}GetCanadianVehicleSpecifications(e){return s(this,void 0,void 0,(function*(){const r="GetCanadianVehicleSpecifications",t=i(e);if("object"!==t)return Promise.reject(new Error(`GetCanadianVehicleSpecifications, "params" argument must be of type object, got: <${t}> ${e}`));const o=i(e.year);if("number"!==o)return Promise.reject(new Error(`GetCanadianVehicleSpecifications, "params.year" argument is required and must be of type number, got: <${o}> ${e.year}`));const n=i(e.make);if(e.make&&"string"!==n)return Promise.reject(new Error(`GetCanadianVehicleSpecifications, "params.make" argument must be of type string, got: <${n}> ${e.make}`));const s=i(e.model);if(e.model&&"string"!==s)return Promise.reject(new Error(`GetCanadianVehicleSpecifications, "params.model" argument must be of type string, got: <${s}> ${e.model}`));const a=i(e.units);if(e.units&&"string"!==a)return Promise.reject(new Error(`GetCanadianVehicleSpecifications, "params.units" argument must be of type string, got: <${a}> ${e.units}`));const c=e.make||"",u=e.model||"",d=e.units||"",l={year:e.year,make:c,model:u,units:d},m=yield this.buildQueryString(l,!0).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),g=`${this.baseUrl}/${r}${m}`;return yield this.get(g).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class E extends d{constructor(e){super(e)}GetEquipmentPlantCodes(e){return s(this,void 0,void 0,(function*(){const r="GetEquipmentPlantCodes",t=i(e);if("object"!==t)return Promise.reject(new Error(`GetEquipmentPlantCodes, "params" argument must be of type object, got: <${t}> ${e}`));const o=i(e.year);if("number"!==o)return Promise.reject(new Error(`GetEquipmentPlantCodes, "params.year" argument is required and must be of type number, got: <${o}> ${e.year}`));const n=i(e.equipmentType);if("number"!==n)return Promise.reject(new Error(`GetEquipmentPlantCodes, "params.equipmentType" argument is required and must be of type number, got: <${n}> ${e.equipmentType}`));const s=i(e.reportType);if("string"!==s)return Promise.reject(new Error(`GetEquipmentPlantCodes, "params.reportType" argument is required and must be of type string, got: <${s}> ${e.reportType}`));const a=yield this.buildQueryString(e).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),c=`${this.baseUrl}/${r}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class j extends d{constructor(e){super(e)}GetMakeForManufacturer(e){return s(this,void 0,void 0,(function*(){const r="GetMakeForManufacturer",t=i(e);if("string"!==t&&"number"!==t)return Promise.reject(new Error(`GetMakeForManufacturer, "manufacturer" argument is required and must be of type string or number, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class M extends d{constructor(e){super(e)}GetMakesForManufacturerAndYear(e,r){return s(this,void 0,void 0,(function*(){const t="GetMakesForManufacturerAndYear",o=i(e);if("string"!==o&&"number"!==o)return Promise.reject(new Error(`GetMakesForManufacturerAndYear, "manufacturer" argument is required and must be of type string or number, got: <${o}> ${e}`));const n=i(r);if("object"!==n)return Promise.reject(new Error(`GetMakesForManufacturerAndYear, "params" argument is required and must be of type object, got: <${n}> ${r}`));const s=i(r.year);if("number"!==s)return Promise.reject(new Error(`GetMakesForManufacturerAndYear, "params.year" argument is required and must be of type number, got: <${s}> ${r.year}`));const a=yield this.buildQueryString(r).catch(e=>Promise.reject(new Error(`${t}, Error building query string: ${e}`))),c=`${this.baseUrl}/${t}/${e}${a}`;return yield this.get(c).then(e=>e).catch(e=>Promise.reject(new Error(`${t}, Fetch.get() error: ${e}`)))}))}}class G extends d{constructor(e){super(e)}GetMakesForVehicleType(e){return s(this,void 0,void 0,(function*(){const r="GetMakesForVehicleType",t=i(e);if("string"!==t)return Promise.reject(new Error(`GetMakesForVehicleType, "typeName" argument is required and must be of type string, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class P extends d{constructor(e){super(e)}GetManufacturerDetails(e){return s(this,void 0,void 0,(function*(){const r="GetManufacturerDetails",t=i(e);if("string"!==t&&"number"!==t)return Promise.reject(new Error(`GetManufacturerDetails, "manufacturer" argument is required and must be of type string or number, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class V extends d{constructor(e){super(e)}GetModelsForMake(e){return s(this,void 0,void 0,(function*(){const r="GetModelsForMake",t=i(e);if("string"!==t)return Promise.reject(new Error(`GetModelsForMake, "makeName" argument is required and must be of type string, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class w extends d{constructor(e){super(e)}GetModelsForMakeId(e){return s(this,void 0,void 0,(function*(){const r="GetModelsForMakeId",t=i(e);if("number"!==t)return Promise.reject(new Error(`GetModelsForMakeId, "makeId" argument is required and must be of type number, got: <${t}> ${e}`));const o=yield this.buildQueryString({}).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class F extends d{constructor(e){super(e)}GetModelsForMakeIdYear(e){return s(this,void 0,void 0,(function*(){const r="GetModelsForMakeIdYear",t=null==e?void 0:e.makeId,o=null==e?void 0:e.modelYear,n=null==e?void 0:e.vehicleType,s=i(e);if("object"!==s)return Promise.reject(new Error(`GetModelsForMakeIdYear, "params" argument must be of type object, got: <${s}> ${e}`));const a=i(t);if("number"!==a)return Promise.reject(new Error(`GetModelsForMakeIdYear, "params.makeId" argument is required and must be of type number, got: <${a}> ${t}`));if(!o&&!n)return Promise.reject(new Error(`GetModelsForMakeIdYear, either one of "params.modelYear" or "params.vehicleType" is required, got: ${o} | ${n}`));const c=i(o);if(o&&"number"!==c)return Promise.reject(new Error(`GetModelsForMakeIdYear, "params.modelYear" must be of type number, got: <${c}> ${o}`));const u=i(n);if(n&&"string"!==u)return Promise.reject(new Error(`GetModelsForMakeIdYear, "params.vehicleType" must be of type string, got: <${u}> ${n}`));let d=`${r}/makeId/${t}/`;d+=o&&n?`modelYear/${o}/vehicleType/${n}`:o?"modelYear/"+o:"vehicleType/"+n;const l=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),m=`${this.baseUrl}/${d}${l}`;return yield this.get(m).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class v extends d{constructor(e){super(e)}GetModelsForMakeYear(e){return s(this,void 0,void 0,(function*(){const r="GetModelsForMakeYear",t=null==e?void 0:e.make,o=null==e?void 0:e.modelYear,n=null==e?void 0:e.vehicleType,s=i(e);if("object"!==s)return Promise.reject(new Error(`GetModelsForMakeYear, "params" argument must be of type object, got: <${s}> ${e}`));const a=i(t);if("string"!==a)return Promise.reject(new Error(`GetModelsForMakeYear, "params.make" argument is required and must be of type string, got: <${a}> ${t}`));if(!o&&!n)return Promise.reject(new Error(`GetModelsForMakeYear, either one of "params.modelYear" or "params.vehicleType" is required, got: ${o} | ${n}`));const c=i(o);if(o&&"number"!==c)return Promise.reject(new Error(`GetModelsForMakeYear, "params.modelYear" must be of type number, got: <${c}> ${o}`));const u=i(n);if(n&&"string"!==u)return Promise.reject(new Error(`GetModelsForMakeYear, "params.vehicleType" must be of type string, got: <${u}> ${n}`));let d=`${r}/make/${e.make}/`;d+=o&&n?`modelYear/${o}/vehicleType/${n}`:o?"modelYear/"+o:"vehicleType/"+n;const l=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),m=`${this.baseUrl}/${d}${l}`;return yield this.get(m).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class k extends d{constructor(e){super(e)}GetParts(e){return s(this,void 0,void 0,(function*(){const r="GetParts",t=null==e?void 0:e.type,o=null==e?void 0:e.fromDate,n=null==e?void 0:e.toDate,s=null==e?void 0:e.page,a=i(e);if(e&&"object"!==a)return Promise.reject(new Error(`${r}, "params" argument must be of type object, got: <${a}> ${e}`));const c=i(t);if(t&&"number"!==c)return Promise.reject(new Error(`${r}, "params.type" argument must be of type number, got: <${c}> ${t}`));const u=i(o);if(o&&"string"!==u)return Promise.reject(new Error(`${r}, "params.fromDate" argument must be of type string, got: <${u}> ${o}`));const d=i(n);if(n&&"string"!==d)return Promise.reject(new Error(`${r}, "params.toDate" argument must be of type string, got: <${d}> ${n}`));const l=i(s);if(s&&"number"!==l)return Promise.reject(new Error(`${r}, "params.page" argument must be of type number, got: <${l}> ${s}`));const m=yield this.buildQueryString(e).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),g=`${this.baseUrl}/${r}${m}`;return yield this.get(g).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class q extends d{constructor(e){super(e)}GetVehicleTypesForMake(e){return s(this,void 0,void 0,(function*(){const r="GetVehicleTypesForMake",t=i(e);if("string"!==t)return Promise.reject(new Error(`GetVehicleTypesForMake, "makeName" argument is required and must be of type string, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class D extends d{constructor(e){super(e)}GetVehicleTypesForMakeId(e){return s(this,void 0,void 0,(function*(){const r="GetVehicleTypesForMakeId",t=i(e);if("number"!==t)return Promise.reject(new Error(`GetVehicleTypesForMakeId, "makeId" argument is required and must be of type number, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class Y extends d{constructor(e){super(e)}GetVehicleVariableList(){return s(this,void 0,void 0,(function*(){const e="GetVehicleVariableList",r=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),t=`${this.baseUrl}/${e}${r}`;return yield this.get(t).then(e=>e).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}class I extends d{constructor(e){super(e)}GetVehicleVariableValuesList(e){return s(this,void 0,void 0,(function*(){const r="GetVehicleVariableValuesList",t=i(e);if("string"!==t&&"number"!==t)return Promise.reject(new Error(`GetVehicleVariableValuesList, "variableValue" argument is required and must be of type string or number, got: <${t}> ${e}`));"string"===t&&(e=encodeURI(e));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class x extends d{constructor(e){super(e)}GetWMIsForManufacturer(e){return s(this,void 0,void 0,(function*(){const r="GetWMIsForManufacturer",t=i(e);if("string"!==t)return Promise.reject(new Error(`GetWMIsForManufacturer, "manufacturer" argument is required and must be of type string, got: <${t}> ${e}`));const o=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),n=`${this.baseUrl}/${r}/${e}${o}`;return yield this.get(n).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}class T extends d{constructor(e){super(e),this.DecodeVin=l.prototype.DecodeVin,this.DecodeVinExtended=m.prototype.DecodeVinExtended,this.DecodeVinValues=g.prototype.DecodeVinValues,this.DecodeVINValuesBatch=h.prototype.DecodeVINValuesBatch,this.DecodeVinValuesExtended=$.prototype.DecodeVinValuesExtended,this.DecodeWMI=p.prototype.DecodeWMI,this.GetAllMakes=y.prototype.GetAllMakes,this.GetAllManufacturers=b.prototype.GetAllManufacturers,this.GetCanadianVehicleSpecifications=f.prototype.GetCanadianVehicleSpecifications,this.GetEquipmentPlantCodes=E.prototype.GetEquipmentPlantCodes,this.GetMakeForManufacturer=j.prototype.GetMakeForManufacturer,this.GetMakesForManufacturerAndYear=M.prototype.GetMakesForManufacturerAndYear,this.GetMakesForVehicleType=G.prototype.GetMakesForVehicleType,this.GetManufacturerDetails=P.prototype.GetManufacturerDetails,this.GetModelsForMake=V.prototype.GetModelsForMake,this.GetModelsForMakeId=w.prototype.GetModelsForMakeId,this.GetModelsForMakeIdYear=F.prototype.GetModelsForMakeIdYear,this.GetModelsForMakeYear=v.prototype.GetModelsForMakeYear,this.GetParts=k.prototype.GetParts,this.GetVehicleTypesForMake=q.prototype.GetVehicleTypesForMake,this.GetVehicleTypesForMakeId=D.prototype.GetVehicleTypesForMakeId,this.GetVehicleVariableList=Y.prototype.GetVehicleVariableList,this.GetVehicleVariableValuesList=I.prototype.GetVehicleVariableValuesList,this.GetWMIsForManufacturer=x.prototype.GetWMIsForManufacturer}}const S=new T;return e.ActionTypes=n,e.Client=S,e.DecodeVINValuesBatch=h,e.DecodeVin=l,e.DecodeVinExtended=m,e.DecodeVinValues=g,e.DecodeVinValuesExtended=$,e.DecodeWMI=p,e.Fetch=d,e.GetAllMakes=y,e.GetAllManufacturers=b,e.GetCanadianVehicleSpecifications=f,e.GetEquipmentPlantCodes=E,e.GetMakeForManufacturer=j,e.GetMakesForManufacturerAndYear=M,e.GetMakesForVehicleType=G,e.GetManufacturerDetails=P,e.GetModelsForMake=V,e.GetModelsForMakeId=w,e.GetModelsForMakeIdYear=F,e.GetModelsForMakeYear=v,e.GetParts=k,e.GetVehicleTypesForMake=q,e.GetVehicleTypesForMakeId=D,e.GetVehicleVariableList=Y,e.GetVehicleVariableValuesList=I,e.GetWMIsForManufacturer=x,e.NHTSA=T,e.isValidVin=function(e){if("string"!=typeof e||17!=e.length)return!1;const r=(e=e.toUpperCase()).split(""),t=r[8];if(isNaN(parseInt(t))&&"X"!==t)return!1;const o="X"===t?10:parseInt(t);return r.map((e,r)=>{let t;t=isNaN(parseInt(e))?a[e]:parseInt(e);return t*c[r]}).reduce((e,r)=>e+r,0)%11===o},e}({},fetch);
//# sourceMappingURL=iife.js.map
