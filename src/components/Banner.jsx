import profileBanner from "../assets/image/profilBanner.png";


export default function Banner() {
  return (
    <div id="Home" className="hero min-h-screen bg-base-200 -mt-14">
      <div className="hero-content flex-col lg:flex-row mt-8 md:ms-8">
        <div className="rounded-xl">
          <img src={profileBanner} className="max-w-xs md:max-w-sm shadow-gray-700 shadow-2xl " />
        </div>
        <div className="ms-4 max-w-lg">
          <h1 className="text-5xl font-bold">Hello I'am Maul</h1>
          <p className="py-6 antialiased text-justify font-semibold capitalize">Saya yang tertarik dengan Web Development, Namun hanya memiliki sedikit pengalaman, Saya harap bisa berkolaborasi dan ciptakan SESUATU yang luar biasa! </p>
        </div>
      </div>
    </div>
  )
}
