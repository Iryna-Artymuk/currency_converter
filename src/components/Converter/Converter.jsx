import { useEffect, useState } from 'react';

import { StyledConverter, StyledForm, StyledTitel } from './StyledConverter';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import axios from 'axios';
// const API_KEY = '52b45716cb0538baefb5f40db1764096';
const API_URL = `http://data.fixer.io/api/latest?access_key=52b45716cb0538baefb5f40db1764096&base  =USD&symbols = USD,UAN,EUR,PLN,`;
const Converter = () => {
  const [amountOne, setAmountOne] = useState(100);
  const [amountTwo, setAmountTwo] = useState(100);

  const [currencyOne, setCurrencyOne] = useState();
  const [currencyTwo, setCurrencyTwo] = useState();

  const [currencyRates, setCurrencyRates] = useState([]);

  const currencyOption = Object.keys(currencyRates)?.reduce((acc, item) => {
    const optionItem = {};
    optionItem.value = item;
    optionItem.label = item;
    acc.push(optionItem);
    return acc;
  }, []);
  useEffect(() => {
    const getCurrency = async () => {
      try {
        const res = await axios.get(API_URL);
        setCurrencyRates(res.data.rates);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    getCurrency();
  }, []);

  // handel amount change
  const handelAmountOneChange = (amountOne) => {
    const exchangeResult = (
      (amountOne * currencyRates[currencyTwo.value]) /
      currencyRates[currencyOne.value]
    ).toFixed(2);

    setAmountTwo(exchangeResult);
    setAmountOne(amountOne);
  };
  const handelAmountTwoChange = (amountTwo) => {
    const exchangeResult = (
      (amountTwo * currencyRates[currencyOne.value]) /
      currencyRates[currencyTwo.value]
    ).toFixed(2);
    setAmountOne(exchangeResult);
    setAmountTwo(amountTwo);
  };

  const handelcurrencyOneChange = (currencyOne) => {
    setCurrencyOne(currencyOne);
    const exchangeResult = (
      (amountOne * currencyRates[currencyTwo.value]) /
      currencyRates[currencyOne.value]
    ).toFixed(2);

    setAmountTwo(exchangeResult);
  };
  const handelcurrencyTwoChange = (currencyTwo) => {
    const exchangeResult = (
      (amountTwo * currencyRates[currencyOne.value]) /
      currencyRates[currencyTwo.value]
    ).toFixed(2);
    setAmountOne(exchangeResult);
    setCurrencyTwo(currencyTwo);
  };
  return (
    <StyledConverter>
      <StyledTitel> Currency converter </StyledTitel>

      <StyledForm>
        <CurrencyInput
          value={amountOne}
          amountChange={handelAmountOneChange}
          currencyChange={handelcurrencyOneChange}
          option={currencyOption}
          setOptions={setCurrencyOne}
          selected={currencyOne}
        />

        <CurrencyInput
          value={amountTwo}
          amountChange={handelAmountTwoChange}
          currencyChange={handelcurrencyTwoChange}
          option={currencyOption}
          setOptions={setCurrencyTwo}
          selected={currencyTwo}
        />
      </StyledForm>
    </StyledConverter>
  );
};

export default Converter;
