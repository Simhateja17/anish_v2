export default function RenewalCard() {
  return (
    <div className="bg-[url('/gradient-card.png')] bg-cover bg-center rounded-lg p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
      </div>

      <div className="relative space-y-3">
        {/* Calendar Icon */}
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xl">
          📅
        </div>

        {/* Days Till Renew */}
        <div>
          <div className="text-white/80 text-xs">Next Renewal</div>
          <div className="text-white text-2xl font-bold">21 Days</div>
          <div className="text-white/80 text-xs">till next renew</div>
        </div>

        {/* Price Tag */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <span className="text-white text-sm">♦</span>
          <span className="text-white font-semibold text-sm">0.2 per month</span>
        </div>
      </div>
    </div>
  );
}
