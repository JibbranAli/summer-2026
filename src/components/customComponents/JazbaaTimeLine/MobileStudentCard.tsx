import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';


interface StudentProfileCardProps {
  linkedinUrl: string;
  studentName: string;
  role: string;
  companyLogoUrl?: string;
  profileImage: string;
}

const StudentMobileCard: React.FC<StudentProfileCardProps> = ({
  linkedinUrl,
  studentName,
  role,
  profileImage,
}) => {
  return (
    <Card className="bg-white p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-auto sm:h-24 relative overflow-visible">
      {/* Left side - Student Image */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 sm:w-8 sm:h-8 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100">
          <img
            src={profileImage} // Dynamic LinkedIn URL from props
            alt={`Profile of ${studentName}`} // Dynamic alt text - more accessible
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-grow flex flex-col justify-between pr-2 md:pr-0 pt-1 md:pt-0 pb-6 md:pb-0">
        {/* Top row with name */}
        <div className="flex justify-between items-start">
          <h3 className="text-xs sm:text-sm font-semibold text-[#ff0000] truncate flex-1 pr-2 md:pr-2">
            {studentName} {/* Dynamic Student Name from props */}
          </h3>
        </div>

        {/* Company section */}
        <div className="flex flex-row relative pr-8 md:pr-0">
            <div className='min-w-[10px]'>
          <p className="text-[8px] w-full sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
            {role.length < 17 ? role + '.'.repeat(16 - role.length) :  role.slice(0, 17)}
          </p>
          </div>
        </div>
      </div>

      {/* Badge - positioned at bottom right corner for mobile, top right for desktop */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 md:top-0.5 md:right-0.5 md:bottom-auto z-10">
        <Badge
          variant="outline"
          className="flex items-center gap-1 hover:bg-blue-50 cursor-pointer text-[8px] sm:text-xs bg-white shadow-sm"
        >
          <Linkedin className="w-2 h-2 sm:w-3 sm:h-3" />
        </Badge>
      </a>
    </Card>
  );
};

export default StudentMobileCard;