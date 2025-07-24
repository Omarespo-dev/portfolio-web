export default function MyProject() {
  return (
    <div className="flex flex-wrap justify-center bg-zinc-100">

      {/* I MIEI PROGETTI*/}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-black">
          <h1 className="font-bold text-[18px]">I MIEI PROGETTI</h1>
        </section>
      </div>

      <div className="w-[80%]  justify-center p-[5px] flex-wrap flex-col mt-[30px] ">

        {/* SECTION 1 */}
        <div className="  flex mb-[50px]">
          {/* IMG O VIDEO */}
          <section className=" w-[50%] h-[300px] flex items-center justify-center ">
            <video
              src="/img/video1_1.mp4"
              className="w-full h-full object-cover rounded-4xl shadow-2xl/40 "
              autoPlay
              loop
              muted
            ></video>
          </section>

          {/* DESCRIZIONE  */}
          <section className=" w-[60%]  p-[30px]">
            <h1>01</h1>
            <h2>Crypto Screener Application</h2>
            <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          </section>
        </div>

        {/* <div className=" h-[300px] flex">

          
          <section className=" w-[60%] h-[300px] p-[30px]">
            <h1>01</h1>
            <h2>Crypto Screener Application</h2>
            <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          </section>

          
          <section className=" w-[50%] h-[300px] flex items-center justify-center ">
            <video
              src="/img/video1_1.mp4"
              className="w-full h-full object-cover rounded-4xl "
              autoPlay
              loop
              muted
            ></video>
          </section>

          
        </div>  */}



      </div>

    </div>
  )
}
