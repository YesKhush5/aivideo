
const Hero = () => {
  return (
    <>
      <section
        className="text-center"
        data-scroll-magic-target="phoneContainer"
      >
        <h1 className="lg:w-2/3 text-3xl md:text-[56px] font-bold leading-none mx-auto">
          Ai for all Video Edits
        </h1>
        <div
          className="flex justify-center ml-[-8.5rem] mb-6 my-2"
          id="toggle-animation"
        >
          <p className="md:text-2xl text-sm pr-1">You get features like</p>
          <div className="cubespinner animate-flipper pb-2">
            <div className="face1 w-32 text-sm md:text-2xl md:w-64">
            Auto-Editing 
            </div>
            <div className="face2 w-32 text-sm md:text-2xl md:w-64">
            Object Recognition
            </div>
            <div className="face3 w-32 text-sm md:text-2xl md:w-64">
            Automatic Subtitling
            </div>
          </div>
        </div>
        <a
          target="_blank"
          data-controller="download-link"
          href="#"
          className="bg-red-500 text-white text-sm md:text-xl hover:bg-red-700 hover:text-sf60 border border-sf60 py-3 px-6 rounded-full inline-block"
        >
          Start Free Trial
        </a>
        
      </section>
      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
          }

          30% {
            transform: rotateX(120deg);
          }

          60% {
            transform: rotateX(240deg);
          }

          100% {
            transform: rotateX(360deg);
          }
        }
        .animate-flipper {
          animation: flip 4s ease-in-out infinite;
        }
        .cubespinner {
          transform-style: preserve-3d;
          transform-origin: 40px 40px 0;
          text-align: left;
        }
        .cubespinner div {
          position: absolute;
          height: 5rem;
          text-align: left;
          font-weight: 600;
        }
        .cubespinner .face1 {
          color: #fc7a69;
          transform: translateZ(20px);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(20px);
          -moz-transform: translateZ(20px);
          -ms-transform: translateZ(20px);
          -o-transform: translateZ(20px);
        }
        .cubespinner .face2 {
          color: #fc7a69;
          transform: rotateX(120deg) translateZ(20px);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: rotateX(120deg) translateZ(20px);
          -moz-transform: rotateX(120deg) translateZ(20px);
          -ms-transform: rotateX(120deg) translateZ(20px);
          -o-transform: rotateX(120deg) translateZ(20px);
        }
        .cubespinner .face3 {
          color: #fc7a69;
          transform: rotateX(240deg) translateZ(20px);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: rotateX(240deg) translateZ(20px);
          -moz-transform: rotateX(240deg) translateZ(20px);
          -ms-transform: rotateX(240deg) translateZ(20px);
          -o-transform: rotateX(240deg) translateZ(20px);
        }
      `}</style>
    </>
  );
};

export default Hero;
