// Menu item icons component
const MenuIcon = ({ name, active }: { name: string; active: boolean }) => {
  const iconClass = active ? "text-white" : "text-[#A39DAC]";
  
  switch (name) {
    case 'Dashboard':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      );
    case 'Tasks':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      );
    case 'Wallets':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'Bulk Actions':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
        </svg>
      );
    case 'Tools':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14M5 9h14M5 15h14M5 21h14"/>
        </svg>
      );
    case 'Settings':
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function SidebarMenu() {
  const menuItems = [
    { name: 'Dashboard', active: true },
    { name: 'Tasks', active: false },
    { name: 'Wallets', active: false },
    { name: 'Bulk Actions', active: false },
    { name: 'Tools', active: false },
    { name: 'Settings', active: false },
  ];

  return (
    <nav className="space-y-2">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all
            ${item.active 
              ? 'bg-gradient-to-r from-[#D899F8] to-[#7E61E7] text-white font-semibold' 
              : 'text-[#A39DAC] hover:text-white hover:bg-white/5'
            }
          `}
        >
          {/* Icon */}
          <MenuIcon name={item.name} active={item.active} />
          
          {/* Menu Text */}
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </nav>
  );
}
