import {
    SearchBar,
    Filter,
    Tableau
} from "@/components"

import React, { useState } from 'react';


export default function DiagnosticRecent() {
    function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col  rounded-xl border gap-3">
            <SearchBar/>
            <Filter/>
            <Tableau/>
        </div>
    )
  }
  