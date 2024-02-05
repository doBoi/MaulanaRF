export default function About() {
  return (
    <>
      <div id='About' className=" bg-zinc-500 pb-5 ">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl mt-5 underline underline-offset-8" >About</h1>
          <div className="flex flex-col lg:flex-row w-full mt-5">
            <div className="md:basis-1/2 font-mono lg:p-20 antialiased">
              <h1 className="text-5xl  mx-2 overline decoration-dashed">Me</h1>
              <p className="text-lg p-3 text-justify indent-10 leading-relax  tracking-tight mt-3">
                Saya Maul<span className="animate-pulse">ana Ridho Farhansyah</span> , seorang pekerja berusia 24 tahun, lulusan Sistem Informasi dari perguruan tinggi swasta pada tahun 2023. Saat ini, saya telah aktif bekerja, meskipun pekerjaan saat ini tidak sepenuhnya sejalan dengan jurusan kuliah saya. Dengan tekad yang kuat, saya bermaksud mengejar peluang karir yang lebih seimbang dengan pengetahuan dan keterampilan yang saya miliki. Saya percaya bahwa dedikasi saya akan membantu mencapai kesuksesan dan kontribusi yang berarti.
              </p>
            </div>
            <hr />
            <div className="md:basis-1/2 font-mono  p-10 md:p-20">
              <div className="flex flex-wrap justify-center md:justify-start">
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">Laravel</p>
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">React</p>
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">PHP</p>
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">Javascript</p>
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">Tailwind</p>
                <p className="w-auto border-double border-4 border-gray-400 rounded-lg p-2 font-extrabold text-lg m-1 ">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
