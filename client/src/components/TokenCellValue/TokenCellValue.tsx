import React from 'react';
import './TokenCellValue.css';

interface TokenCellValueProps {
  content: string | number; 
  index: number; 
  currencyCells: boolean[]
}

export default function TokenCell ( 
  { content, index, currencyCells} : TokenCellValueProps
): JSX.Element {

  const cellMarkup: JSX.Element = (
    <td className='cell cell-values'>
      {currencyCells[index] ? `$${content}` : content}
    </td>
  )

  return (cellMarkup);
  
}