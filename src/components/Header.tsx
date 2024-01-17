import React from 'react'
import { appName, appSubName } from '@/constants/config'

const Header:React.FC = () => {
    return (
        <div className="p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-row justify-center items-center">
            <div className="w-full flex flex-row justify-start items-center gap-2">
                <h1 className="text-logo-yellow text-lg font-bold">{appName}</h1>
                -
                <h1 className="text-lg">{appSubName}</h1>
            </div>
        </div>
    )
}

export default Header