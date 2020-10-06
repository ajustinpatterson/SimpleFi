import React from 'react';
import './TokenCellHeader.css';

interface TokenCellHeaderProps {
  content: string | number; 

}

export default function TokenCellHeader ( 
  { content } : TokenCellHeaderProps
): JSX.Element {

  const cellMarkup: JSX.Element = (
    <th className="cell cell-header">
      {content}
    </th>
  ) 

  return (cellMarkup);
  
}