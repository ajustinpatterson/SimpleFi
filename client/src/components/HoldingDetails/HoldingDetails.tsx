import React from 'react';
import { useParams } from 'react-router-dom';
import HoldingChart from '../HoldingChart/HoldingChart';
import HoldingDetailAction from '../HoldingDetailAction/HoldingDetailAction';

interface ParamTypes {
  tokenName: string;
}


export default function HoldingDetails ({userTokens, userFields}: {userTokens:any,userFields:any}): JSX.Element  {
  let { tokenName } = useParams<ParamTypes>();
  const detailedToken:any = userTokens.filter((token:any) => token.name === tokenName);

  return (
    <HoldingDetailAction available={true} amount={detailedToken.balance} protocol={'placeholder'}/>


    //<HoldingChart/>
  )
}