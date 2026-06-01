import React, { useState } from 'react';
import { MessageCircle, Send, Mic, X, Home, BookOpen, GraduationCap, Heart } from 'lucide-react';

const ChatBot = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: language === 'en' ? "Hello! I'm Margdarshi AI. How can I help you today?" : "नमस्ते! मैं मार्गदर्शी AI हूँ। मैं आज आपकी कैसे मदद कर सकता हूँ?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Mock responses for the chatbot
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const responses = {
      en: {
        greeting: "It's nice to meet you! I'm here to help with your academic journey.",
        career: "Tell me about your interests, and I can suggest career paths that match your goals!",
        college: "I can help you find colleges based on your exam scores and preferences.",
        stress: "It's normal to feel stressed. Take a deep breath! Want to talk about what's bothering you?",
        finances: "There are many scholarships available. Let me help you find financial aid options.",
        motivation: "Remember, every small step counts! Your efforts today shape your tomorrow.",
        family: "Family support is important. Would you like tips on how to discuss your goals with them?",
        default: "That's a great question! Can you provide more details so I can help better?",
      },
      hi: {
        greeting: "आपसे मिलकर खुशी हुई! मैं आपकी शैक्षणिक यात्रा में मदद के लिए यहाँ हूँ।",
        career: "मुझे अपनी रुचियों के बारे में बताएं, और मैं आपके लक्ष्यों से मेल खाने वाले करियर पाथ सुझा सकता हूँ!",
        college: "मैं आपकी परीक्षा के अंकों और पसंद के आधार पर कॉलेज खोजने में मदद कर सकता हूँ।",
        stress: "तनाव महसूस करना सामान्य है। गहरी सांस लें! क्या आप बताना चाहते हैं कि क्या परेशानी है?",
        finances: "कई छात्रवृत्तियाँ उपलब्ध हैं। मुझे आर्थिक सहायता के विकल्प खोजने में मदद करने दें।",
        motivation: "याद रखें, हर छोटा कदम मायने रखता है! आपकी आज की मेहनत आपका कल बनाती है।",
        family: "पारिवारिक समर्थन महत्वपूर्ण है। क्या आप अपने लक्ष्यों के बारे में उनसे बात करने के लिए सुझाव चाहते हैं?",
        default: "बहुत अच्छा सवाल है! क्या आप और विवरण दे सकते हैं ताकि मैं बेहतर मदद कर सकूँ?",
      },
    };

    const currentLang = responses[language] || responses['en'];

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey'))
      return currentLang.greeting;
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('future'))
      return currentLang.career;
    if (lowerMessage.includes('college') || lowerMessage.includes('university'))
      return currentLang.college;
    if (lowerMessage.includes('stress') || lowerMessage.includes('worried') || lowerMessage.includes('anxious'))
      return currentLang.stress;
    if (lowerMessage.includes('money') || lowerMessage.includes('financial') || lowerMessage.includes('scholarship'))
      return currentLang.finances;
    if (lowerMessage.includes('motivation') || lowerMessage.includes('discourage') || lowerMessage.includes('motivation'))
      return currentLang.motivation;
    if (lowerMessage.includes('family') || lowerMessage.includes('parent') || lowerMessage.includes('support'))
      return currentLang.family;

    return currentLang.default;
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newUserMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages([...messages, newUserMessage]);
      setInputValue('');

      // Simulate bot response delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputValue),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
    }
  };

  const handleMicrophone = () => {
    setIsListening(!isListening);
    // Mock speech-to-text simulation
    setTimeout(() => {
      if (!isListening) {
        setInputValue('I want to know about career options in engineering');
        setIsListening(false);
      }
    }, 2000);
  };

  const quickActions = [
    { icon: BookOpen, label: 'Career Path', action: 'Tell me about career paths' },
    { icon: GraduationCap, label: 'College', action: 'Help me find colleges' },
    { icon: Heart, label: 'Well-being', action: 'I need mental health support' },
  ];

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group animate-bounce"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-screen md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Margdarshi AI</h3>
              <p className="text-xs text-green-100">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-gray-200 space-y-2">
              <p className="text-xs text-gray-600 font-semibold">Quick Actions:</p>
              <div className="grid grid-cols-3 gap-2">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setInputValue(action.action);
                      }}
                      className="flex flex-col items-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Icon size={18} className="text-green-600" />
                      <span className="text-xs text-gray-700">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center gap-2">
              <button
                onClick={handleMicrophone}
                className={`p-2 rounded-lg transition-all ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                title="Click to speak"
              >
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">💬 {isListening ? 'Listening...' : 'Tap mic to voice your question'}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
