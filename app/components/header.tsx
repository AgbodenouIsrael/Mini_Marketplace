import { Menu, Bell, User, LayoutDashboard, UserCircle, Briefcase, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function Header({ currentPage, onNavigate, isAuthenticated = false, onLogout }: HeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[#1D4ED8] rounded-lg flex items-center justify-center">
                <span className="text-white">M</span>
              </div>
              <span className="font-semibold text-gray-900">Mini Marketplace</span>
            </button>
            
            <nav className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id 
                      ? 'text-[#1D4ED8]' 
                      : 'text-[#6B7280] hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="hidden md:block text-[#6B7280] hover:text-gray-900 transition-colors"
                >
                  Connexion
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="btn-primary"
                >
                  Inscription
                </button>
              </>
            ) : (
              <>
                {/* Notification Icon */}
                <button 
                  onClick={() => onNavigate('notifications')}
                  className="relative p-2 text-[#6B7280] hover:text-gray-900 transition-colors"
                >
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#F97316] rounded-full"></span>
                </button>

                {/* Profile Menu */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowProfileMenu(true)}
                    onMouseLeave={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F3F4F6] transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#1D4ED8] rounded-full flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                  </button>

                  {showProfileMenu && (
                    <div
                      onMouseEnter={() => setShowProfileMenu(true)}
                      onMouseLeave={() => setShowProfileMenu(false)}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-2"
                    >
                      <button
                        onClick={() => {
                          onNavigate('dashboard');
                          setShowProfileMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-[#F3F4F6] transition-colors text-[#6B7280] hover:text-gray-900"
                      >
                        <LayoutDashboard size={18} />
                        <span>Tableau de bord</span>
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('profile');
                          setShowProfileMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-[#F3F4F6] transition-colors text-[#6B7280] hover:text-gray-900"
                      >
                        <UserCircle size={18} />
                        <span>Profil</span>
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('my-services');
                          setShowProfileMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-[#F3F4F6] transition-colors text-[#6B7280] hover:text-gray-900"
                      >
                        <Briefcase size={18} />
                        <span>Mes Services</span>
                      </button>
                      <div className="border-t border-[#E5E7EB] my-2"></div>
                      <button
                        onClick={() => {
                          if (onLogout) onLogout();
                          setShowProfileMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-[#F3F4F6] transition-colors text-[#F97316] hover:text-[#EA580C]"
                      >
                        <LogOut size={18} />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}