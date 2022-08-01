import React from 'react'
import TableStyled from '../../styles/TableStyled'

function Table({titles, data, theme }) {
  return (
    <TableStyled theme={parseInt(theme)}>
        <thead>
            <th>#</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
        </thead>
        <tbody>
            {
                data.map((element, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>
                            {element.coin}
                        </td>
                        <td>{element.symbol}</td>
                        <td>{element.price}</td>
                    </tr>
                ))
            }
        </tbody>
    </TableStyled>
  )
}

export default Table