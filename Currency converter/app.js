let country_code = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
// country-list.js
// Displaying country-list.js.

const dropList = document.querySelectorAll(".drop-list select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const getButton = document.querySelector("form button");
const api = `2b18614f52be432ab955f121`;

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_code) {
    let selected;
    // setting the default values to be usd and inr
    if (i == 0) {
      selected = currency_code == "INR" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "USD" ? "selected" : "";
    }
    // creating option tag with passing currency code as a text and value
    let optionTag = ` <option value="${currency_code}" ${selected}>${currency_code}</option>`;
    // inserting options tags inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target); // calling loadflag with passing target element as an argument
  });
}

function loadFlag(element) {
  for (code in country_code) {
    if (code == element.value) {
      // if currency code of country is equal to option value
      let imgTag = element.parentElement.querySelector("img");
      // selecting img tag of particular droplist
      // changing the url based on the code
      imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
    }
  }
}
window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector(" .drop-list .icon ");
exchangeIcon.addEventListener("click", (e) => {
  //swaping values on icon click
  [fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ];
  // swaping flags by passing the changed value
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector(".amount input");
  let exchangeRatetxt = document.querySelector(".exchange-rate");
  // getting the value entered by users
  let amountVal = amount.value;
  // if nothing is entered by user the default value will be 1
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  // getting the current exchange rate from the api in standpoint
  exchangeRatetxt.innerHTML = `Getting Exchange rate...`;
  let url = ` https://v6.exchangerate-api.com/v6/${api}/latest/${fromCurrency.value}`;
  fetch(url).then((response) =>
    response
      .json()
      .then((result) => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        console.log(exchangeRate);
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);

        exchangeRatetxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value} `;
      })
      .catch(() => {
        exchangeRatetxt.innerHTML = `Something Went wrong`;
      })
  );
}
