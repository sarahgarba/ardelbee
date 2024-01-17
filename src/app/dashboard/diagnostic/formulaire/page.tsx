'use client'
import React, { FormEvent, useState } from 'react';

interface DiagnosticType{
    zone: string,
    probleme: string,
    date: string,
    solution: string,
    secteur: string
}

export default function DiagnosticFormulaire() {

        const [collectivite, setCollectivite] = useState<string>('');
        const [probleme, setProbleme] = useState<string>('');
        const [secteur, setSecteur] = useState<string>('');
        const [causes, setCauses] = useState<string>('');
        const [effets, setEffets] = useState<string>('');
        const [opportunites, setOpportunites] = useState<string>('');
        const [diagnostics, setDiagnostics] = useState<Array<DiagnosticType>>([]);
      
        const handleSubmit = (e: FormEvent) => {
          e.preventDefault();
      
          // Génération du diagnostic
          const diagnostic = {
            zone: collectivite,
            probleme: probleme,
            date: new Date().toLocaleDateString(),
            solution: 'Solution à définir',
            secteur: secteur,
          };
      
          // Ajout du diagnostic à la liste
          setDiagnostics([...diagnostics, diagnostic]);
      
          // Réinitialisation des champs après la soumission
          setCollectivite('');
          setProbleme('');
          setSecteur('');
          setCauses('');
          setEffets('');
          setOpportunites('');
        };
      

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col rounded-xl border gap-4 shadow">
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-14 sm:mx-auto mt-6'>
        <label htmlFor="collectivite">Collectivité territoriale :</label>
        <select
            id="collectivite"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={collectivite}
            onChange={(e) => setCollectivite(e.target.value)}
            required
        >
            <option value="">Sélectionnez une collectivité</option>
            <option value="Collectivité 1">Collectivité 1</option>
            <option value="Collectivité 2">Collectivité 2</option>
            <option value="Collectivité 3">Collectivité 3</option>
        </select>
        <label htmlFor="probleme">Problème :</label>
        <input
            type="text"
            id="probleme"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={probleme}
            onChange={(e) => setProbleme(e.target.value)}
            required
        />
        <label htmlFor="secteur">Secteur :</label>
        <select 
            id="secteur" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={secteur} 
            onChange={(e) => setSecteur(e.target.value)} 
            required>
        <option value="">Sélectionnez un secteur</option>
        <option value="Secteur 1">Secteur 1</option>
        <option value="Secteur 2">Secteur 2</option>
        <option value="Secteur 3">Secteur 3</option>
        </select>
        <label htmlFor="causes">Causes :</label>
        <input
            type="text"
            id="causes"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={causes}
            onChange={(e) => setCauses(e.target.value)}
            required
        />
        <label htmlFor="effets">Effets :</label>
        <input
            type="text"
            id="effets"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={effets}
            onChange={(e) => setEffets(e.target.value)}
            required
        />
        <label htmlFor="opportunites">Opportunités :</label>
        <input
            type="text"
            id="opportunites"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={opportunites}
            onChange={(e) => setOpportunites(e.target.value)}
            required
        />
        <button type="submit" className='p-3 rounded-lg bg-primary-blue text-white'>Générer diagnostic</button>
      </form>

      {diagnostics.length > 0 && (
        <table>
          <thead>
            <tr>
              <th className='text-left'>Zone</th>
              <th className='text-left'>Problème</th>
              <th className='text-left'>Date</th>
              <th className='text-left'>Solution</th>
              <th className='text-left'>Secteur</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diag, index) => (
              <tr key={index}>
                <td>{diag.zone}</td>
                <td>{diag.probleme}</td>
                <td>{diag.date}</td>
                <td>{diag.solution}</td>
                <td>{diag.secteur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

          
       {diagnostics.length > 0 && (
        <button onClick={() => console.log('Voir plus')}>Voir plus</button> 
    
        )}

            

        </div>
    )
}