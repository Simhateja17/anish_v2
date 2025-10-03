import Image from "next/image";

interface ActivityItemProps {
  status: 'success' | 'failed' | 'listed';
  itemName: string;
  collection: string;
  amount: string;
  currency?: string;
  date: string;
  time: string;
}

export default function ActivityItem({ status, itemName, collection, amount, currency = 'SOL', date, time }: ActivityItemProps) {
  const statusConfig = {
    success: {
      text: 'Successfully Sold Item!',
      textColor: 'text-[#36CD7B]',
      amountColor: 'text-[#36CD7B]',
      icon: '✓'
    },
    failed: {
      text: 'Transaction Failed',
      textColor: 'text-[#E97072]',
      amountColor: 'text-[#E97072]',
      icon: '✗'
    },
    listed: {
      text: 'Item Listed',
      textColor: 'text-[#87C5FF]',
      amountColor: 'text-[#A39DAC]',
      icon: '📋'
    }
  };

  // Map collection names to their logo paths
  const collectionLogos: { [key: string]: string } = {
    'Mekaverse': '/mekaverse-avatar.png',
    'Doodles': '/doodles-avatar.png',
    'Azuki': '/mekaverse-avatar.png', // Using mekaverse as placeholder
    'BAYC': '/doodles-avatar.png', // Using doodles as placeholder
    'CloneX': '/mekaverse-avatar.png' // Using mekaverse as placeholder
  };

  const config = statusConfig[status];
  const logoPath = collectionLogos[collection] || '/mekaverse-avatar.png';

  return (
    <div className="bg-[#180930] rounded-lg p-3 space-y-2">
      {/* Item Name and Icon */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
            <Image 
              src={logoPath}
              alt={collection}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-white text-sm font-semibold">{itemName}</div>
            <div className="text-[#A39DAC] text-xs">{date} • {time}</div>
          </div>
        </div>
        <div className={`text-lg ${config.textColor}`}>{config.icon}</div>
      </div>

      {/* Status and Amount */}
      <div className="flex items-center justify-between">
        <span className={`text-xs ${config.textColor}`}>{config.text}</span>
        <span className={`text-sm font-bold ${config.amountColor}`}>
          {status === 'failed' ? '--' : `${amount} ${currency}`}
        </span>
      </div>
    </div>
  );
}
