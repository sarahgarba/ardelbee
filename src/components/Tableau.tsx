"use client"
import React, { useState } from 'react';

function Table() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const data = [
    { numero: 1, zone: 'Zone A', problemes: 'Problème 1', solutions: 'Solution 1', secteur: 'Secteur 1' },
    { numero: 2, zone: 'Zone B', problemes: 'Problème 2', solutions: 'Solution 2', secteur: 'Secteur 2' },
    { numero: 3, zone: 'Zone C', problemes: 'Problème 3', solutions: 'Solution 3', secteur: 'Secteur 3' },
    { numero: 4, zone: 'Zone D', problemes: 'Problème 4', solutions: 'Solution 4', secteur: 'Secteur 4' },
    { numero: 5, zone: 'Zone E', problemes: 'Problème 5', solutions: 'Solution 5', secteur: 'Secteur 5' },
  ];

   const handleRowSelect = (numero : number) => {
    if (selectedRows.includes(numero)) {
      setSelectedRows(selectedRows.filter((row) => row !== numero));
    } else {
      setSelectedRows([...selectedRows, numero]);
    }
  };

  return (
    <table className="table-auto border-collapse rounded-lg">
      <thead>
        <tr className="bg-gray-100 flex flex-row gap-4 shadow drop-shadow-lg">
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2">N°</th>
          <th className="px-4 py-2">Zone</th>
          <th className="px-4 py-2">Problèmes</th>
          <th className="px-4 py-2">Solutions</th>
          <th className="px-4 py-2">Secteur</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
          <tr key={item.numero} className="bg-white border-b-2 border-gray-200 flex flex-row gap-2 shadow drop-shadow-lg">
            <td className="px-4 py-2">
              <input
                type="checkbox"
                checked={selectedRows.includes(item.numero)}
                onChange={() => handleRowSelect(item.numero)}
              />
            </td>
            <td className="px-4 py-2">{item.numero}</td>
            <td className="px-4 py-2">{item.zone}</td>
            <td className="px-4 py-2">{item.problemes}</td>
            <td className="px-4 py-2">{item.solutions}</td>
            <td className="px-4 py-2">{item.secteur}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
    