// importo dati Per NavBar
import NavContent from "../../../../data/HeaderNavContent";

// icona closeNavBar
import { IoCloseSharp } from "react-icons/io5";

// react-scroll
import { Link, animateScroll as scroll } from "react-scroll";

export default function HeaderNavMobile({ closeNav, showNav }) {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    closeNav(); // chiudo anche il menu
  };

  return (
    <div
      className={`
        fixed inset-0 z-[60]
        transition-opacity duration-300
        ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={closeNav}
      />

      {/* Content Responsive Nav */}
      <div
        className={`
          absolute top-0 right-0 w-[260px] h-screen bg-zinc-900 shadow-xl
          transform transition-transform duration-300
          ${showNav ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Logo + close */}
        <section className="flex items-center justify-between px-5 py-4 border-b border-zinc-700">

          {/* LOGO SCROLL TO TOP */}
          <button onClick={scrollToTop}>
            <img
              src="/img/Logo-oe-2-white.png"
              alt="Logo Omar Esposito"
              className="w-[60px] h-auto cursor-pointer"
            />
          </button>

          <IoCloseSharp
            className="text-white w-[32px] h-[32px] cursor-pointer hover:text-zinc-400 transition"
            onClick={closeNav}
          />
        </section>

        {/* Link di navigazione */}
        <div className="px-8 mt-8">
          <ul className="flex flex-col gap-8">
            {NavContent.map((item) => {
              const id = item.title.toLowerCase().replace(/\s/g, "-");

              return (
                <li key={item.id}>
                  <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-[20px] text-white tracking-wide 
                    border-b border-transparent pb-1 cursor-pointer 
                    hover:text-zinc-300 hover:border-b-blue-300 transition"
                    onClick={closeNav} // chiude il menu dopo il click
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
