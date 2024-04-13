


const Swipper = () => {
  return (

    <div className=" carousel w-full h-96 my-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Xt8v5B3/Residential-real-estate.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4">NORTH YORKSHIRES FINEST LUXURY CARE HOMES</p>
          <p>Two national award-winning care homes in the heart of North Yorkshire rated as <br /> OUTSTANDING by the independent Care Quality Commission of England.</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/7gR65sY/hero-real-estate-facts-trends.jpg" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Find Your Perfect Retreat</p>
          <p>Escape to your own slice of paradise with our diverse selection of residential homes, each <br />offering a unique blend of charm and tranquility.</p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/0Q6Wdhz/Real-estate-smartworld.jpg" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Discover Your Dream Home</p>
          <p>Unlock the door to your ideal living space with our range of residential homes, where <br />comfort, elegance, and functionality converge seamlessly.</p>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Zzqh3G5/2312-hd-trends-main-tower-ridge.png" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Urban Oasis Awaits</p>
          <p>Experience the best of city living without compromising on comfort. Explore our urban <br />residential homes designed for modern lifestyles.</p>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/SQxMfff/Feature-Image-4.jpg" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Where Memories Are Made</p>
          <p>Create a lifetime of cherished moments in a home that reflects your personality and <br /> aspirations. Find your perfect match in our residential portfolio.</p>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/xHt1qTD/how-to-invest-in-real-estate-in-2024.jpg" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Secluded Serenity Beckons</p>
          <p>Escape the noise and embrace peace and quiet in one of our secluded residential <br /> homes, where nature meets modern luxury.</p>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Zh6Wt5d/1200x800.jpg" className="w-full"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-14 left-0 right-0 text-center text-white">
          <p className="font-bold text-3xl mb-4 uppercase">Live Your Best Life</p>
          <p>Experience the epitome of refined living with our portfolio of residential properties, <br /> where every moment is an opportunity to thrive and flourish.</p>
        </div>
      </div>
    </div>

  );
};

export default Swipper;