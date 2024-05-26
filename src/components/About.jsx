export default function About() {
  return (
    <>
      <div id='About' className="pb-5">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl mt-5 underline underline-offset-8" >About</h1>
          <div className="flex flex-col w-full">
            <div className="font-mono lg:p-20 p-5 antialiased">
              <p className="text-lg p-3 text-justify indent-10 leading-relax  tracking-tight mt-3">
                Saya Maulana Ridho Farhansyah, seorang pekerja berusia 24 tahun, lulusan Sistem Informasi dari perguruan tinggi swasta pada tahun 2023. Saat ini, saya telah aktif bekerja, meskipun pekerjaan saat ini tidak sepenuhnya sejalan dengan jurusan kuliah saya. Dengan tekad yang kuat, saya bermaksud mengejar peluang karir yang lebih seimbang dengan pengetahuan dan keterampilan yang saya miliki. Saya percaya bahwa dedikasi saya akan membantu mencapai kesuksesan dan kontribusi yang berarti.
              </p>
            </div>
            <div className="divider"></div>
            <div className="font-mono p-10 md:p-20">
              <div className="flex flex-wrap justify-center ">
                <div className="mockup-code">
                  <pre data-prefix="$"><code>What I Know</code></pre>
                  <pre data-prefix="1" className="text-primary "><code>PHP</code></pre>
                  <pre data-prefix="2" className="text-red-700"><code>Laravel</code></pre>
                  <pre data-prefix="3" className="text-warning"><code>Javascript</code></pre>
                  <pre data-prefix="4" className="text-blue-500"><code>React</code></pre>
                  <pre data-prefix="5" className="text-cyan-400"><code>Tailwind</code></pre>
                  <pre data-prefix="6" className="text-blue-700"><code>Bootstrap</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
