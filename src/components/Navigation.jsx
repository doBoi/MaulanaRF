import logo from "../assets/image/DB.svg"
export default function Navigation() {
  return (
    <nav className="sticky top-0 container md:mx-auto py-2 flex flex-row justify-between font-mono text-lg">
      <div className="basis-1/2 -my-4 sm:mx-3">
        <img className="h-20  w-20 inline -me-5" src={logo} alt="logoMaul" />
        <a className="md:text-2xl text-sm" href="https://github.com/doBoi"><span className="font-extrabold"> Maul</span><span className="font-thin">ana RF</span></a>
      </div>
      <div className="basis-1/2 ">
        <ul className="md:flex hidden flex-row justify-end gap-x-4 transition ease-in-out duration-300">
          <li><a href="#Home" className="hover:underline">Home</a> </li>
          <li><a href="#About" className="hover:underline">About</a> </li>
          <li><a href="#Portofolio" className="hover:underline">Portofolio</a> </li>
          <li><a href="#Contact" className="hover:underline">Contact</a> </li>
        </ul>
      </div>
    </nav>
  )
}
