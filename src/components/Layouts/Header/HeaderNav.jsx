
//importo dati Per NavBar
import NavContent from "../../../../data/HeaderNavContent"

//importo icona Burger
import { RxHamburgerMenu } from "react-icons/rx"

export default function HeaderNav({openNav}) {
    return (
        <div className=" flex justify-center shadow-lg/10">
            <div className=" w-[90%] flex justify-between items-center sm:justify-center">

                {/* img  */}
                <img src="/img/Logo(2).png" alt="" className="w-[70px]" />
                <p>Portfolio</p>
                {/* NavLink */}
                <ul className=" w-[80%] justify-evenly sm:flex hidden ">
                    {NavContent.map(nav => (
                        <li key={nav.id}>
                            {nav.title}
                        </li>
                    ))}
                </ul>
                <RxHamburgerMenu className=" h-[36px] w-[40px] cursor-pointer sm:hidden" onClick={openNav}/>
            </div>

        </div>
    )
}
