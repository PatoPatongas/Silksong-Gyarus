const ratesToUSD = {
  // - - - AMERICA - - - //
  ARS: 1424.5,  BBD: 2.0,     BOB: 6.87,
  BRL: 5.15,    BSD: 1.0,     BZD: 2.0,
  CAD: 1.34,    CLP: 860.0,   COP: 5000.0,
  CRC: 550.0,   CUP: 24.0,    DOP: 55.0,
  GTQ: 7.8,     GYD: 208.0,   HTG: 145.0,
  HNL: 24.6,    JMD: 153.0,   MXN: 18.0,
  NIO: 36.7,    PAB: 1.0,     PEN: 3.9,
  PYG: 7000.0,  SVC: 8.75,    SRD: 22.0,
  TTD: 6.75,    USD: 1.0,     UYU: 45.0,
  VES: 25.0,    XCD: 2.75,

  // - - - ASIA - - - //
  AED: 3.67,    AFN: 87.0,    AMD: 385.0,
  AZN: 1.7,     BDT: 108.0,   BHD: 0.38,
  BND: 1.36,    BTN: 82.0,    CNY: 7.3,
  IDR: 15000.0, INR: 82.0,    ILS: 3.65,
  IQD: 1460.0,  IRR: 42500.0, JOD: 0.71,
  JPY: 146.0,   KGS: 88.0,    KHR: 4100.0,
  KPW: 900.0,   KRW: 1350.0,  KWD: 0.31,
  LAK: 20500.0, LBP: 36000.0, MYR: 4.6,
  MNT: 3500.0,  MVR: 15.0,    NPR: 135.0,
  OMR: 0.39,    PKR: 305.0,   PHP: 55.0,
  QAR: 3.64,    SAR: 3.75,    SGD: 1.36,
  SYP: 2500.0,  TJS: 11.0,    THB: 34.0,
  TMT: 3.5,     TRY: 27.0,    UZS: 11600.0,
  VND: 24000.0, YER: 250.0,

  // - - - EUROPA - - - //
  ALL: 110.0,   BGR: 1.82,    BIH: 1.84,
  BLR: 2.5,     CHF: 0.92,    CZK: 22.0,
  DNK: 7.0,     EUR: 0.92,    GBP: 0.81,
  GEL: 2.6,     HRK: 6.9,     ISK: 140.0,
  ISL: 140.0,   NOK: 10.5,    PLN: 4.25,
  RON: 4.6,     RUB: 97.0,    RSD: 110.0,
  SEK: 10.5,    UAH: 37.0,
};

const countryToCurrency = {
  // - - - AMÉRICA - - - //
  antybarb: "XCD",  ar: "ARS",  bah: "BSD",
  bel: "BZD",       bol: "BOB",  bra: "BRL",
  can: "CAD",       chi: "CLP",  col: "COP",
  cos: "CRC",       cub: "CUP",  dom: "XCD",
  ecu: "USD",       elsa: "SVC", eu: "USD",
  gra: "XCD",       gua: "GTQ",  gu: "GYD",
  ha: "HTG",        hon: "HNL",  jam: "JMD",
  mex: "MXN",       nica: "NIO", pan: "PAB",
  par: "PYG",       pe: "PEN",   redom: "DOP",
  sancyn: "XCD",    sanvyg: "XCD", sanlu: "XCD",
  suri: "SRD",      trito: "TTD", uru: "UYU",
  ske: "VES",

  // - - - ASIA - - - //
  afg: "AFN",       arm: "AMD",   aze: "AZN",
  ban: "BDT",       bar: "BHD",   bru: "BND",
  but: "BTN",       cam: "KHR",   cata: "QAR",
  chn: "CNY",       cn: "KPW",    cs: "KRW",
  emaru: "AED",     fil: "PHP",   ind: "INR",
  indo: "IDR",      irk: "IQD",   irn: "IRR",
  is: "ILS",        jp: "JPY",    jod: "JOD",
  kazj: "KZT",      kir: "KGS",   kuw: "KWD",
  lao: "LAK",       lib: "LBP",   mal: "MYR",
  mad: "MVR",       mon: "MNT",   nep: "NPR",
  om: "OMR",        pak: "PKR",   sing: "SGD",
  sir: "SYP",       slan: "LKR",  tay: "TJS",
  tai: "THB",       tior: "USD",  trkm: "TMT",
  trq: "TRY",       uzb: "UZS",   viet: "VND",
  ye: "YER",        arsau: "SAR",

  // - - - EUROPA - - - //
  alb: "ALL",       and: "EUR",   aus: "EUR",
  azer: "AZN",      birr: "BLR",  blg: "EUR",
  bosher: "BIH",    bulg: "BGR",  chp: "CYP",
  croc: "HRK",      dinm: "DNK",  esl: "SVN",
  esq: "SVK",       est: "EUR",   fin: "EUR",
  fr: "EUR",        gc: "EUR",    gr: "GEO",
  hit: "EUR",       hug: "HUN",   irl: "EUR",
  isl: "ISK",       it: "EUR",    kos: "EUR",
  let: "EUR",       liech: "EUR",  lit: "EUR",
  lux: "EUR",       mld: "MDA",    mlt: "EUR",
  mon: "EUR",       mnt: "EUR",    nor: "NOK",
  pol: "PLN",       prt: "EUR",    rch: "CZK",
  rum: "RON",       ru: "RUB",     smar: "EUR",
  srb: "RSD",       sue: "SEK",    siz: "CHF",
  uc: "UAH",        uk: "GBP",     vat: "EUR"
};


// Los parametros provienen del formulario cuando se presiona el boton
function convertir(origenPais, destinoPais, cantidad) {
  const origen = countryToCurrency[origenPais];   // Obtener la moneda del país de origen por medio del país-1 enviado
  const destino = countryToCurrency[destinoPais]; // Obtener la moneda del país de destino por medio del país-2 enviado

  // Si el origen, destindo o las tasas no existen, retorna null
  if (!origen || !destino || !ratesToUSD[origen] || !ratesToUSD[destino]) {
    return null; // Moneda no soportada
  }

  // Convertir la cantidad a USD primero (1 moneda origen = 1 USD)
  const usdValue = cantidad / ratesToUSD[origen];

  // Luego convertir de USD a la moneda destino (1 USD = X destino)
  return usdValue * ratesToUSD[destino];
}

// Evento del botón cuando se presiona
document.getElementById("btn-calc").addEventListener("click", () => {
  const origenPais = document.getElementById("select-izq").value;
  const destinoPais = document.getElementById("select-der").value;

  // Obtener la cantidad ingresada y convertirla a número
  const cantidad = parseFloat(
    document.querySelector("input[type='number']").value
  );

  if (isNaN(cantidad)) {
    document.getElementById("resultado").textContent =
      "Ingresa una cantidad válida.";
    return;
  }

  const resultado = convertir(origenPais, destinoPais, cantidad);

  // Establece el resultado o un mensaje de error si la moneda no es soportada (null)
  if (resultado === null) {
    document.getElementById("resultado").textContent = "Moneda no soportada.";
  } else {
    const destinoMoneda = countryToCurrency[destinoPais];
    // Establece el resultado con dos decimales y la moneda destino
    document.getElementById("resultado").textContent = `${resultado.toFixed(2)} ${destinoMoneda}`;
  }
});
