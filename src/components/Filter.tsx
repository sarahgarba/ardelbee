"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ChangeEvent } from 'react';

function QuickFilter() {


  const [dateFilter, setDateFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [solutionFilter, setSolutionFilter] = useState('');
  const [zoneFilter, setZoneFilter] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDateFilterChange = (date: Date | null): void => {
    setStartDate(date);
    // Perform an appropriate action here, such as updating the list of displayed items
  };

  const handleSectorFilterChange = (event: ChangeEvent<HTMLSelectElement>): void =>  {
    setSectorFilter(event.target.value);
    // Effectuez une action appropriée ici, comme la mise à jour de la liste des éléments affichés
  };

  const handleSolutionFilterChange = (event: ChangeEvent<HTMLInputElement>): void =>  {
    setSolutionFilter(event.target.value);
    // Effectuez une action appropriée ici, comme la mise à jour de la liste des éléments affichés
  };

  const handleZoneFilterChange = (event: ChangeEvent<HTMLSelectElement>): void =>  {
    setZoneFilter(event.target.value);
    // Effectuez une action appropriée ici, comme la mise à jour de la liste des éléments affichés
  };

  return (
    <div className='flex flex-row gap-2 justify-around mx-6'>
      <input type="text" disabled placeholder="Filtrer par date..." />
      <DatePicker 
         selected={startDate}
         className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
         onChange={(date: Date | null) => handleDateFilterChange(date)} />
      <select
            id="secteur"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={sectorFilter}
            onChange={handleSectorFilterChange}
            required
        >
            <option value="">Filtrer par secteur...</option>
            <option value="Secteur 1">Secteur 1</option>
            <option value="Secteur 2">Secteur 2</option>
            <option value="Secteur 3">Secteur 3</option>
        </select>
        <select
            id="zone"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={zoneFilter}
            onChange={handleZoneFilterChange}
            required
        >
            <option value="">Filtrer par zone...</option>
            <option value="zone 1">Zone 1</option>
            <option value="zone 2">Zone 2</option>
            <option value="zone 3">Zone 3</option>
        </select>
      
    </div>
  );
}

export default QuickFilter;
