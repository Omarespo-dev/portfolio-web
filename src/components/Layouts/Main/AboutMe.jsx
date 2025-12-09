import { useState } from "react"

export default function AboutMe() {

  //stato per gestire explore more
  const [exploreMore, setExploreMore] = useState(false)

  //Logica per Explore more
  function logicExploreMore() {
    let stringa = 'Sono un Full Stack Web Developer con una solida base tecnica e una forte motivazione a crescere ogni giorno. Lavoro con HTML, CSS, JavaScript, React, Node.js, Express e MySQL per sviluppare siti moderni e applicazioni dinamiche, curandone sia la parte frontend che backend. Sto ampliando le mie competenze con tecnologie come TypeScript, TailwindCSS, PHP e il linguaggio C, per migliorare la mia versatilità e la qualità del codice che scrivo.'

    if (exploreMore) {
      stringa += " Mi piace affrontare nuove sfide, imparare continuamente e trasformare idee creative in soluzioni funzionali e ben strutturate. Attualmente sono alla ricerca di progetti stimolanti e opportunità che mi permettano di crescere professionalmente e mettere in pratica le mie competenze."
    }

    return stringa
  }


  return (
    <section id="about-me" className="bg-circle-center mt-[70px] flex flex-wrap justify-center">

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
    </section>
  )
}
