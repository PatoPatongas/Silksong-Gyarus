const ratesToUSD = {
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
  ALL: 110.0,
  EUR: 0.92,
  AND: 0.92,
  AUT: 0.92,
  BEL: 0.92,
  BLR: 2.5,
  BIH: 1.84,
  BGR: 1.82,
  CYP: 0.92,
  HRK: 6.9,
  DNK: 7.0,
  SVK: 0.92,
  SVN: 0.92,
  ESP: 0.92,
  EST: 0.92,
  FIN: 0.92,
  FRA: 0.92,
  GEO: 2.6,
  GRC: 0.92,
  HUN: 353.0,
  IRL: 0.92,
  ISL: 140.0,
  ITA: 0.92,
  KOS: 0.92,
  LVA: 0.92,
  LIE: 0.92,
  LTU: 0.92,
  LUX: 0.92,
  MLT: 0.92,
  MDA: 19.0,
  MCO: 0.92,
  MNE: 0.92,
  NOR: 10.5,
  NLD: 0.92,
  POL: 4.25,
  PRT: 0.92,
  GBR: 0.81,
  CZE: 22.0,
  ROU: 4.6,
  RUB: 97.0,
  SMR: 0.92,
  SRB: 110.0,
  SWE: 10.5,
  CHE: 0.92,
  UKR: 37.0,
  VAT: 0.92,
};

const countryToCurrency = {
  // América
  antybarb: "XCD", // Antigua y Barbuda
  ar: "ARS", // Argentina
  bah: "BSD", // Bahamas
  brb: "BBD", // Barbados
  bel: "BZD", // Belice
  bol: "BOB", // Bolivia
  bra: "BRL", // Brasil
  can: "CAD", // Canadá
  chi: "CLP", // Chile
  col: "COP", // Colombia
  cos: "CRC", // Costa Rica
  cub: "CUP", // Cuba
  dom: "XCD", // Dominica
  ecu: "USD", // Ecuador
  elsa: "SVC", // El Salvador
  eu: "USD", // Estados Unidos
  gra: "XCD", // Granada
  gua: "GTQ", // Guatemala
  gu: "GYD", // Guyana
  ha: "HTG", // Haití
  hon: "HNL", // Honduras
  jam: "JMD", // Jamaica
  mex: "MXN", // México
  nica: "NIO", // Nicaragua
  pan: "PAB", // Panamá
  par: "PYG", // Paraguay
  pe: "PEN", // Perú
  redom: "DOP", // República Dominicana
  sancyn: "XCD", // San Cristóbal y Nieves
  sanvyg: "XCD", // San Vicente y las Granadinas
  sanlu: "XCD", // Santa Lucía
  suri: "SRD", // Surinam
  trito: "TTD", // Trinidad y Tobago
  uru: "UYU", // Uruguay
  ske: "VES", // Venezuela

  // Asia
  afg: "AFN", // Afganistán
  arsau: "SAR", // Arabia Saudita
  arm: "AMD", // Armenia
  aze: "AZN", // Azerbaiyán
  ban: "BDT", // Bangladés
  bar: "BHD", // Baréin
  brm: "MMK", // Birmania
  bru: "BND", // Brunéi
  but: "BTN", // Bután
  cam: "KHR", // Camboya
  cata: "QAR", // Catar
  chn: "CNY", // China
  cn: "KPW", // Corea del Norte
  cs: "KRW", // Corea del Sur
  emaru: "AED", // Emiratos Árabes Unidos
  fil: "PHP", // Filipinas
  ind: "INR", // India
  indo: "IDR", // Indonesia
  irk: "IQD", // Irak
  irn: "IRR", // Irán
  is: "ILS", // Israel
  jp: "JPY", // Japón
  jod: "JOD", // Jordania
  kazj: "KZT", // Kazajistán
  kir: "KGS", // Kirguistán
  kuw: "KWD", // Kuwait
  lao: "LAK", // Laos
  lib: "LBP", // Líbano
  mal: "MYR", // Malasia
  mad: "MVR", // Maldivas
  mon: "MNT", // Mongolia
  nep: "NPR", // Nepal
  om: "OMR", // Omán
  pak: "PKR", // Pakistán
  sing: "SGD", // Singapur
  sir: "SYP", // Siria
  slan: "LKR", // Sri Lanka
  tay: "TJS", // Tayikistán
  tai: "THB", // Tailandia
  tior: "USD", // Timor Oriental
  trkm: "TMT", // Turkmenistán
  trq: "TRY", // Turquía
  uzb: "UZS", // Uzbekistán
  viet: "VND", // Vietnam
  ye: "YER", // Yemen

  // Europa
  alb: "ALL", // Albania
  hit: "EUR", // Alemania
  and: "EUR", // Andorra
  aus: "EUR", // Austria
  azer: "AZN", // Azerbaiyán
  blg: "EUR", // Bélgica
  birr: "BLR", // Bielorrusia
  bosher: "BIH", // Bosnia y Herzegovina
  bulg: "BGR", // Bulgaria
  chp: "CYP", // Chipre
  croc: "HRK", // Croacia
  dinm: "DNK", // Dinamarca
  esq: "SVK", // Eslovaquia
  esl: "SVN", // Eslovenia
  sp: "EUR", // España
  est: "EUR", // Estonia
  fin: "EUR", // Finlandia
  fr: "EUR", // Francia
  gr: "GEO", // Georgia
  gc: "EUR", // Grecia
  hug: "HUN", // Hungría
  irl: "EUR", // Irlanda
  isl: "ISK", // Islandia
  it: "EUR", // Italia
  kos: "EUR", // Kosovo
  let: "EUR", // Letonia
  liech: "EUR", // Liechtenstein
  lit: "EUR", // Lituania
  lux: "EUR", // Luxemburgo
  mlt: "EUR", // Malta
  mld: "MDA", // Moldavia
  mon: "EUR", // Mónaco
  mnt: "EUR", // Montenegro
  nor: "NOK", // Noruega
  psb: "EUR", // Países Bajos
  pol: "PLN", // Polonia
  prt: "EUR", // Portugal
  uk: "GBP", // Reino Unido
  rch: "CZK", // República Checa
  rum: "RON", // Rumanía
  ru: "RUB", // Rusia
  smar: "EUR", // San Marino
  srb: "RSD", // Serbia
  sue: "SEK", // Suecia
  siz: "CHF", // Suiza
  uc: "UAH", // Ucrania
  vat: "EUR", // Vaticano
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
    ).textContent = `${cantidad} ${origenMoneda} = ${resultado.toFixed(
      2
    )} ${destinoMoneda}`;
  }
});
