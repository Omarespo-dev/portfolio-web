
//importo due componente di nav standard e resposive
import HeaderNav from "./HeaderNav"
import HeaderNavMobile from "./HeaderNavMobile"


export default function HeaderWithResponsive() {
    return (
        <>
            <header>
                <HeaderNav />
                <HeaderNavMobile />
            </header>
        </>
    )
}
