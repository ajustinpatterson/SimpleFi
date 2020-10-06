import React from 'react';
import './SummaryTable.css';
import TokenCellHeader from '../TokenCellHeader/TokenCellHeader'
import TokenCellValue from '../TokenCellValue/TokenCellValue'

interface SummaryProps {
  headers: string[]; 
  userValues: any[]; 
  tableName: number; 
  currencyCells: boolean[]
}

export default function SummaryTable ({headers, userValues, tableName, currencyCells}: SummaryProps): JSX.Element {
  return (
    <table className="summary-table">
      <thead>
          <tr>
            {headers.map(header => <TokenCellHeader key={`${tableName}-${header}`} content={header}/>)}
          </tr>
      </thead>
      <tbody>
        {userValues.map((rowValues, rowIndex) => {
          return (
              <tr key={`${tableName}-row-${rowIndex}`} className="summary-table-row">
                {rowValues.map((value:number, cellIndex:number) => {
                  return (
                    <TokenCellValue key={`${tableName}-cell-${rowIndex}-${cellIndex}`} content={value} index={cellIndex} currencyCells={currencyCells}/>
                    )
                  })}
              </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// export default function SummaryTable ({headers, userValues, tableName, currencyCells}) {
//   return (
//     <table className="summary-table">
//       <thead>
//           <tr>
//             {headers.map(header => <TokenCell key={`${tableName}-${header}`} content={header} header={true}/>)}
//           </tr>
//       </thead>
//       <tbody>
//         {userValues.map((rowValues, rowIndex) => {
//           return (
//               <tr key={`${tableName}-row-${rowIndex}`} className="summary-table-row">
//                 {rowValues.map((value, cellIndex) => {
//                   return (
//                     <TokenCell key={`${tableName}-cell-${rowIndex}-${cellIndex}`} content={value} header={false} index={cellIndex} currencyCells={currencyCells}/>
//                     )
//                   })}
//               </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }