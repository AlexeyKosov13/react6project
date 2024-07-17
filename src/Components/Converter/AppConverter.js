import React, { useState } from 'react';
import { Block } from './Block';
import './Converter.scss';

function AppConverter() {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        setRates(json.rates.RUB = 1);
        console.log(json.rates);
        
      }).catch(err => {
        console.warn(err);
        alert('не удалось получить информацию');
      });
  }, []);

  const onChangeFromPrice = (value) => {

    const result = (value * rates[toCurrency]);

    setToPrice(result);
    setFromPrice(value);
  }

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  }

  return (
    <div className="AppConverter">
      <Block value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default AppConverter;
