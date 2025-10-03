import Image from "next/image";

export default function BalanceStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Total SOL */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/solana.png"
              alt="Solana logo"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-[#A39DAC] text-xs">Total SOL</div>
        </div>
        <div className="text-white text-2xl font-bold">12.211</div>
      </div>

      {/* Total ETH */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/Etherium.png"
              alt="Ethereum logo"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-[#A39DAC] text-xs">Total ETH</div>
        </div>
        <div className="text-white text-2xl font-bold">12.211</div>
      </div>
    </div>
  );
}
