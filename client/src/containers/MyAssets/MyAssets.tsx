import React, { useState, useEffect } from 'react';
import './MyAssets.css';
import SummaryTable from '../../components/SummaryTable/SummaryTable';
import { holdingHeaders, holdingCurrencyCells, farmingHeaders, earningHeaders } from '../../data/summaryHeaders';
import { Switch, Route, Link } from 'react-router-dom';
import HoldingChart from '../../components/HoldingChart/HoldingChart'

interface MyAssetsProps {
  userTokens: {
    isBase: boolean;
    lockedBalance: number[];
    balance: number;
    price_api: number;
    name: string;
    currentPrice: number;
  }[];
  userFields: {
    name: string;
    balance: number;
    seedTokens: {
      name: string;
    }[];
    cropTokens: {
      name: string;
    }[];
  }[];
  apis: {
    currentPrice: Function;
  }
  setSplash: Function;
}

export default function MyAssets ({userTokens, userFields, apis, setSplash}: MyAssetsProps) {
  const [holdingValues, setHoldingValues] = useState <any[]> ([]);
  const [fieldValues, setFieldValues] = useState <(string[]|number[])[]>([]);
  const [priceApis, setPriceApis] = useState <number[]>([]);

  useEffect(() => setSplash(true), []);

  const reducer = (acc: number, curr:number) => acc + curr

  useEffect(() => {
    const tempHoldingValues: [string, string, string, string, number][] = [];
    const tempPriceApis: number[] = [];
    userTokens.forEach(token => {
      if (token.isBase) {
        //TODO: modularise
        let lockedBalance = 0;
        let combinedBalance = 0;
        let lockedPercent = '';
        const formatter = new Intl.NumberFormat("en-US", {style: 'percent'});
        if (token.lockedBalance) {
          lockedBalance = token.lockedBalance.reduce((reducer), 0);
        }
        if (token.balance) {
          combinedBalance = token.balance + lockedBalance;
          lockedPercent = formatter.format(lockedBalance / combinedBalance);
        } else {
          combinedBalance = lockedBalance;
          lockedPercent = formatter.format(1);
        }
        tempHoldingValues.push([token.name, combinedBalance.toFixed(2), lockedPercent, 'Loading', token.currentPrice]);
        tempPriceApis.push(token.price_api);
      }
    })
    setHoldingValues(tempHoldingValues);
    console.log(tempHoldingValues)
    setPriceApis(tempPriceApis);
  }, [userTokens])

  useEffect(() => {
    Promise.all(priceApis.map(async priceApi => {
      if (priceApi){
        const currentPrice = await apis.currentPrice(priceApi);
        return currentPrice;
      }
    }))
      .then(prices => {
        const updatedHoldings: any[] = [];
        prices.forEach((price, i) => {
          const newValues = [...holdingValues[i]]
          const numberForCalc = newValues[1]
          newValues[3] = (price * numberForCalc).toFixed(2); //set value
          newValues[4] = price.toFixed(2); //set curr. price
          updatedHoldings.push(newValues);
        })
        setHoldingValues(updatedHoldings)
      })
  }, [priceApis])

  useEffect(() => {
    const tempFieldValues: (string[]|number[])[] = [];
    userFields.forEach(field => {
      const { name, balance, seedTokens, cropTokens} = field;
      let underlying = '';
      let farming = '';
      seedTokens && seedTokens.forEach(token => underlying += `${token.name}, `);
      cropTokens && cropTokens.forEach(token => farming += `${token.name}, `);
      underlying = underlying.slice(0, -2);
      farming = farming.slice(0, -2);
      tempFieldValues.push([name, balance.toFixed(2), underlying, farming]);
    })
    setFieldValues(tempFieldValues)
  
  }, [userFields])

  return (
    <div className="myassets-summary">
      <div className="summary-container summary-holding">
        <h2>Holding</h2>
        <SummaryTable headers={holdingHeaders} userValues={holdingValues} tableName={'holding'} currencyCells={holdingCurrencyCells}/>
      </div>
      <div className="summary-container summary-farming">
        <div className="container-header">
          <h2>Farming</h2>
        </div>
        <SummaryTable headers={farmingHeaders} userValues={fieldValues} tableName={'farming'} currencyCells={[]}/>
      </div>
      {/* <div className="summary-earning">
        <h2>Earning</h2>
        <SummaryTable headers={earningHeaders}/>
      </div> */}
    </div>
  )
}