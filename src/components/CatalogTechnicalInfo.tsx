import React from 'react';

export interface TechnicalInformation {
  name: string,
  value: string,
}

interface TechnicalData {
  data: TechnicalInformation[]
}

export function CatalogTechnicalInfo(props: TechnicalData) {
  const tableRows = props.data.map(({name, value}, id) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  ))
  if (props.data.length === 0) {
    return null;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Informacion Téchnica</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}
