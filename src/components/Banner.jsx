import profileBanner from "../assets/image/profilBanner.png";


export default function Banner() {
  return (
    <div className="container md:m-10 mx-auto">
      <div className="md:flex md:flew-row md:place-items-center">
        <div className="md:basis-1/2 my-5 grid md:justify-items-end justify-items-center">
          <img className="bg-zinc-500 md:h-80 md:w-80 h-32 w-32 rounded-full" src={profileBanner} alt="" />
        </div>
        <div className=" md:basis-1/2  rounded-md grid ">
          <div className="text-3xl font-mono md:text-start text-center mx-2 md:m-2.5">
            <h1 className="animate-pulse">Hello,</h1>
            <h1 className="capitalize">I'am <span className="font-extrabold">maul</span></h1>
            <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae provident sapiente officia aspernatur doloremque est iste, rem nisi vero mollitia.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
