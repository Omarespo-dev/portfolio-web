import NavContent from "../../../../data/HeaderNavContent";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";

export default function HeaderNav({ openNav }) {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="h-[70px] flex justify-center shadow-lg/10 fixed w-[100%] z-50 top-0 bg-zinc-100">
      <div className="w-[90%] flex justify-between items-center sm:justify-center">

        {/* Logo */}
        <section className="object-contain">
          <button onClick={scrollToTop}>
            <img
              src="/img/Logo-oe-2.png"
              alt=""
              className="cursor-pointer animate-pulse w-[70px] h-full"
            />
          </button>
        </section>

        {/* NavLink */}
        <ul className="w-[80%] justify-evenly sm:flex hidden">
          {NavContent.map((item) => {
            const id = item.title.toLowerCase().replace(/\s/g, "-"); // es. "About Me" -> "about-me"

            return (
              <li key={item.id}>
                <Link
                  to={id}           // deve combaciare con name/id del <Element>
                  smooth={true}
                  duration={500}
                  offset={-70}      // per la navbar fissa
                  spy={true}
                  className="hover:text-zinc-500 hover:border-b-2 pb-2 h-[30px] duration-100 cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <RxHamburgerMenu
          className="h-[36px] w-[40px] cursor-pointer sm:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
}
