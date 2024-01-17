import {
    SideBar,
    Header
} from "@/components"
import Image from 'next/image'
import { appName } from '@/constants/config'


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="w-screen h-screen flex flex-row p-3 gap-4">
            <div className="h-full">
                <SideBar/>
            </div>
            <div className="h-full w-full flex flex-col gap-3">
                <Image src="/assets/img/bee-hexagons.png" alt={`${appName} Hexagons`} width={100} height={100} className='w-[200px] absolute right-0 top-10'/>
                <Header/>
                {children}
            </div>
        </div>
    )
  }