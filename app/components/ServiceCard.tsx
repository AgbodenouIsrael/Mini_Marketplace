import { MapPin, Tag } from 'lucide-react';

interface ServiceCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
  location: string;
  provider: string;
  onViewDetails: (id: number) => void;
}

export function ServiceCard({
  id,
  image,
  title,
  description,
  price,
  category,
  location,
  provider,
  onViewDetails,
}: ServiceCardProps) {
  return (
    <div
      className="card hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onViewDetails(id)}
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <Tag size={16} className="text-[#1D4ED8]" />
        <span className="text-sm text-[#1D4ED8]">{category}</span>
      </div>
      
      <h3 className="mb-2 text-gray-900 line-clamp-2">{title}</h3>
      <p className="text-[#6B7280] mb-4 text-sm line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[#6B7280] text-sm">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="bg-[#F97316] text-white px-3 py-1 rounded-lg text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="pt-3 border-t border-[#E5E7EB]">
        <p className="text-sm text-[#6B7280]">
          Par <span className="font-medium text-gray-900">{provider}</span>
        </p>
      </div>
    </div>
  );
}

