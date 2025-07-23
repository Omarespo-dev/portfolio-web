
//importo due componente di nav standard e resposive
import { useState } from "react"
import HeaderNav from "./HeaderNav"
import HeaderNavMobile from "./HeaderNavMobile"


export default function HeaderWithResponsive() {

    //imposto stato per navbar inizialmente chiusa
    const[showNav ,setShowNav] = useState(false)

    //Apri Nav
    const openNav = () => setShowNav(true)

    //Chiudi Nav
    const closeNav = () => setShowNav(false)

    return (
        <>
            <header>
                <HeaderNav openNav={openNav}/>
                <HeaderNavMobile closeNav={closeNav} showNav={showNav}/>
            </header>
        </>
    )
}
