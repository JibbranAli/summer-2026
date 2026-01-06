"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import BrochureFormDialog from './BrochureFormDialog';

interface CourseCardProps {
  title: string;
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
  title,
  image,
  price,
  originalPrice,
  paymentLink,
  brochurePdfUrl,
}: CourseCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="bg-white border-2 border-gray-200 hover:border-red-500 transition-all duration-300 overflow-hidden flex flex-col h-full">
        <div className="relative w-full aspect-video bg-gray-100">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-full object-contain p-4"
            priority
          />
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          
          <div className="mt-auto space-y-4">
            {/* Pricing */}
            <div className="flex items-center gap-2">
              {originalPrice && (
                <span className="text-gray-500 line-through text-lg">
                  ₹{originalPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-red-600">
                ₹{price}
              </span>
              <span className="text-sm text-gray-600">+Taxes</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open(paymentLink, '_blank')}
              >
                Pay Now
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => setIsDialogOpen(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <BrochureFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        courseName={title}
        brochurePdfUrl={brochurePdfUrl}
      />
    </>
  );
}

