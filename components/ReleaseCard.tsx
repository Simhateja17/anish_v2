import Image from "next/image";

interface ReleaseCardProps {
  collection: string;
  date: string;
  time: string;
  price: string;
  image?: string;
  avatar?: string;
  badge?: string;
  size?: string;
}

export default function ReleaseCard({ collection, date, time, price, image, avatar, badge, size }: ReleaseCardProps) {
  return (
    <div className="bg-[#180930] rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-40">
        {/* Background Image */}
        {image && (
          <Image 
            src={image} 
            alt={collection}
            fill
            className="object-cover"
          />
        )}
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 right-3 bg-[#7E61E7] px-3 py-1 rounded-md flex items-center gap-1.5 z-10">
            <span className="text-white text-xs font-semibold">{badge}</span>
            <span className="text-white text-xs font-bold">M</span>
          </div>
        )}
        
        {/* Avatar/Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {avatar ? (
            <div className="relative w-16 h-16">
              <Image 
                src={avatar} 
                alt={`${collection} avatar`}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full"></div>
            </div>
          )}
        </div>
        
        {/* Size Badge */}
        {size && (
          <div className="absolute bottom-3 left-3 bg-purple-500 px-2.5 py-1 rounded z-10">
            <span className="text-white text-xs font-bold">{size}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Collection Name */}
        <h3 className="text-white font-semibold text-base">{collection}</h3>
        
        {/* Date and Time */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-[#A39DAC]">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#A39DAC]">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{time}</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-white font-bold text-lg">{price}</div>
          <button className="bg-gradient-to-r from-[#D899F8] to-[#7E61E7] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            + Create Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
