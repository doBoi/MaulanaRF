import logo from "../assets/image/DB.svg"
export default function Navigation() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#Home" className="hover:underline">Home</a> </li>
            <li><a href="#About" className="hover:underline">About</a> </li>
            <li><a href="#Portofolio" className="hover:underline">Portofolio</a> </li>
            <li><a href="#Social" className="hover:underline">Social</a> </li>
          </ul>
        </div>
        {/* <img className="w-16 h-16 -mr-5" src={logo} alt="logoMaul" /> */}
        <a className="btn btn-ghost text-xl">Maulana RF</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#Home" className="hover:underline">Home</a> </li>
          <li><a href="#About" className="hover:underline">About</a> </li>
          <li><a href="#Portofolio" className="hover:underline">Portofolio</a> </li>
          <li><a href="#Social" className="hover:underline">Social</a> </li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
    // <nav className="sticky top-0 container md:mx-auto py-2 flex flex-row justify-between font-mono text-lg">
    //   <div className="basis-1/2 -my-4 sm:mx-3">
    //     <img className="h-20  w-20 inline -me-5" src={logo} alt="logoMaul" />
    //     <a className="md:text-2xl text-sm" href="https://github.com/doBoi"><span className="font-extrabold"> Maul</span><span className="font-thin">ana RF</span></a>
    //   </div>
    //   <div className="basis-1/2 ">
    //     <ul className="md:flex hidden flex-row justify-end gap-x-4 transition ease-in-out duration-300">
    //       <li><a href="#Home" className="hover:underline">Home</a> </li>
    //       <li><a href="#About" className="hover:underline">About</a> </li>
    //       <li><a href="#Portofolio" className="hover:underline">Portofolio</a> </li>
    //       <li><a href="#Contact" className="hover:underline">Contact</a> </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}
