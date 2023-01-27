const w = ({
  endpoint: e,
  argName: t,
  required: n,
  types: i,
  value: c
}) => {
  const r = $(c), s = i.length;
  let g = !1;
  const u = i.map((h, a) => {
    let b = "", M = "";
    if (h)
      return g || (b = "<", g = !0), a < s - 1 && (M = "|"), a === s - 1 && (M = ">"), `${b}${h}${M}`;
  }), y = n ? "is required and" : "", q = `must be of type ${u.join("")}`;
  return `${e}, ${t} ${y} ${q}, got <${r}> ${c}`;
}, o = async (e) => Promise.reject(Error(e)), $ = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, Y = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  P: 7,
  R: 9,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9
}, m = [
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  10,
  0,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2
];
function p(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), n = t[8];
  if (isNaN(parseInt(n)) && n !== "X")
    return !1;
  const i = n === "X" ? 10 : parseInt(n);
  return t.map((r, s) => {
    let g;
    isNaN(parseInt(r)) ? g = Y[r] : g = parseInt(r);
    const u = m[s];
    return g * u;
  }).reduce((r, s) => r + s, 0) % 11 === i;
}
const f = "https://vpic.nhtsa.dot.gov/api/vehicles", T = "json";
function l(e, t = !1) {
  const n = { format: T };
  let i = {};
  !e || $(e) !== "object" ? i = { ...n } : i = { ...e, ...n };
  const c = Object.entries(i), r = c.length;
  if (r < 1)
    return Promise.resolve("");
  let s = !1;
  const g = c.map(([u, y], q) => {
    let h = "", a = "";
    const b = $(y);
    if (y && b === "number" && (y = y.toString()), (y || t) && (b === "string" || b === "number"))
      return s || (h = "?", s = !0), q < r - 1 && (a = "&"), `${h}${u}=${y}${a}`;
  });
  return Promise.resolve(encodeURI(g.join("")));
}
const d = () => ({
  get: async (t, n = {}) => await fetch(t, n).then(async (c) => {
    var g;
    const s = ((g = c.headers.get("content-type")) == null ? void 0 : g.includes("application/json")) ? await c.json() : null;
    if (!c.ok) {
      const u = s && s.Message || c.status;
      return Promise.reject(u);
    }
    return s;
  }).catch(
    (c) => Promise.reject(Error(`Error fetching data: ${c}`))
  )
}), V = async (e, t) => {
  const n = "DecodeVin", i = $(e);
  if (!e || i !== "string")
    return o(
      `${n}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return o(
      `${n}, "params.modelYear" must be of type string or number, got: <${r}> ${t.modelYear}`
    );
  const s = await l(t).catch(
    (u) => o(`${n}, error building query string: ${u}`)
  ), g = `${f}/${n}/${e}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${n}, error fetching data: ${u}`));
}, k = async (e, t) => {
  const n = "DecodeVinExtended", i = $(e);
  if (!e || i !== "string")
    return o(
      `${n}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return o(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await l(t).catch(
    (u) => o(`${n}, error building query string: ${u}`)
  ), g = `${f}/${n}/${e}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${n}, error fetching data: ${u}`));
}, S = async (e, t) => {
  const n = "DecodeVinValues", i = $(e);
  if (!e || i !== "string")
    return o(
      `${n}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return o(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await l(t).catch(
    (u) => o(`${n}, error building query string: ${u}`)
  ), g = `${f}/${n}/${e}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${n}, error fetching data: ${u}`));
}, G = async (e) => {
  const t = "DecodeVinValuesBatch", n = $(e);
  if (!e || n !== "string")
    return o(
      `${t}, "inputString" argument is required and must be of type string, got: <${n}> ${e}`
    );
  const i = `${f}/${t}/`, c = encodeURI(`DATA=${e}&format=${T}`);
  return await d().get(i, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: c
  }).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, j = async (e, t) => {
  const n = "DecodeVinValuesExtended", i = $(e);
  if (!e || i !== "string")
    return o(
      `${n}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return o(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await l(t).catch(
    (u) => o(`${n}, error building query string: ${u}`)
  ), g = `${f}/${n}/${e}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${n}, error fetching data: ${u}`));
}, P = async (e) => {
  const t = "DecodeWMI", n = $(e);
  if (n !== "string")
    return o(
      `${t}, "WMI" argument is required and must be of type string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, D = async () => {
  const e = "GetAllMakes", t = await l().catch(
    (i) => o(`${e}, error building query string: ${i}`)
  ), n = `${f}/${e}${t}`;
  return await d().get(n).then((i) => i).catch((i) => o(`${e}, error fetching data: ${i}`));
}, I = async (e) => {
  const t = "GetAllManufacturers", n = $(e);
  if (e && n !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${n}> ${e}`
    );
  const i = $(e == null ? void 0 : e.manufacturerType);
  if (e != null && e.manufacturerType && i !== "string")
    return o(
      `${t}, params.manufacturerType" argument must be of type string, got: <${i}> ${e.manufacturerType}`
    );
  const c = $(e == null ? void 0 : e.page);
  if (e != null && e.page && c !== "number | string")
    return o(
      `${t}, "params.page" argument must be of type number or string, got: <${c}> ${e.page}`
    );
  const r = await l(e).catch(
    (g) => o(`${t}, error building query string: ${g}`)
  ), s = `${f}/${t}${r}`;
  return await d().get(s).then((g) => g).catch((g) => o(`${t}, error fetching data: ${g}`));
}, F = async (e) => {
  const t = "GetCanadianVehicleSpecifications", n = $(e);
  if (!e || e && n !== "object")
    return o(
      `${t}, "params" argument is required and must be of type object, got: <${n}> ${e}`
    );
  const i = $(e == null ? void 0 : e.year);
  if (!(e != null && e.year) || i !== "number")
    return o(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${i}> ${e.year}`
    );
  const c = $(e.make);
  if (e != null && e.make && c !== "string")
    return o(
      `${t}, "params.make" argument must be of type string, got: <${c}> ${e.make}`
    );
  const r = $(e.model);
  if (e.model && r !== "string")
    return o(
      `${t}, "params.model" argument must be of type string, got: <${r}> ${e.model}`
    );
  const s = $(e.units);
  if (e.units && s !== "string")
    return o(
      `${t}, "params.units" argument must be of type string, got: <${s}> ${e.units}`
    );
  const g = e.make || "", u = e.model || "", y = e.units || "", q = {
    year: e.year,
    make: g,
    model: u,
    units: y
  }, h = await l(q, !0).catch(
    (M) => o(`${t}, error building query string: ${M}`)
  ), a = `${f}/${t}/${h}`;
  return await d().get(a).then((M) => M).catch((M) => o(`${t}, error fetching data: ${M}`));
}, A = async (e) => {
  const t = "GetEquipmentPlantCodes", n = $(e);
  if (!e || n !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${n}> ${e}`
    );
  const i = $(e.year);
  if (i !== "number")
    return o(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${i}> ${e.year}`
    );
  const c = $(e.equipmentType);
  if (c !== "number")
    return o(
      `${t}, "params.equipmentType" argument is required and must be of type number or string, got: <${c}> ${e.equipmentType}`
    );
  const r = $(e.reportType);
  if (r !== "string")
    return o(
      `${t}, "params.reportType" argument is required and must be of type string, got: <${r}> ${e.reportType}`
    );
  const s = await l(e).catch(
    (u) => o(`${t}, error building query string: ${u}`)
  ), g = `${f}/${t}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${t}, error fetching data: ${u}`));
}, E = async (e) => {
  const t = "GetMakeForManufacturer", n = $(e);
  if (!e || n !== "number")
    return o(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, R = async (e, t) => {
  const n = "GetMakesForManufacturerAndYear", i = $(e);
  if (!e || i !== "number")
    return o(
      `${n}, "manufacturer" argument is required and must be of type number or string, got <${i}> ${e}`
    );
  const c = $(t);
  if (!t || t && c !== "object")
    return o(
      `${n}, "params" argument is required and must be of type object, got: <${c}> ${t}`
    );
  const r = $(t.year);
  if (!t.year || r !== "number")
    return o(
      `${n}, "params.year" is required and must be of type number or string, got: <${r}> ${t.year}`
    );
  const s = await l(t).catch(
    (u) => o(`${n}, error building query string: ${u}`)
  ), g = `${f}/${n}/${e}${s}`;
  return await d().get(g).then((u) => u).catch((u) => o(`${n}, error fetching data: ${u}`));
}, L = async (e) => {
  const t = "GetMakesForVehicleType", n = $(e);
  if (n !== "string")
    return o(
      `${t}, "typeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, N = async (e) => {
  const t = "GetManufacturerDetails", n = $(e);
  if (!e || n !== "number")
    return o(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, v = async (e) => {
  const t = "GetModelsForMake", n = $(e);
  if (n !== "string")
    return o(
      `${t}, "makeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, U = async (e) => {
  const t = "GetModelsForMakeId", n = $(e);
  if (!e || n !== "number")
    return o(
      `${t}, "makeId" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, _ = async (e) => {
  const t = "GetModelsForMakeIdYear", n = e == null ? void 0 : e.makeId, i = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType, r = $(e);
  if (!e || e && r !== "object")
    return o(
      `${t}, "params" argument is required and must be of type object, got: <${r}> ${e}`
    );
  const s = $(n);
  if (!n || s !== "number")
    return o(
      `${t}, "params.makeId" is required and must be of type number or string, got: <${s}> ${n}`
    );
  if (!i && !c)
    return o(
      `${t}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${i}, vehicleType: ${c} }`
    );
  const g = $(i);
  if (e != null && e.modelYear && g !== "number")
    return o(
      `${t}, "params.modelYear" must be of type number or string, got: <${g}> ${i}`
    );
  const u = $(c);
  if (c && u !== "string")
    return o(
      `${t}, "params.vehicleType" must be of type string, got: <${u}> ${c}`
    );
  let y = `${t}/makeId/${n}/`;
  i && c ? y += `modelYear/${i}/vehicleType/${c}` : i ? y += `modelYear/${i}` : y += `vehicleType/${c}`;
  const q = await l().catch(
    (a) => o(`${t}, error building query string: ${a}`)
  ), h = `${f}/${y}${q}`;
  return await d().get(h).then((a) => a).catch((a) => o(`${t}, error fetching data: ${a}`));
}, C = async (e) => {
  const t = "GetModelsForMakeYear", n = e == null ? void 0 : e.make, i = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType, r = $(e);
  if (!e || e && r !== "object")
    return o(
      w({
        endpoint: t,
        argName: "params",
        required: !0,
        types: ["object", "string", "number"],
        value: e
      })
    );
  const s = $(n);
  if (!n || s !== "string")
    return o(
      `${t}, "params.make" is required and must be of type string, got: <${s}> ${n}`
    );
  if (!i && !c)
    return o(
      `${t}, must provide either "params.modelYear" or "params.vehicleType" or both, got: { modelYear: ${i}, vehicleType: ${c} }`
    );
  const g = $(i);
  if (e != null && e.modelYear && g !== "number")
    return o(
      `${t}, "params.modelYear" must be of type number or string, got: <${g}> ${i}`
    );
  const u = $(c);
  if (c && u !== "string")
    return o(
      `${t}, "params.vehicleType" must be of type string, got: <${u}> ${c}`
    );
  let y = `${t}/make/${n}/`;
  i && c ? y += `modelYear/${i}/vehicleType/${c}` : i ? y += `modelYear/${i}` : y += `vehicleType/${c}`;
  const q = await l().catch(
    (a) => o(`${t}, error building query string: ${a}`)
  ), h = `${f}/${y}${q}`;
  return await d().get(h).then((a) => a).catch((a) => o(`${t}, error fetching data: ${a}`));
}, W = async (e) => {
  const t = "GetParts", n = e == null ? void 0 : e.type, i = e == null ? void 0 : e.fromDate, c = e == null ? void 0 : e.toDate, r = e == null ? void 0 : e.page, s = $(e);
  if (e && s !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${s}> ${e}`
    );
  const g = $(n);
  if (n && g !== "number")
    return o(
      `${t}, "params.type" argument must be of type number or string, got: <${g}> ${n}`
    );
  const u = $(i);
  if (i && u !== "string")
    return o(
      `${t}, "params.fromDate" argument must be of type string, got: <${u}> ${i}`
    );
  const y = $(c);
  if (c && y !== "string")
    return o(
      `${t}, "params.toDate" argument must be of type string, got: <${y}> ${c}`
    );
  const q = $(r);
  if (r && q !== "number")
    return o(
      `${t}, "params.page" argument must be of type number or string, got: <${q}> ${r}`
    );
  const h = await l(e).catch(
    (b) => o(`${t}, error building query string: ${b}`)
  ), a = `${f}/${t}${h}`;
  return await d().get(a).then((b) => b).catch((b) => o(`${t}, error fetching data: ${b}`));
}, O = async (e) => {
  const t = "GetVehicleTypesForMake", n = $(e);
  if (!e || n !== "string")
    return o(
      `${t}, "makeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, x = async (e) => {
  const t = "GetVehicleTypesForMakeId", n = $(e);
  if (!e || n !== "number")
    return o(
      `${t}, "makeId" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, B = async () => {
  const e = "GetVehicleVariableList", t = await l().catch(
    (i) => o(`${e}, error building query string: ${i}`)
  ), n = `${f}/${e}${t}`;
  return await d().get(n).then((i) => i).catch((i) => o(`${e}, error fetching data: ${i}`));
}, H = async (e) => {
  const t = "GetVehicleVariableValuesList", n = $(e);
  if (!e || !["number", "string"].includes(n))
    return o(
      `${t}, "variableValue" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  e = encodeURI(String(e));
  const i = await l().catch(
    (r) => o(`${t}, error building query string: ${r}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((r) => r).catch((r) => o(`${t}, error fetching data: ${r}`));
}, J = async (e, t) => {
  const n = "GetWMIsForManufacturer", i = t == null ? void 0 : t.vehicleType;
  if (!e && !i)
    return o(
      `${n}, "manufacturer" and "params.vehicleType" arguments are optional but at least 1 is required, got: manufacturer: ${e} and vehicleType: ${i}`
    );
  const c = $(e);
  if (e && !["number", "string"].includes(c))
    return o(
      `${n}, "manufacturer" must be of type number or string, got <${c}> ${e}`
    );
  const r = $(t);
  if (t && r !== "object")
    return o(
      `${n}, "params" must be of type object, got: <${r}> ${t}`
    );
  const s = $(t == null ? void 0 : t.vehicleType);
  if (t != null && t.vehicleType && !["number", "string"].includes(s))
    return o(
      `${n}, "params.vehicleType" must be of type number or string, got: <${s}> ${t.vehicleType}`
    );
  const g = await l(t).catch(
    (y) => o(`${n}, error building query string: ${y}`)
  ), u = `${f}/${n}/${e || ""}${g}`;
  return await d().get(u).then((y) => y).catch((y) => o(`${n}, error fetching data: ${y}`));
};
export {
  V as DecodeVin,
  k as DecodeVinExtended,
  S as DecodeVinValues,
  G as DecodeVinValuesBatch,
  j as DecodeVinValuesExtended,
  P as DecodeWMI,
  D as GetAllMakes,
  I as GetAllManufacturers,
  F as GetCanadianVehicleSpecifications,
  A as GetEquipmentPlantCodes,
  E as GetMakeForManufacturer,
  R as GetMakesForManufacturerAndYear,
  L as GetMakesForVehicleType,
  N as GetManufacturerDetails,
  v as GetModelsForMake,
  U as GetModelsForMakeId,
  _ as GetModelsForMakeIdYear,
  C as GetModelsForMakeYear,
  W as GetParts,
  O as GetVehicleTypesForMake,
  x as GetVehicleTypesForMakeId,
  B as GetVehicleVariableList,
  H as GetVehicleVariableValuesList,
  J as GetWMIsForManufacturer,
  p as isValidVin
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
