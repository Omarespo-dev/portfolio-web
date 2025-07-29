import { useState } from "react"

export default function AboutMe() {

  //stato per gestire explore more
  const [exploreMore, setExploreMore] = useState(false)

  //Logica per Explore more
  function logicExploreMore() {
    let stringa = 'Sono uno Sviluppatore Web Full Stack, con una solida formazione di base alle spalle e tanta voglia di crescere. Lavoro con HTML, CSS, JavaScript, React, Node.js, Express e MySQL per realizzare siti web moderni e applicazioni dinamiche.'

    if (exploreMore) {
      stringa += "Mi piace affrontare nuove sfide, imparare tecnologie sempre diverse e dare vita a idee creative trasformandole in codice funzionante. Attualmente sono alla ricerca di progetti stimolanti e opportunità per migliorarmi ogni giorno."
    }

    return stringa
  }


  return (

    <div className="bg-circle-center mt-[70px] flex flex-wrap justify-center"
    id="about-me">

      {/* ABOUT ME button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]"
      >
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl
        ">
          <h1 className="font-bold text-[18px]">ABOUT ME</h1>
        </section>
      </div>

      <div className="w-[70%]  justify-center p-[20px]  flex-wrap flex-col mt-[30px]">
        {/* SEPARATOR */}
        <section className=" flex justify-center">
          <img src="/img/separatorBlack 1.png" alt="" className="w-[180px]" />
        </section>

        {/* Content */}
        <section className=" mt-[50px] flex justify-center text-center ">
          <p>
            {logicExploreMore()}
          </p>

        </section>



        {/* SEPARATOR */}
        <section className=" flex justify-center mt-[50px]">
          <img src="/img/separatorBlack 1.png" alt="" className="w-[180px]" />
        </section>
      </div>

      {/* EXPLORE MORE button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[50px] w-[130px] flex justify-center items-center border-r-2 border-l-2 border-b-black shadow-2xl cursor-pointer
         hover:bg-zinc-900 duration-200 ease-in hover:text-white"
          onClick={() => setExploreMore(!exploreMore)}>
          <h1 className="font-bold text-[15px] ">{exploreMore ? "EXPLORE LESS" : "EXPLORE"}</h1>
        </section>
      </div>
    </div>
  )
}
