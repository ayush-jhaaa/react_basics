import React from 'react'

function Feild({options,setVal1,setVal2,setCurrency,setPower,currencyJSON,val,power1,power2,converter,currency}) {
  return (
    <div className="mb-4">
          <label htmlFor="input2" className="block text-sm font-medium text-gray-700 mb-2">
            Input Box 2
          </label>
          <div className="flex space-x-2">

            <input
              type="text"
              onChange={(e) => {
                setVal1(e.target.value);
                setVal2((converter(power1,power2)) * (e.target.value));
            }}
              value={val}
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter value"
            />


            <select
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
                setPower(currencyJSON['conversion_rates'][e.target.value])
            }}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="" disabled>
            Select an option
          </option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}

            </select>
          </div>
        </div>
  )
}

export default Feild