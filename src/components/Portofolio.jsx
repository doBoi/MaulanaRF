/* eslint-disable react/prop-types */
export default function Portofolio({ portos }) {
  return (
    <div id='Portofolio' className="container h-full mx-auto lg:pb-20">
      <div>

        <h1 className="text-center my-5 text-3xl font-bold underline underline-offset-2">Portofolio</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-items-center">
        {/* card */}
        {portos.map((item) => (
          <div key={item.name} className="card w-80 shadow-xl image-full">
            <figure><img src={item.pict} alt={item.name} /></figure>
            <div className="card-body ">
              <div className="collapse bg-transparent">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-center underline font-medium">
                  {item.name}
                </div>
                <div className="collapse-content">
                  <p>{item.desc}</p>
                  <button className="btn btn-active btn-ghost rounded-md mt-2"><a key={item.link} href={item.link}>Github</a></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

