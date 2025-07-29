
//importo dati Per NavBar
import NavContent from "../../../../data/HeaderNavContent"

//importo icona Burger
import { RxHamburgerMenu } from "react-icons/rx"

export default function HeaderNav({ openNav }) {
    //Scrollo fino a sopra 
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <div className="  flex justify-center shadow-lg/10 fixed w-[100%] z-50 top-0 bg-zinc-100">
            <div className=" w-[90%] flex justify-between items-center sm:justify-center">

                {/* img  */}
                <section className="w-[70px] ">
                    <img src="/img/Logo-oe-2.png" alt="" className="cursor-pointer "
                    onClick={scrollToTop}/>
                    {/* <p>Portfolio</p> */}
                </section>

                {/* NavLink */}
                <ul className=" w-[80%] justify-evenly sm:flex hidden ">
                    {NavContent.map(item => (
                        <a
                            key={item.id}
                            href={`#${item.title.toLowerCase().replace(/\s/g, "-")}`}
                            className="hover:text-zinc-500 hover:border-b-2 pb-2 h-[30px] duration-100">
                            {item.title}

                        </a>
                    ))}
                </ul>
                <RxHamburgerMenu className=" h-[36px] w-[40px] cursor-pointer sm:hidden" onClick={openNav} />
            </div>

        </div>
    )
}
