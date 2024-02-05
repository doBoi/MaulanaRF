import dafilmLaravel from '../assets/image/porto/Dafilm-laravel.png'
import dafilmReact from '../assets/image/porto/Dafilm-react.png'
import laracamp from '../assets/image/porto/Laracamp.png'
import motorreport from '../assets/image/porto/MotorReport.png'
export default function porto() {
  const datas = [
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
  return datas
}
