import React from 'react';
import { Home, BookOpen, GraduationCap, Heart } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, language, translations }) => {
  const t = translations[language] || translations['en'];

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'career', label: 'Career Path', icon: BookOpen },
    { id: 'college', label: 'College Predictor', icon: GraduationCap },
    { id: 'wellbeing', label: 'Well-being', icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-40 glass-effect shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">✦</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xs text-gray-600">{t.subtitle}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
