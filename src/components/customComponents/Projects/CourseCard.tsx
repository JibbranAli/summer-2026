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
      <Card className="bg-white border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full rounded-lg">
        {/* Red Top Section - Image Only */}
        <div className="bg-[#ff0000] min-h-[220px] relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
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
        <div className="bg-white p-6 flex flex-col flex-grow min-h-[260px]">
          {/* Course Name Heading */}
          <h3 className="text-[#ff0000] text-lg md:text-xl font-bold mb-3 min-h-[56px] flex items-start">
            {courseName}
          </h3>
          
          {/* Tagline - Fixed height for alignment */}
          <p className="text-gray-700 text-sm mb-6 leading-relaxed min-h-[60px] line-clamp-3">
            {tagline}
          </p>
          
          <div className="mt-auto space-y-4">
            {/* Pricing */}
            <div className="flex items-center gap-2 flex-wrap">
              {originalPrice && (
                <span className="text-gray-500 line-through text-base">
                  ₹{originalPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-[#ff0000]">
                ₹{price}
              </span>
              <span className="text-sm text-gray-600">+Taxes</span>
            </div>

            {/* Buttons - Side by Side */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-2 border-[#ff0000] text-[#ff0000] hover:bg-red-50 font-semibold h-11"
                onClick={() => setIsDialogOpen(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
              
              <Button
                className="flex-1 bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-semibold h-11"
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


