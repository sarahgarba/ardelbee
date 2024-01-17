'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { appName, appSubName } from '@/constants/config'
import { MenuItemType } from "@/types/sidebarNavigation"
import { RiFileEditFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { SideBarNavItem } from "@/components"

const SideBar:React.FC = () => {
    const PATHNAME = usePathname()
    const MENU_LIST: Array<MenuItemType> = [
        {
            label: "Diagnostic",
            href: "/dashboard/diagnostic",
            icon: <RiFileEditFill size={20}/>
        }
    ]
    const LOGOUT:MenuItemType = {
        label: "Déconnexion",
        href: "/",
        icon: <TbLogout2 size={20}/>
    }
    return (
        <nav className="w-[300px] h-full p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-col justify-start items-center gap-2">
            <div className="w-full flex flex-col gap-2 justify-start items-center">
                <Image src="/assets/img/logo.png" alt={`${appName} Logo`} width={100} height={100} className='w-[120px] aspect-square'/>
                <h1 className="text-logo-yellow text-2xl font-bold">{appName}</h1>
                <h1 className="text-lg">{appSubName}</h1>
            </div>

            <div className="w-full h-full overflow-y-auto p-3 flex flex-col justify-start items-center">
                <div className="w-full h-full mb-2 flex flex-col justify-start items-center border-b border-grayToneStroke">
                    {
                        MENU_LIST.map((item:MenuItemType, index:number)=>{
                            const ISACTIVE = PATHNAME.toLowerCase().includes(item.label.toLowerCase())
                            return <SideBarNavItem
                                        key={index}
                                        label={item.label}
                                        href={item.href}
                                        icon={item.icon}
                                        active={ISACTIVE}
                                    />
                        })
                    }
                </div>
                <SideBarNavItem
                    label={LOGOUT.label}
                    href={LOGOUT.href}
                    icon={LOGOUT.icon}
                />
            </div>
        </nav>
    )
}

export default SideBar