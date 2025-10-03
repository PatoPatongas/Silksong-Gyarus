const ratesToUSD = {
  // - - - AMERICA - - - //
  MXN: 18.0,
  ARS: 140.0,
  USD: 1.0,
  BSD: 1.0,
  BBD: 2.0,
  BZD: 2.0,
  BOB: 6.87,
  BRL: 5.15,
  CAD: 1.34,
  CLP: 860.0,
  COP: 5000.0,
  CRC: 550.0,
  CUP: 24.0,
  DOP: 55.0,
  GTQ: 7.8,
  GYD: 208.0,
  HTG: 145.0,
  HNL: 24.6,
  JMD: 153.0,
  NIO: 36.7,
  PAB: 1.0,
  PYG: 7000.0,
  PEN: 3.9,
  SRD: 22.0,
  TTD: 6.75,
  UYU: 45.0,
  VES: 25.0,
  XCD: 2.7,
  SVC: 8.75, 

  // - - - ASIA - - - //
  AFN: 87.0,
  SAR: 3.75,
  AMD: 385.0,
  AZN: 1.7,
  BDT: 108.0,
  BHD: 0.38,
  MMK: 2090.0,
  BND: 1.36,
  BTN: 82.0,
  KHR: 4100.0,
  QAR: 3.64,
  CNY: 7.3,
  KPW: 900.0,
  KRW: 1350.0,
  AED: 3.67,
  PHP: 55.0,
  INR: 82.0,
  IDR: 15000.0,
  IQD: 1460.0,
  IRR: 42500.0,
  ILS: 3.65,
  JPY: 146.0,
  JOD: 0.71,
  KZT: 470.0,
  KGS: 88.0,
  KWD: 0.31,
  LAK: 20500.0,
  LBP: 36000.0,
  MYR: 4.6,
  MVR: 15.0,
  MNT: 3500.0,
  NPR: 135.0,
  OMR: 0.39,
  PKR: 305.0,
  SGD: 1.36,
  SYP: 2500.0,
  LKR: 360.0,
  TJS: 11.0,
  THB: 34.0,
  TMT: 3.5,
  TRY: 27.0,
  UZS: 11600.0,
  VND: 24000.0,
  YER: 250.0,

  // - - - EUROPA - - - //
  ALL: 110.0,
  EUR: 0.92,
  BLR: 2.5,
  BIH: 1.84,
  BGR: 1.82,
  HRK: 6.9,
  CZK: 22.0,
  DNK: 7.0,
  HUF: 353.0,
  ISK: 140.0,
  NOK: 10.5,
  PLN: 4.25,
  RON: 4.6,
  RUB: 97.0,
  RSD: 110.0,
  SEK: 10.5,
  CHF: 0.92,
  UAH: 37.0,
  GBP: 0.81,
  GEL: 2.6,
  ISL: 140.0,
};

