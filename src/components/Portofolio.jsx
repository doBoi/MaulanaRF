/* eslint-disable react/prop-types */
import dafilmLaravel from '../assets/image/porto/Dafilm-laravel.png'
import dafilmReact from '../assets/image/porto/Dafilm-react.png'
import laracamp from '../assets/image/porto/Laracamp.png'
import motorreport from '../assets/image/porto/MotorReport.png'

export default function Portofolio() {
  const portos = [
    {
      name: "Dafilm Laravel",
      desc: 'Dafilm - Sebuah aplikasi website yang menampilkan data film dari API TMDb.',
      link: " https://github.com/doBoi/Dafilm.git",
      pict: dafilmLaravel
    },
    {
      name: "SomeJob",
      desc: 'Aplikasi untuk mempertemukan pencari jasa dan pekerja jarak jauh yang memiliki keterampilan dan pengalaman terbaik untuk membantu jasa yang diperlukan --project berhasil dibuat melalui kelas di BuildWith Angga--',
      link: "https://github.com/doBoi/somejob.git",
      pict: laracamp
    },
    {
      name: "Dafilm React",
      desc: 'Dafilm - Sebuah aplikasi website berbasis React yang menampilkan data film dari API TMDb.',
      link: "https://github.com/doBoi/DafilmReact.git",
      pict: dafilmReact

    },
    {
      name: "Motor Report",
      desc: 'Motor Report - Sebuah Website Aplikasi yang membantu mendata hasil pekerjaan pada divisi Motor ESP.',
      link: "https://github.com/doBoi/MotorReport.git",
      pict: motorreport

    },
  ]
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
