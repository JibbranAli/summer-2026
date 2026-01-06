"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';
import BrochureFormDialog from './BrochureFormDialog';

interface CourseCardProps {
  courseName: string;
  tagline: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  price: string;
  originalPrice?: string;
  paymentLink: string;
  brochurePdfUrl: string;
}

export default function CourseCard({
  courseName,
  tagline,
  image,
  price,
  originalPrice,
  paymentLink,
  brochurePdfUrl,
}: CourseCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="bg-white border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full rounded-lg w-full shadow-md md:shadow-none">
        {/* Red Top Section - Image Only */}
        {/* Mobile: Larger image area with full fill, Desktop: Standard */}
        <div className="bg-[#ff0000] h-[280px] md:min-h-[220px] relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover md:object-contain"
              style={{ 
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                borderWidth: '0px'
              }}
              priority
            />
          </div>
        </div>
        
        {/* White Bottom Section */}
        {/* Mobile: Professional spacing and typography, Desktop: Unchanged */}
        <div className="bg-white p-5 md:p-6 flex flex-col flex-grow min-h-[300px] md:min-h-0">
          {/* Course Name Heading */}
          <h3 className="text-[#ff0000] text-lg md:text-lg lg:text-xl font-bold mb-2 md:mb-3 leading-tight">
            {courseName}
          </h3>
          
          {/* Tagline - Mobile: Full text, Desktop: Line clamp */}
          <p className="text-gray-700 text-sm md:text-sm mb-5 md:mb-6 leading-relaxed md:line-clamp-3">
            {tagline}
          </p>
          
          <div className="mt-auto space-y-4 md:space-y-4">
            {/* Pricing */}
            <div className="flex items-baseline gap-2 flex-wrap">
              {originalPrice && (
                <span className="text-gray-500 line-through text-base md:text-base">
                  ₹{originalPrice}
                </span>
              )}
              <span className="text-2xl md:text-2xl font-bold text-[#ff0000]">
                ₹{price}
              </span>
              <span className="text-sm md:text-sm text-gray-600">+Taxes</span>
            </div>

            {/* Buttons - Mobile: Full width stacked with better spacing, Desktop: Side by side */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-3">
              <Button
                variant="outline"
                className="w-full md:flex-1 border-2 border-[#ff0000] text-[#ff0000] hover:bg-red-50 font-semibold h-14 md:h-11 text-base md:text-sm shadow-sm min-h-[48px]"
                onClick={() => setIsDialogOpen(true)}
              >
                <Download className="w-5 h-5 md:w-4 md:h-4 mr-2" />
                Download Brochure
              </Button>
              
              <Button
                className="w-full md:flex-1 bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-semibold h-14 md:h-11 text-base md:text-sm shadow-md min-h-[48px]"
                onClick={() => window.open('/application-form', '_blank')}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <BrochureFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        courseName={courseName}
        brochurePdfUrl={brochurePdfUrl}
      />
    </>
  );
}


