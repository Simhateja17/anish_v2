import Image from "next/image";

export default function TransactionStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Included Transactions */}
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/included_transactions_bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#180930]/70"></div>
        <div className="relative p-4">
          <div className="flex items-center justify-between text-[#D5CEED] text-xs mb-2">
            <span>Included Transactions</span>
            <Image
              src="/included_transactions.png"
              alt="Included transactions"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
              priority
            />
          </div>
          <div className="text-white text-3xl font-bold">21</div>
        </div>
      </div>

      {/* Reverted Transactions */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="flex items-center justify-between text-[#A39DAC] text-xs mb-2">
          <span>Reverted Transactions</span>
          <Image
            src="/reverted_transactions.png"
            alt="Reverted transactions"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
            priority
          />
        </div>
        <div className="text-white text-3xl font-bold">21</div>
      </div>
    </div>
  );
}
