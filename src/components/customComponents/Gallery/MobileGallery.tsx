import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MobileGalleryFrame from "./MobileGalleryFrame";
import { bentoItems1, bentoItems2 ,bentoItems3} from "./MobileGalleryData";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const MobileGallery = () => {
  const swiperConfig = {
    modules: [Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
  };

  return (
    <div className="w-full max-h-[100px]">
      {/* First Gallery */}
      <div className="mb-0">
        <Swiper {...swiperConfig}>

            <SwiperSlide>
              <MobileGalleryFrame bentoItems={bentoItems1} />
             
            </SwiperSlide>
        
            <SwiperSlide>

              <MobileGalleryFrame bentoItems={bentoItems2} />
            </SwiperSlide>
            <SwiperSlide>

              <MobileGalleryFrame bentoItems={bentoItems3} />
            </SwiperSlide>
            
        </Swiper>
      </div>

  
    </div>
  );
};

export default MobileGallery;