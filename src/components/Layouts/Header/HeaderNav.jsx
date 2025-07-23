
//importo dati Per NavBar
import NavContent from "../../../../data/HeaderNavContent"

//importo icona Burger
import { RxHamburgerMenu } from "react-icons/rx"

export default function HeaderNav() {
    return (
        <div className=" flex justify-center shadow-lg/10">
            <div className=" w-[90%] flex justify-center items-center">

                {/* img  */}
                <img src="/img/Logo(2).png" alt="" className="w-[70px]" />
                <p>Portfolio</p>
                {/* NavLink */}
                <ul className="flex w-[80%] justify-evenly ">
                    {NavContent.map(nav => (
                        <li key={nav.id}>
                            {nav.title}
                        </li>
                    ))}
                </ul>
                <RxHamburgerMenu className=" h-[36px] w-[40px] cursor-pointer hidden" />
            </div>

        </div>
    )
}
