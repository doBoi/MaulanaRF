import Github from "../assets/image/Github.svg";
import facebook from "../assets/image/facebook.svg";
import Instagram from "../assets/image/Instagram.svg";
import LinkedIn from "../assets/image/Linkedin.svg";
import X from "../assets/image/x.png";

export default function Social() {
  return (
    <div id='Social' className="h-screen">
      <div className="container mx-auto py-2 h-full">
        <h1 className="text-3xl text-center underline underline-offset-2 font-semibold">Social</h1>
        <div className='flex md:flex-row flex-wrap justify-center items-center gap-12 h-full mb-5'>
          <a href="https://github.com/doBoi">
            <img className="mask mask-squircle w-28 h-auto p-3" src={Github} />
          </a>

          <a href="https://facebook.com/m.tiadatara/">
            <img className="mask mask-squircle w-28 h-auto p-3" src={facebook} />
          </a>

          <a href="https://www.instagram.com/maaul13/">
            <img className="mask mask-squircle w-28 h-auto p-3" src={Instagram} />
          </a>

          <a href="www.linkedin.com/in/marifa13">
            <img className="mask mask-squircle w-28 h-auto p-3" src={LinkedIn} />
          </a>

          <a href="https://twitter.com/maaul13">
            <img className="mask mask-squircle w-28 h-auto p-3" src={X} />
          </a>
        </div>
      </div>
    </div >
  )
}
