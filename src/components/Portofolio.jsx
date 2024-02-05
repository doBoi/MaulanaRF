/* eslint-disable react/prop-types */
export default function Portofolio({ portos }) {
  return (
    <div id='Portofolio' className="container h-full mx-auto lg:pb-20">
      <div>
        <h1 className="text-center my-5 text-3xl font-bold underline underline-offset-2">Portofolio</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 justify-center">
        {/* card */}
        {portos.map((item) => (
          <a key={item.link} href={item.link}>
            <div className="p-4 rounded-md h-full border-4 border-black ">
              <img className="m-auto rounded-lg" src={item.pict} alt="" />
              <h1 className="text-lg font-bold ">{item.name}</h1>
              <p className="antialiased"> {item.desc}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}
