//Icone ///
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//importo funzione
import SocialIcon from "../common/SocialIcon";

export default function JumboTron() {
  return (
    <section id="home" className="mt-20 flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-[#D7D7D7] rounded-3xl max-w-6xl mx-auto shadow-lg">

      {/* Content left */}
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-600 text-lg">👋 Ciao, io sono</h3>
        <h1 className="text-5xl font-bold text-gray-900">Omar Esposito</h1>
        <p className="text-gray-600 text-lg">
          Junior Full Stack Developer specializzato in React.
        </p>

        <div className="flex gap-4 mt-6">
          <SocialIcon href="mailto:omaresposito21@gmail.com">
            <SiGmail className="text-red-500 text-3xl" />
          </SocialIcon>

          <SocialIcon href="https://www.linkedin.com/in/omar-esposito-1544a6270">
            <FaLinkedin className="text-blue-600 text-3xl" />
          </SocialIcon>

          <SocialIcon href="https://github.com/Omarespo-dev">
            <FaGithub className="text-gray-800 text-3xl" />
          </SocialIcon>
        </div>
      </div>

      {/* Img destra*/}
      <div className="mt-10 md:mt-0">
        <img
          src="/img/image.png"
          alt="Omar"
          className="w-60 h-60 rounded-full shadow-md object-cover transition-transform duration-300 hover:scale-105 bg-white p-2"
        />
      </div>
    </section>
  )
}
