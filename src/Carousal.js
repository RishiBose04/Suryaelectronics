import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselComponent = () => {
  return (
    <Carousel
        className="carousel-container"
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
    >
      <div>
        <img src="https://picsum.photos/id/1015/1200/500" alt="Image 1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/1018/1200/500" alt="Image 2" />
      </div>
      <div>
        <img src="https://picsum.photos/id/1019/1200/500" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;