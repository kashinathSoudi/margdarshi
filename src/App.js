import React, { useState } from 'react';
import Home from './pages/Home';
import CareerExploration from './pages/CareerExploration';
import CollegeCounseling from './pages/CollegeCounseling';
import WellbeingHub from './pages/WellbeingHub';
import ChatBot from './components/ChatBot';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'MARGDARSHI',
      subtitle: 'Aapka Sachha Raasta',
      home: 'Home',
    },
    hi: {
      title: 'मार्गदर्शी',
      subtitle: 'आपका सच्चा रास्ता',
      home: 'होम',
    },
    mr: {
      title: 'मार्गदर्शी',
      subtitle: 'तुमचा सच्चा मार्ग',
      home: 'होम',
    },
    ta: {
      title: 'மார்க்தர்ஷி',
      subtitle: 'உங்கள் உண்மையான பாதை',
      home: 'வீடு',
    },
    te: {
      title: 'మార్గదర్శి',
      subtitle: 'మీ నిజమైన మార్గం',
      home: 'హోమ్',
    },
    kn: {
      title: 'ಮಾರ್ಗದರ್ಶಕ',
      subtitle: 'ನಿಮ್ಮ ನಿಜವಾದ ಮಾರ್ಗ',
      home: 'ಮುಖಪುಟ',
    },
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} language={language} />;
      case 'career':
        return <CareerExploration setCurrentPage={setCurrentPage} language={language} />;
      case 'college':
        return <CollegeCounseling setCurrentPage={setCurrentPage} language={language} />;
      case 'wellbeing':
        return <WellbeingHub setCurrentPage={setCurrentPage} language={language} />;
      default:
        return <Home setCurrentPage={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Header with Language Switcher */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        language={language}
        translations={translations}
      />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      {/* Page Content */}
      <main className="relative">
        {renderPage()}
      </main>

      {/* Floating ChatBot */}
      <ChatBot language={language} />
    </div>
  );
};

export default App;
