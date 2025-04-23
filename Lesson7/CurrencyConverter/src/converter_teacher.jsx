import "./converter.css";
import { useEffect, useState } from "react";

function Converter() {
  const [options, setOptions] = useState([]);
  const [userValue, setUserValue] = useState(0);
  const [destValue, setDestValue] = useState(0);
  const [sourceCurreny, setSourceCurrency] = useState();
  const [destCurreny, setDestCurrency] = useState();

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/4c9ae5bde09a4143c4317fb4/codes")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.supported_codes);
        setSourceCurrency(data.supported_codes[0][0]);
        setDestCurrency(data.supported_codes[0][0]);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/4c9ae5bde09a4143c4317fb4/pair/${sourceCurreny}/${destCurreny}/${userValue}`
    )
      .then((res) => res.json())
      .then((data) => setDestValue(data.conversion_result));
  }, [userValue]);

  return (
    <div>
      <div className="container">
        <input
          value={userValue}
          placeholder="Enter amount"
          className="converter-input"
          onChange={(e) => {
            const intValue = parseInt(e.target.value);
            if (typeof intValue === "number") {
              setUserValue(intValue);
            }
          }}
        />
        <p>{sourceCurreny}</p>
        <p>to</p>
        {destValue}
        <p>{destCurreny}</p>
      </div>
      <div className="container">
        <p>I want to convert</p>
        <select
          value={sourceCurreny}
          onChange={(e) => setSourceCurrency(e.target.value)}
          className="selectbox"
          name="currency"
          id="currencySelect"
        >
          {options.map((optionValue) => (
            <option value={optionValue[0]}>{optionValue[1]}</option>
          ))}
        </select>
        to
        <select
          value={destCurreny}
          onChange={(e) => setDestCurrency(e.target.value)}
          className="selectbox"
          name="currency"
          id="currencySelect"
        >
          {options.map((optionValue) => (
            <option value={optionValue[0]}>{optionValue[1]}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Converter;
