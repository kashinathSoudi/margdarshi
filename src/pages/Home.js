import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = ({ setCurrentPage, language }) => {
  const translations = {
    en: {
      title: 'MARGDARSHI',
      subtitle: 'Aapka Sachha Raasta',
      tagline: 'Your True Path to Academic Success',
      description: 'Empowering rural students with personalized guidance for their academic and professional journey',
      optionA: 'Explore Career & Academic Options',
      optionB: 'College Counseling & Predictor',
      optionADesc: 'Discover your ideal career path based on your skills, interests, and academic profile',
      optionBDesc: 'Predict eligible colleges and explore opportunities based on your exam scores',
      features: ['AI-Powered Guidance', 'Expert Counseling', 'Real-Time Support'],
    },
    hi: {
      title: 'मार्गदर्शी',
      subtitle: 'आपका सच्चा रास्ता',
      tagline: 'शैक्षणिक सफलता के लिए आपके सही रास्ते',
      description: 'ग्रामीण विद्यार्थियों को वो शैक्षणिक और पेशेवर तलाश के लिए सत्विध्ध ही मार्गदर्शन प्रदान करता हूं।',
      optionA: 'करियर और शैक्षणिक विकल्प खोजें',
      optionB: 'कॉलेज सलाह और पूर्वानुमान',
      optionADesc: 'अपने कौशल और शैक्षणिक पत्र के आधार पर अवसरे संभव करियर पाथ की खोज करें',
      optionBDesc: 'अपने परीक्षा कंक और पसंद के आधार पर संबंधित कॉलेज की पथी लघु करें',
      features: ['AI-संचालित मार्गदर्शन', 'अति सलाह', 'तत्काल सहायता'],
    },
  };

  const t = translations[language] || translations['en'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6">
            <span className="text-5xl">✨</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {t.title}
        </h1>
        <p className="text-2xl text-gray-700 mb-2 font-semibold">{t.subtitle}</p>
        <p className="text-xl text-gray-600 mb-6">{t.tagline}</p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">{t.description}</p>

        {/* Features Row */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {t.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700">
              <Sparkles size={20} className="text-green-500" />
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card A: Career Exploration */}
          <div
            onClick={() => setCurrentPage('career')}
            className="glass-effect rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-green-200"
          >
            <div className="mb-6 text-5xl group-hover:scale-110 transition-transform">📚</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
              {t.optionA}
            </h2>
            <p className="text-gray-600 mb-6">{t.optionADesc}</p>
            <div className="flex items-center justify-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Card B: College Counseling */}
          <div
            onClick={() => setCurrentPage('college')}
            className="glass-effect rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-blue-200"
          >
            <div className="mb-6 text-5xl group-hover:scale-110 transition-transform">🎓</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {t.optionB}
            </h2>
            <p className="text-gray-600 mb-6">{t.optionBDesc}</p>
            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 p-8 glass-effect rounded-xl max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm">
            ✨ <span className="font-semibold">Margdarshi</span> is built specifically for rural students to navigate their academic and career journey with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
