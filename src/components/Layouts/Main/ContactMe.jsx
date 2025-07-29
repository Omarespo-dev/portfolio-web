

export default function ContactMe() {
  return (
    <div className="bg-circle-center flex flex-wrap justify-center "
    >

      {/* ABOUT ME button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">CONTATTAMI</h1>
        </section>
      </div>

      <div className="w-[70%]  justify-center p-[20px]  flex-wrap flex-col mt-[30px] ">

        {/* Content */}
        <section className=" mt-[20px] flex justify-center text-center ">
          <p>
            Sono sempre aperto a nuove opportunità di lavoro, collaborazioni creative o progetti stimolanti. Contattami e ti risponderò al più presto!
          </p>

        </section>



        {/* SEPARATOR */}
        <section className=" flex justify-center mt-[50px]">
          <img src="/img/separatorBlack 1.png" alt="" className="w-[180px]" />
        </section>
      </div>

      {/* EXPLORE MORE button */}
      <div className="w-[90%] flex justify-center p-[20px] mt-[50px] mb-[50px]">
        <form action="submit" className="w-[400px] flex flex-col gap-6">

          <input
            type="text"
            placeholder="INSERISCI IL TUO NOME*"
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200"  //per input set
          />

          <input
            type="text"
            placeholder="INSERISCI LA TUA EMAIL*"
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold 
          focus:border-4 outline-none transition-all duration-200"  //per input set
          />

          <input
            type="number"
            placeholder="NUMERO DI TELEFONO"
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200
          [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" //per input set
          />

          <textarea
            name="message"
            placeholder="INSERISCI IL MESSAGGIO*"
            className="border-b-4 border-l-4  h-[80px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200 resize-none">

          </textarea>

          <section className="flex justify-center mt-[20px]">
            <button type="submit" className="h-[50px] w-[130px] flex justify-center items-center border-r-2 border-l-2 border-b-black shadow-2xl cursor-pointer font-bold  hover:bg-zinc-900 duration-200 ease-in hover:text-white ">INVIA</button>
          </section>


        </form>


      </div>
    </div>
  )
}