const countryToCurrency = {
  // - - - AMERICA - - - //
  antybarb: "XCD", 
  ar: "ARS", 
  bah: "BSD", 
  brb: "BBD", 
  bel: "BZD", 
  bol: "BOB", 
  bra: "BRL", 
  can: "CAD", 
  chi: "CLP", 
  col: "COP", 
  cos: "CRC", 
  cub: "CUP", 
  dom: "XCD", 
  ecu: "USD", 
  elsa: "SVC", 
  eu: "USD", 
  gra: "XCD",
  gua: "GTQ",
  gu: "GYD", 
  ha: "HTG", 
  hon: "HNL", 
  jam: "JMD", 
  mex: "MXN", 
  nica: "NIO", 
  pan: "PAB", 
  par: "PYG", 
  pe: "PEN", 
  redom: "DOP", 
  sancyn: "XCD", 
  sanvyg: "XCD", 
  sanlu: "XCD", 
  suri: "SRD", 
  trito: "TTD", 
  uru: "UYU", 
  ske: "VES", 

  // - - - ASIA - - - //
  afg: "AFN", 
  arsau: "SAR", 
  arm: "AMD", 
  aze: "AZN", 
  ban: "BDT", 
  bar: "BHD", 
  brm: "MMK", 
  bru: "BND", 
  but: "BTN", 
  cam: "KHR", 
  cata: "QAR", 
  chn: "CNY", 
  cn: "KPW", 
  cs: "KRW", 
  emaru: "AED", 
  fil: "PHP", 
  ind: "INR", 
  indo: "IDR", 
  irk: "IQD", 
  irn: "IRR", 
  is: "ILS", 
  jp: "JPY", 
  jod: "JOD", 
  kazj: "KZT", 
  kir: "KGS", 
  kuw: "KWD", 
  lao: "LAK", 
  lib: "LBP", 
  mal: "MYR", 
  mad: "MVR", 
  mon: "MNT", 
  nep: "NPR", 
  om: "OMR", 
  pak: "PKR", 
  sing: "SGD", 
  sir: "SYP", 
  slan: "LKR", 
  tay: "TJS", 
  tai: "THB", 
  tior: "USD", 
  trkm: "TMT", 
  trq: "TRY", 
  uzb: "UZS", 
  viet: "VND", 
  ye: "YER",

  // - - - EUROPA - - - //
  alb: "ALL", 
  hit: "EUR", 
  and: "EUR", 
  aus: "EUR", 
  azer: "AZN", 
  blg: "EUR", 
  birr: "BLR", 
  bosher: "BIH", 
  bulg: "BGR", 
  chp: "CYP", 
  croc: "HRK", 
  dinm: "DNK", 
  esq: "SVK", 
  esl: "SVN", 
  sp: "EUR", 
  est: "EUR", 
  fin: "EUR", 
  fr: "EUR", 
  gr: "GEO", 
  gc: "EUR", 
  hug: "HUN", 
  irl: "EUR", 
  isl: "ISK", 
  it: "EUR", 
  kos: "EUR", 
  let: "EUR", 
  liech: "EUR", 
  lit: "EUR", 
  lux: "EUR", 
  mlt: "EUR", 
  mld: "MDA", 
  mon: "EUR", 
  mnt: "EUR", 
  nor: "NOK", 
  psb: "EUR", 
  pol: "PLN", 
  prt: "EUR", 
  uk: "GBP", 
  rch: "CZK", 
  rum: "RON", 
  ru: "RUB", 
  smar: "EUR", 
  srb: "RSD", 
  sue: "SEK", 
  siz: "CHF", 
  uc: "UAH", 
  vat: "EUR", 
};

function convertir(origenPais, destinoPais, cantidad) {
  const origen = countryToCurrency[origenPais];
  const destino = countryToCurrency[destinoPais];

  if (!origen || !destino || !ratesToUSD[origen] || !ratesToUSD[destino]) {
    return null; // moneda no soportada
  }

  const usdValue = cantidad / ratesToUSD[origen];
  return usdValue * ratesToUSD[destino];
}

// Evento del botón
document.getElementById("bt-calc").addEventListener("click", () => {
  const origenPais = document.getElementById("select-izq").value;
  const destinoPais = document.getElementById("select-der").value;
  const cantidad = parseFloat(
    document.querySelector("input[type='number']").value
  );

  if (isNaN(cantidad)) {
    document.getElementById("resultado").textContent =
      "Ingresa una cantidad válida.";
    return;
  }

  const resultado = convertir(origenPais, destinoPais, cantidad);

  if (resultado === null) {
    document.getElementById("resultado").textContent = "Moneda no soportada.";
  } else {
    const origenMoneda = countryToCurrency[origenPais];
    const destinoMoneda = countryToCurrency[destinoPais];
    document.getElementById(
      "resultado"
    ).textContent = `${resultado.toFixed(
      2
    )} ${destinoMoneda}`;
  }
});
