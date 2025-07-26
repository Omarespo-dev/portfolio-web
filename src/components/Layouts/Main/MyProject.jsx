import { projectDataNormal } from "../../../../data/ProjectData";

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

        {projectDataNormal.map(pro => (
          <div className="flex mb-[50px]" key={pro.id}>
            {pro.number === "02" || pro.number === "04" ? (
              <>
                <section className="w-[60%] h-[300px] p-[30px]">
                  <h1>{pro.number}</h1>
                  <h2>{pro.title}</h2>
                  <p>{pro.description}</p>
                </section>
                <section className="w-[50%] h-[350px] flex items-center justify-center border-2 border-zinc-400 rounded-2xl shadow-2xl/20">
                  <video
                    src={pro.video}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                  ></video>
                </section>
              </>
            ) : (
              <>
                <section className="w-[50%] h-[350px] flex items-center justify-center rounded-2xl  border-2 border-zinc-400 shadow-2xl/20" >
                  <video
                    src={pro.video}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                  ></video>
                </section>
                <section className="w-[60%] p-[30px]">
                  <h1>{pro.number}</h1>
                  <h2>{pro.title}</h2>
                  <p>{pro.description}</p>
                  <a href={pro.linkGit}>vai</a>
                </section>
              </>
            )}
          </div>
        ))}





      </div >

    </div >
  )
}
