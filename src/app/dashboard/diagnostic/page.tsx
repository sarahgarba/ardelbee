import {
    SearchBar,
    Filter,
    Tableau
} from "@/components"

import React, { useState } from 'react';
import { ChangeEvent } from 'react';


export default function DiagnosticRecent() {
    
    function handleSearchChange(event: any): void {
        // Handle the change eventt
      }

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col  rounded-xl border gap-3">
            <SearchBar/>
            <Filter/>
            <Tableau/>
        </div>
    )
  }
  