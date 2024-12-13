import { useState } from "react";

const ImageCarousel = () => {
  const images = [
    { id: 1, image: '/images/img3.jpg' },
    { id: 2, image: '/images/img2.jpg' },
    { id: 3, image: '/images/home3.jpg' },
    { id: 4, image: '/images/img4.jpg' },  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-full mx-auto mb-8">
      {/* Image Container */}
      <div className="h-screen overflow-hidden w-full">
        <div
          className="h-full flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move images horizontally
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.image} // Image path
                alt={`carousel-image-${index}`}
                className="w-full h-full object-cover rounded-lg"
                style={{ objectFit: "cover" }} // Ensure images are fully visible with proper aspect ratio
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev and Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
};

export default ImageCarousel;
