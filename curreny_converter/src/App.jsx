import React, { useState, useEffect } from "react";
import Feild from "./feild/feild";

const App = () => {
  const [val1,setVal1]=useState(null);
  const [val2,setVal2]=useState(null);
  const [currency1,setCurrency1]=useState('USD')
  const [currency2,setCurrency2]=useState('USD')

  const [power1,setPower1]=useState(1);
  const [power2,setPower2]=useState(1);

  // const [currencyJSON,setCurrencyJSON]=useState(null);
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("https://v6.exchangerate-api.com/v6/5c5eae1c07d8b77e8218bf6b/latest/USD", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCurrencyJSON(result); // Update state
  //     })
  //     .catch((error) => console.error("Error fetching currency data:", error));
  // }, []);
  
  const currencyJSON=
  {
    "result":"success",
    "documentation":"https://www.exchangerate-api.com/docs",
    "terms_of_use":"https://www.exchangerate-api.com/terms",
    "time_last_update_unix":1736726402,
    "time_last_update_utc":"Mon, 13 Jan 2025 00:00:02 +0000",
    "time_next_update_unix":1736812802,
    "time_next_update_utc":"Tue, 14 Jan 2025 00:00:02 +0000",
    "base_code":"USD",
    "conversion_rates":{
     "USD":1,
     "AED":3.6725,
     "AFN":71.6907,
     "ALL":95.5977,
     "AMD":399.4382,
     "ANG":1.7900,
     "AOA":921.1960,
     "ARS":1039.7500,
     "AUD":1.6240,
     "AWG":1.7900,
     "AZN":1.6998,
     "BAM":1.9086,
     "BBD":2.0000,
     "BDT":121.6162,
     "BGN":1.9084,
     "BHD":0.3760,
     "BIF":2957.1692,
     "BMD":1.0000,
     "BND":1.3708,
     "BOB":6.9185,
     "BRL":6.0702,
     "BSD":1.0000,
     "BTN":86.2410,
     "BWP":14.0551,
     "BYN":3.3104,
     "BZD":2.0000,
     "CAD":1.4416,
     "CDF":2854.9959,
     "CHF":0.9165,
     "CLP":1008.9398,
     "CNY":7.3489,
     "COP":4338.8933,
     "CRC":506.1655,
     "CUP":24.0000,
     "CVE":107.6018,
     "CZK":24.4168,
     "DJF":177.7210,
     "DKK":7.2820,
     "DOP":61.2898,
     "DZD":135.9377,
     "EGP":50.5623,
     "ERN":15.0000,
     "ETB":126.3264,
     "EUR":0.9758,
     "FJD":2.3314,
     "FKP":0.8186,
     "FOK":7.2820,
     "GBP":0.8194,
     "GEL":2.8292,
     "GGP":0.8186,
     "GHS":14.8598,
     "GIP":0.8186,
     "GMD":72.5053,
     "GNF":8590.6079,
     "GTQ":7.7165,
     "GYD":209.1503,
     "HKD":7.7871,
     "HNL":25.4332,
     "HRK":7.3525,
     "HTG":130.6036,
     "HUF":402.9528,
     "IDR":16240.7483,
     "ILS":3.6884,
     "IMP":0.8186,
     "INR":86.2625,
     "IQD":1308.2156,
     "IRR":42021.9186,
     "ISK":141.1654,
     "JEP":0.8186,
     "JMD":156.5001,
     "JOD":0.7090,
     "JPY":157.8725,
     "KES":129.3637,
     "KGS":87.0099,
     "KHR":4060.3241,
     "KID":1.6251,
     "KMF":480.0852,
     "KRW":1472.5579,
     "KWD":0.3085,
     "KYD":0.8333,
     "KZT":527.4808,
     "LAK":21917.7527,
     "LBP":89500.0000,
     "LKR":294.3769,
     "LRD":187.1985,
     "LSL":19.1015,
     "LYD":4.9404,
     "MAD":10.0681,
     "MDL":18.5340,
     "MGA":4682.4327,
     "MKD":59.6584,
     "MMK":2099.1782,
     "MNT":3428.1992,
     "MOP":8.0206,
     "MRU":39.9080,
     "MUR":46.7822,
     "MVR":15.4494,
     "MWK":1736.7022,
     "MXN":20.7417,
     "MYR":4.4965,
     "MZN":63.9190,
     "NAD":19.1015,
     "NGN":1546.0170,
     "NIO":36.7817,
     "NOK":11.4582,
     "NPR":137.9856,
     "NZD":1.7984,
     "OMR":0.3845,
     "PAB":1.0000,
     "PEN":3.7724,
     "PGK":4.0077,
     "PHP":58.6926,
     "PKR":278.6294,
     "PLN":4.1576,
     "PYG":7901.1616,
     "QAR":3.6400,
     "RON":4.8308,
     "RSD":113.9637,
     "RUB":101.7458,
     "RWF":1382.1924,
     "SAR":3.7500,
     "SBD":8.4814,
     "SCR":14.2911,
     "SDG":458.5374,
     "SEK":11.2122,
     "SGD":1.3708,
     "SHP":0.8186,
     "SLE":22.6258,
     "SLL":22625.7763,
     "SOS":571.6620,
     "SRD":35.0983,
     "SSP":4033.6003,
     "STN":23.9082,
     "SYP":12930.5964,
     "SZL":19.1015,
     "THB":34.6539,
     "TJS":10.9248,
     "TMT":3.4996,
     "TND":3.2157,
     "TOP":2.3992,
     "TRY":35.4435,
     "TTD":6.7842,
     "TVD":1.6251,
     "TWD":33.0957,
     "TZS":2481.5196,
     "UAH":42.2782,
     "UGX":3680.9653,
     "UYU":43.6859,
     "UZS":12949.2218,
     "VES":53.8791,
     "VND":25371.2437,
     "VUV":119.7975,
     "WST":2.8422,
     "XAF":640.1136,
     "XCD":2.7000,
     "XDR":0.7700,
     "XOF":640.1136,
     "XPF":116.4498,
     "YER":248.9198,
     "ZAR":19.1021,
     "ZMW":27.6726,
     "ZWL":26.0579
    }
   }
  let option = []
  
  console.log(currencyJSON);
  for(const keys in currencyJSON['conversion_rates']){
    option.push(keys);
    
  }
  function converter(power1,power2)
  {
    //power1 --> power2 
    return power2/power1;
  }

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-blue-100 p-8 rounded shadow-md w-100 border p-5 border-blue-400">

        <Feild 
        options={option} 
        setVal1={setVal1} setVal2={setVal2} 
        setCurrency={setCurrency1} 
        currencyJSON={currencyJSON} 
        setPower={setPower1} 
        val={val1}
        power1={power1}
        power2={power2}
        converter={converter}
        currency={currency1}
        />

        <div className="flex justify-center my-4">
          <button
            onClick = {()=>{
              const temp = currency1;
              setCurrency1(currency2);
              setCurrency2(temp);
              setPower1(power2);
              setPower2(power1);
            }}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            🔄 Swap
          </button>
        </div>

        <Feild 
        options={option} 
        setVal1={setVal1} setVal2={setVal2} 
        setCurrency={setCurrency2} 
        currencyJSON={currencyJSON} 
        setPower={setPower2} 
        val={val2}
        power1={power1}
        power2={power2}
        converter={converter}
        currency={currency2}
        />

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={
              (e)=>{
                setVal2(power2/power1*val1)
              }
            }
            className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            convert {currency1}={power1} to {currency2}={power2}
          </button>
        </div>
      </div>
      {/* <p>{val1} == {val2}</p> */}
    </div>
  );
};

export default App;
