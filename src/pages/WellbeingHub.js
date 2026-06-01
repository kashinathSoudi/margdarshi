import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Home, AlertCircle, CheckCircle } from 'lucide-react';

const WellbeingHub = ({ setCurrentPage, language }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const translations = {
    en: {
      title: 'Sarthi Support Hub',
      subtitle: 'Your Safe Space for Mental & Emotional Support',
      selectIssue: 'Select an issue you\'re facing',
      continue: 'Continue',
      chat: 'Chat with Counselor',
      resources: 'Helpful Resources',
      back: 'Back',
      send: 'Send',
      typing: 'Counselor is typing...',
    },
    hi: {
      title: 'सार्थी सपोर्ट हब',
      subtitle: 'मानसिक और भावनात्मक सहायता के लिए आपकी सुरक्षित जगह',
      selectIssue: 'अपनी समस्या चुनें',
      continue: 'जारी रखें',
      chat: 'सलाहकार के साथ बातचीत',
      resources: 'मददगार संसाधन',
      back: 'वापस',
      send: 'भेजें',
      typing: 'सलाहकार टाइप कर रहा है...',
    },
  };

  const t = translations[language] || translations['en'];

  const issues = [
    {
      id: 'academic-stress',
      title: 'Academic Stress & Pressure',
      icon: '📚',
      description: 'Feeling overwhelmed by studies, exams, or expectations',
      resources: [
        { title: 'Stress Management Techniques', link: '#' },
        { title: 'Time Management for Students', link: '#' },
        { title: 'Meditation Apps (Free)', link: '#' },
      ],
    },
    {
      id: 'family-support',
      title: 'Lack of Family Support',
      icon: '👨‍👩‍👧',
      description: 'Family doesn\'t understand my goals or dreams',
      resources: [
        { title: 'Communication Tips with Parents', link: '#' },
        { title: 'Government Schemes for Rural Students', link: '#' },
        { title: 'Student Helpline Numbers', link: '#' },
      ],
    },
    {
      id: 'financial-anxiety',
      title: 'Financial Anxiety',
      icon: '💰',
      description: 'Worried about fees, resources, or financial support',
      resources: [
        { title: 'National Scholarship Portal (NSP)', link: 'https://scholarships.gov.in' },
        { title: 'State-wise Scholarship Schemes', link: '#' },
        { title: 'Education Loans Guide', link: '#' },
        { title: 'Free Learning Platforms', link: '#' },
      ],
    },
    {
      id: 'motivation',
      title: 'Lack of Motivation',
      icon: '⚡',
      description: 'Feeling demotivated or lost about future path',
      resources: [
        { title: 'Success Stories of Rural Students', link: '#' },
        { title: 'Career Motivation Videos', link: '#' },
        { title: 'Goal Setting Workbook', link: '#' },
      ],
    },
    {
      id: 'mental-health',
      title: 'Mental Health Issues',
      icon: '🧠',
      description: 'Anxiety, depression, or emotional distress',
      resources: [
        { title: 'Mental Health Helpline (AASRA): 9820466726', link: '#' },
        { title: 'iCall Suicide Prevention: 9152987821', link: '#' },
        { title: 'Free Online Counseling Services', link: '#' },
        { title: 'Mindfulness & Meditation', link: '#' },
      ],
    },
    {
      id: 'social-pressure',
      title: 'Social Pressure & Peer Issues',
      icon: '👥',
      description: 'Dealing with bullying, peer pressure, or social isolation',
      resources: [
        { title: 'How to Handle Peer Pressure', link: '#' },
        { title: 'Building Confidence', link: '#' },
        { title: 'Anti-Bullying Resources', link: '#' },
      ],
    },
  ];

  const mockResponses = {
    'academic-stress': [
      'I understand you\'re feeling stressed about academics. This is very common among students, especially in rural areas with limited resources.',
      'Here are some practical steps: Break your studies into smaller chunks, take regular breaks using the Pomodoro Technique, and practice self-care.',
      'Remember, it\'s okay to struggle sometimes. Focus on progress, not perfection. Would you like to discuss specific subjects or exams?',
    ],
    'family-support': [
      'It\'s tough when family doesn\'t understand your aspirations. Many rural students face this challenge.',
      'Try to communicate your goals clearly. Involve family in your achievement journey - share your progress and successes with them.',
      'Document your efforts and results. Sometimes seeing tangible progress helps families understand the importance of your education.',
      'Would you like tips on how to approach this conversation with your family?',
    ],
    'financial-anxiety': [
      'Financial concerns are valid, and you\'re not alone. Many rural students navigate this challenge successfully.',
      'First, explore all available scholarships through NSP (scholarships.gov.in), state-specific schemes, and institution-based aid.',
      'Consider free learning platforms like NPTEL, Khan Academy, and YouTube for supplementary learning to reduce coaching costs.',
      'Many colleges offer fee waivers or installment plans. Would you like information about specific scholarship schemes?',
    ],
    'motivation': [
      'Losing motivation is a sign you need to reconnect with your goals and purpose.',
      'Let\'s think about what inspired you initially. What was your dream when you started this journey?',
      'Try setting smaller, achievable milestones instead of focusing only on the big goal. Celebrate small wins!',
      'Remember: Your effort today is shaping your tomorrow. Would you like to talk about specific goals?',
    ],
    'mental-health': [
      'I hear you. Mental health is just as important as physical health, and seeking support is a sign of strength.',
      'If you\'re experiencing severe anxiety or depression, please reach out to professional help: iCall (9152987821) or AASRA (9820466726).',
      'In the meantime, practice basic self-care: adequate sleep, physical activity, healthy eating, and connecting with supportive people.',
      'It\'s okay to not be okay sometimes. You deserve support and care. Would you like to talk more about what you\'re experiencing?',
    ],
    'social-pressure': [
      'Peer pressure and social challenges can be really tough, especially in your teen years.',
      'Remember: Your worth is not determined by what others think. Focus on your own values and goals.',
      'Build a supportive circle of friends who encourage you, and don\'t hesitate to distance yourself from toxic influences.',
      'Talk to a trusted adult - teacher, counselor, or mentor - about what you\'re facing. Would that help?',
    ],
  };

  const handleIssueSelect = (issue) => {
    setSelectedIssue(issue);
    setMessages([
      {
        id: 1,
        text: `I see you're dealing with: ${issue.title}. I\'m here to help. Can you tell me a bit more about what you\'re experiencing?`,
        sender: 'counselor',
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() && selectedIssue) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate counselor response
      setTimeout(() => {
        const responses = mockResponses[selectedIssue.id] || mockResponses['mental-health'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomResponse,
            sender: 'counselor',
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    }
  };

  if (!selectedIssue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-pink-600 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <Home size={20} />
            Back to Home
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <Heart size={36} className="text-pink-600" />
              {t.title}
            </h1>
            <p className="text-gray-600 text-lg">{t.subtitle}</p>
          </div>

          {/* Issues Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {issues.map((issue) => (
              <div
                key={issue.id}
                onClick={() => handleIssueSelect(issue)}
                className="glass-effect rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all border-2 border-pink-200 hover:border-pink-500 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{issue.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {issue.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{issue.description}</p>
                <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-lg font-semibold text-sm group-hover:bg-pink-500 group-hover:text-white transition-all">
                  {t.continue} →
                </div>
              </div>
            ))}
          </div>

          {/* Important Info */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Crisis Support Available 24/7</h3>
                <p className="text-red-700">
                  If you\'re in immediate distress, please reach out to:
                  <br />
                  <strong>iCall Suicide Prevention Helpline: 9152987821</strong>
                  <br />
                  <strong>AASRA: 9820466726</strong>
                  <br />
                  <strong>Vandrevala Foundation: 9999 666 555</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => setSelectedIssue(null)}
          className="flex items-center gap-2 text-pink-600 font-semibold mb-6 hover:gap-3 transition-all"
        >
          <Home size={20} />
          Back to Issues
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <span className="text-4xl">{selectedIssue.icon}</span>
          {selectedIssue.title}
        </h1>
        <p className="text-gray-600 mb-8">{selectedIssue.description}</p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-xl p-6 shadow-xl flex flex-col h-96">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Share what's on your mind..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle size={24} className="text-green-600" />
              {t.resources}
            </h3>
            <div className="space-y-3">
              {selectedIssue.resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.link}
                  className="block p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-all border-l-4 border-pink-500"
                >
                  <p className="font-semibold text-gray-800 text-sm">{resource.title}</p>
                </a>
              ))}
            </div>

            {/* Support Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs text-blue-800 font-semibold">
                💝 <strong>Remember:</strong> You\'re not alone in this journey. Seeking help is a sign of strength, not weakness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingHub;
