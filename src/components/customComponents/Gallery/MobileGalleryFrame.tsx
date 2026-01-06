import React, { useState, useEffect } from "react";
import { BentoGrid } from "react-bento";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface ImageCyclerProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
}

const ImageCycler: React.FC<ImageCyclerProps> = ({
  images,
  interval = 2000,
  transitionDuration = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Cycling image"
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          fetchPriority={currentIndex === 0 ? "high" : "auto"}
          decoding="async"
        />
      </AnimatePresence>
    </div>
  );
};

interface BentoItem {
  id: number;
  title: string;
  images: string[];
  width: number;
  height: number;
  interval: number;
  transitionDuration: number;
}

interface MobileGalleryProps {
  bentoItems: BentoItem[];
}

const MobileGalleryFrame: React.FC<MobileGalleryProps> = ({ bentoItems }) => {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto bg-black p-0 mb-8"> {/* Removed min-h-screen */}
      <BentoGrid
        items={bentoItems.map((item) => ({
          ...item,
          element: (
            <ImageCycler
              images={item.images}
              interval={item.interval}
              transitionDuration={item.transitionDuration}
            />
          ),
        }))}
        gridCols={8}
        rowHeight={60} /* Reduced row height for mobile */
        classNames={{
          container: "max-w-full mx-auto gap-1", // Reduced gap for mobile
          elementContainer:
            "bg-white rounded-none p-0.5 overflow-hidden hover:opacity-90 transition-opacity duration-300" // Reduced padding
        }}
      />

      <style jsx global>{`
        .bento-item {
          position: relative;
        }

        .bento-item::after {
          content: attr(data-title);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.5rem; /* Reduced padding for mobile */
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-item:hover::after {
          opacity: 1;
        }

        .bento-item img {
          transition: transform 0.3s ease;
        }

        .bento-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default MobileGalleryFrame;