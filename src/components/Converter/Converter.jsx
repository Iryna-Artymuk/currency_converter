import { useEffect, useState } from 'react';
import axios from 'axios';

import Sppiner from '../Spinner/Sppiner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { StyledConverter, StyledForm, StyledTitel } from './StyledConverter';
import Time from '../TimeStamp/Time';

import CurrencyInput from '../CurrencyInput/CurrencyInput';
// const API_KEY = '52b45716cb0538baefb5f40db1764096';
const API_URL = `https://v6.exchangerate-api.com/v6/72f5042a3ed8d5c12026aab6/latest/USD`;
const Converter = () => {
  const [amountOne, setAmountOne] = useState(1);

  const [amountTwo, setAmountTwo] = useState(1);

  const [currencyOne, setCurrencyOne] = useState({
    value: 'UAH',
    label: 'UAH',
  });
  const [currencyTwo, setCurrencyTwo] = useState({
    value: 'USD',
    label: 'USD',
  });
  const [currencyRates, setCurrencyRates] = useState({});

  const [timeStamp, setTimeStamp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API_URL);

        setTimeStamp(res.data.time_last_update_unix);
        setCurrencyRates(res.data.conversion_rates);

        if (res.result === 'error' || !res) {
          throw new Error(
            'exchange rate data cannot be retrieved, please try again later'
          );
        }
        setIsLoading(false);
      } catch (error) {
        console.log('error: ', error);
        setError(error);
      } finally {
        setIsLoading(false);
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

  // handel first render convert
  useEffect(() => {
    if (Object.keys(currencyRates).length > 0) {
      handelAmountOneChange(1);
    }
  }, [currencyRates]);
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
    return <Sppiner />;
  }
  if (error) {
    return (
      <ErrorMessage>
        exchange rate data cannot be retrieved, please try again later
      </ErrorMessage>
    );
  }

  return (
    <StyledConverter>
      <StyledTitel> Currency converter </StyledTitel>
      <Time timeStamp={timeStamp} />
      <StyledForm>
        <CurrencyInput
          value={Number(amountOne)}
          amountChange={handelAmountOneChange}
          currencyChange={handelcurrencyOneChange}
          currencyRates={currencyRates}
          setOptions={setCurrencyOne}
          selected={currencyOne}
        />
        <div>
          <img
            width="50"
            src="https://img.icons8.com/pulsar-line/96/conversion-currencies.png"
            alt="conversion-currencies"
          />
        </div>
        <CurrencyInput
          value={Number(amountTwo)}
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
