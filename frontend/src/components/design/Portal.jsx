const Portal = ({ videoSrc }) => {
    return (
      <div className="relative w-full h-full">
        {/* Video Container */}
        <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
  
          {/* Gradient Mask for Blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent lg:w-1/2"></div>
        </div>
      </div>
    );
  };
  
  export default Portal;