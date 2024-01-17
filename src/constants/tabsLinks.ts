import TabLinkType from "@/types/tabLinks";

const DIAGNOSTIC_PATH = "/dashboard/diagnostic" 
export const DIAGNOSTIC_TAB_LINKS:Array<TabLinkType> = [
    {
        label: "Recent",
        href: `${DIAGNOSTIC_PATH}`
    },
    {
        label: "Formulaire",
        href: `${DIAGNOSTIC_PATH}/formulaire`
    }
]

