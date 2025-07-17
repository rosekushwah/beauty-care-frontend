import hero from '../assets/images/hero.png'

const Hero = () => {
    return (
        <>
            <section className="bg-purple-100 py-16 px-6 md:px-16">
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

    {/* ✅ Left Content Centered */}
    <div className="flex justify-center w-full md:w-1/2">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Glow Naturally
          <br className="hidden md:block" /> Shine Confidently
        </h1>
        <p className="mt-4 text-purple-400 text-base md:text-lg">
          Skincare that’s clean, gentle, and made to <br /> love your skin — naturally.
        </p>

        <button className="mt-6 bg-white border border-purple-400 text-purple-600 
          hover:bg-purple-200 hover:text-white 
          py-3 px-6 rounded-lg text-sm md:text-base 
          transition-all duration-300">
          Find Your Glow
        </button>
      </div>
    </div>

    {/* Right Side Images */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={hero}
        alt="Beauty Product"
        className="w-64 h-auto md:w-80 object-contain drop-shadow-lg transition-transform duration-400 hover:scale-110"
      />
    </div>
  </div>
</section>

            </>
    )
}

export default Hero