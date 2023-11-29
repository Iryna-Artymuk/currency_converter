import { useEffect, useState } from 'react';

import { StyledConverter, StyledForm, StyledTitel } from './StyledConverter';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import axios from 'axios';
// const API_KEY = '52b45716cb0538baefb5f40db1764096';
const API_URL = `http://data.fixer.io/api/latest?access_key=52b45716cb0538baefb5f40db1764096a&base  =USD&symbols = USD,UAN,EUR,PLN,`;
const Converter = () => {
  const [amountOne, setAmountOne] = useState();
  const [amountTwo, setAmountTwo] = useState();

  const [currencyOne, setCurrencyOne] = useState({
    value: 'UAH',
    label: 'UAH',
  });
  const [currencyTwo, setCurrencyTwo] = useState({
    value: 'USD',
    label: 'USD',
  });
  const [currencyRates, setCurrencyRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('error: ', error);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API_URL);
        console.log('res : ', res);

        setCurrencyRates(res.data.rates);
        if (res.data.success === false) {
          setIsLoading(false);
          throw new Error(
            "can't get exchange rate data, please try again later"
          );
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
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

  if (isLoading) {
    return <p>Looading data...</p>;
  }
  if (error) {
    return <p>{`Sorry, ${error.message}`}</p>;
  }

  return (
    <StyledConverter>
      <StyledTitel> Currency converter </StyledTitel>

      <StyledForm>
        <CurrencyInput
          value={amountOne}
          amountChange={handelAmountOneChange}
          currencyChange={handelcurrencyOneChange}
          currencyRates={currencyRates}
          setOptions={setCurrencyOne}
          selected={currencyOne}
        />

        <CurrencyInput
          value={amountTwo}
          amountChange={handelAmountTwoChange}
          currencyChange={handelcurrencyTwoChange}
          currencyRates={currencyRates}
          setOptions={setCurrencyTwo}
          selected={currencyTwo}
        />
      </StyledForm>
    </StyledConverter>
  );
};

export default Converter;
