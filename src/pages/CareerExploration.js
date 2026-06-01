import React, { useState } from 'react';
import { ChevronDown, BookOpen, Target, Clock, ArrowRight, Home } from 'lucide-react';

const CareerExploration = ({ setCurrentPage, language }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    currentGrade: '',
    lastResult: '',
    subjects: [],
    careerGoal: '',
    fields: [],
    studyHours: '',
  });
  const [showResults, setShowResults] = useState(false);

  const translations = {
    en: {
      title: 'Career & Academic Exploration',
      step1: 'Academic Profile',
      step2: 'Career Aspirations',
      step3: 'Study Commitment',
      currentGrade: 'What is your current class/grade?',
      lastResult: 'Your last academic result (percentage/GPA)',
      subjects: 'Select your interested subjects',
      careerGoal: 'What is your dream career?',
      fields: 'Fields of interest',
      studyHours: 'Daily study hours you can dedicate',
      next: 'Next',
      back: 'Back',
      submit: 'Generate My Roadmap',
      roadmapTitle: 'Your Personalized Career & Academic Roadmap',
    },
    hi: {
      title: 'करियर और शैक्षणिक अन्वेषण',
      step1: 'शैक्षणिक प्रोफाइल',
      step2: 'करियर आकांक्षाएं',
      step3: 'अध्ययन प्रतिबद्धता',
      currentGrade: 'आप किस कक्षा में हैं?',
      lastResult: 'आपका अंतिम शैक्षणिक परिणाम',
      subjects: 'अपने रुचि के विषय चुनें',
      careerGoal: 'आपका सपना कौन सा काम करना है?',
      fields: 'रुचि के क्षेत्र',
      studyHours: 'प्रतिदिन अध्ययन के घंटे',
      next: 'अगला',
      back: 'वापस',
      submit: 'मेरा रोडमैप जेनरेट करें',
      roadmapTitle: 'आपका व्यक्तिगत करियर और शैक्षणिक रोडमैप',
    },
  };

  const t = translations[language] || translations['en'];

  // Mock Data for Olympiads and Exams
  const olympiads = [
    { name: 'NTSE', description: 'National Talent Search Exam', class: '9-12', subjects: ['Science', 'Math', 'Social Studies', 'Mental Ability'] },
    { name: 'KVPY', description: 'Kishore Vaigyanik Protsahan Yojana', class: '11-12', subjects: ['Science', 'Math'] },
    { name: 'IMO', description: 'International Mathematical Olympiad', class: '9-12', subjects: ['Math'] },
    { name: 'NSO', description: 'National Science Olympiad', class: '9-12', subjects: ['Science'] },
    { name: 'JEE Main', description: 'Joint Entrance Exam', class: '12', subjects: ['Physics', 'Chemistry', 'Math'] },
    { name: 'NEET', description: 'Medical Entrance Exam', class: '12', subjects: ['Biology', 'Chemistry', 'Physics'] },
  ];

  const roadmapMilestones = [
    { month: 'Month 1-2', task: 'Strengthen fundamentals in selected subjects', resources: ['NCERT textbooks', 'Khan Academy', 'YouTube channels'] },
    { month: 'Month 3-4', task: 'Complete one subject thoroughly', resources: ['NPTEL', 'Offline coaching notes', 'Previous year papers'] },
    { month: 'Month 5-6', task: 'Practice mock tests and solve problems', resources: ['Online platforms', 'School mock tests', 'NPTEL practice'] },
    { month: 'Month 7-8', task: 'Prepare for Olympiads/Competitive exams', resources: ['Exam-specific guides', 'Previous papers', 'Mentorship sessions'] },
    { month: 'Month 9-12', task: 'Intensive exam preparation and revision', resources: ['Full-length tests', 'Time management practice', 'Doubt clearing sessions'] },
  ];

  const freeResources = [
    { name: 'NPTEL', link: 'https://nptel.ac.in', desc: 'Free online courses from IITs' },
    { name: 'YouTube Channels', link: '#', desc: 'Physics Wallah, Unacademy, etc.' },
    { name: 'SWAYAM Platform', link: 'https://swayam.gov.in', desc: 'Government free courses' },
    { name: 'National Scholarships', link: '#', desc: 'NSP for eligible students' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const arr = prev[category];
      return {
        ...prev,
        [category]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const handleNext = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const handleBack = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => {
              setShowResults(false);
              setFormStep(1);
              setFormData({
                currentGrade: '',
                lastResult: '',
                subjects: [],
                careerGoal: '',
                fields: [],
                studyHours: '',
              });
            }}
            className="flex items-center gap-2 text-green-600 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <Home size={20} />
            Back to Exploration
          </button>

          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">{t.roadmapTitle}</h1>
          <p className="text-center text-gray-600 mb-8">Based on your profile: {formData.careerGoal}</p>

          {/* Competitive Exams Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Target size={24} className="text-blue-600" />
              Recommended Competitive Exams
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {olympiads.map((exam, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-lg text-gray-800">{exam.name}</h3>
                  <p className="text-sm text-gray-600">{exam.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Classes: {exam.class}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exam.subjects.map((subj, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Clock size={24} className="text-green-600" />
              12-Month Achievement Roadmap
            </h2>
            <div className="space-y-4">
              {roadmapMilestones.map((milestone, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800">{milestone.month}</h4>
                      <p className="text-gray-700 mt-1">{milestone.task}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {milestone.resources.map((res, i) => (
                          <span key={i} className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full">
                            {res}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Study Schedule */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Daily Study Schedule ({formData.studyHours} hours)</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800">Concept Learning</p>
                <p className="text-2xl font-bold text-blue-600">40%</p>
                <p className="text-sm text-gray-600">{Math.round(parseInt(formData.studyHours || 0) * 0.4)} hrs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800">Practice Problems</p>
                <p className="text-2xl font-bold text-green-600">35%</p>
                <p className="text-sm text-gray-600">{Math.round(parseInt(formData.studyHours || 0) * 0.35)} hrs</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800">Revision</p>
                <p className="text-2xl font-bold text-purple-600">20%</p>
                <p className="text-sm text-gray-600">{Math.round(parseInt(formData.studyHours || 0) * 0.20)} hrs</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800">Mock Tests</p>
                <p className="text-2xl font-bold text-orange-600">5%</p>
                <p className="text-sm text-gray-600">{Math.round(parseInt(formData.studyHours || 0) * 0.05)} hrs</p>
              </div>
            </div>
          </div>

          {/* Free Resources Section */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-green-600" />
              Low-Cost/Free Resources for Rural Students
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {freeResources.map((resource, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">{resource.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{resource.desc}</p>
                  <a href={resource.link} className="text-green-600 text-sm font-semibold mt-2 inline-block hover:underline">
                    Visit →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 pt-20 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-green-600 font-semibold mb-6 hover:gap-3 transition-all"
        >
          <Home size={20} />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">{t.title}</h1>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex-1 text-center">
              <div
                className={`h-12 w-12 mx-auto rounded-full flex items-center justify-center font-bold mb-2 transition-all ${
                  step <= formStep
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {step}
              </div>
              <p className="text-sm font-semibold text-gray-700">
                {step === 1 ? t.step1 : step === 2 ? t.step2 : t.step3}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-effect rounded-xl p-8 shadow-xl">
          {/* Step 1: Academic Profile */}
          {formStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <BookOpen size={24} className="text-blue-600" />
                {t.step1}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.currentGrade}</label>
                <select
                  name="currentGrade"
                  value={formData.currentGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Grade</option>
                  {['9', '10', '11', '12'].map((grade) => (
                    <option key={grade} value={grade}>
                      Class {grade}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.lastResult}</label>
                <input
                  type="number"
                  name="lastResult"
                  placeholder="Enter percentage or GPA"
                  value={formData.lastResult}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">{t.subjects}</label>
                <div className="space-y-2">
                  {['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Social Studies'].map((subject) => (
                    <label key={subject} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.subjects.includes(subject)}
                        onChange={() => handleCheckboxChange('subjects', subject)}
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Career Aspirations */}
          {formStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Target size={24} className="text-green-600" />
                {t.step2}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.careerGoal}</label>
                <input
                  type="text"
                  name="careerGoal"
                  placeholder="e.g., Software Engineer, Doctor, IAS Officer"
                  value={formData.careerGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">{t.fields}</label>
                <div className="space-y-2">
                  {['Technology/IT', 'Medical', 'Engineering', 'Finance', 'Competitive Services', 'Humanities'].map((field) => (
                    <label key={field} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.fields.includes(field)}
                        onChange={() => handleCheckboxChange('fields', field)}
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="text-gray-700">{field}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Study Commitment */}
          {formStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Clock size={24} className="text-purple-600" />
                {t.step3}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.studyHours}</label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    name="studyHours"
                    min="1"
                    max="8"
                    value={formData.studyHours}
                    onChange={handleInputChange}
                    className="flex-1 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <span className="text-2xl font-bold text-green-600 min-w-12">{formData.studyHours} hrs</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700">
                  <span className="font-semibold">Your Commitment:</span> You're planning to dedicate <span className="text-green-600 font-bold">{formData.studyHours} hours daily</span> to achieve your goal of becoming a <span className="text-green-600 font-bold">{formData.careerGoal}</span>.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={formStep === 1}
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.back}
            </button>

            {formStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                {t.next}
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                {t.submit}
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExploration;
