import React, { useState } from 'react';
import { ChevronDown, Building2, Filter, Home, ChevronRight } from 'lucide-react';

const CollegeCounseling = ({ setCurrentPage, language }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    exam: '',
    rank: '',
    percentile: '',
    gender: '',
    state: '',
    category: '',
    subCategory: '',
    branch: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const translations = {
    en: {
      title: 'College Counseling & Predictor',
      step1: 'Exam Scores',
      step2: 'Demographics',
      step3: 'Branch Selection',
      exam: 'Select Exam',
      rank: 'Your Rank/Score',
      percentile: 'Percentile',
      gender: 'Gender',
      state: 'Home State',
      category: 'Category/Caste',
      subCategory: 'Sub-Category',
      branch: 'Preferred Branch',
      predictColleges: 'Predict My Colleges',
      back: 'Back',
      next: 'Next',
      submit: 'Get My Predictions',
      eligibleColleges: 'Your Eligible Colleges',
      qualifiedVia: 'Qualified via',
      fees: 'Annual Fees',
      cutoff: 'Cutoff Rank',
      branchWiseCutoffs: 'Branch-wise Cutoffs',
    },
    hi: {
      title: 'कॉलेज सलाह और पूर्वानुमान',
      step1: 'परीक्षा के अंक',
      step2: 'जनसांख्यिकी',
      step3: 'शाखा चयन',
      exam: 'परीक्षा चुनें',
      rank: 'आपकी रैंक',
      percentile: 'प्रतिशतांक',
      gender: 'लिंग',
      state: 'होम स्टेट',
      category: 'श्रेणी/जाति',
      subCategory: 'उप-श्रेणी',
      branch: 'पसंदीदा शाखा',
      predictColleges: 'मेरे कॉलेज की भविष्यवाणी करें',
      back: 'वापस',
      next: 'अगला',
      submit: 'मेरी भविष्यवाणी प्राप्त करें',
      eligibleColleges: 'आपके योग्य कॉलेज',
      qualifiedVia: 'के माध्यम से योग्य',
      fees: 'वार्षिक शुल्क',
      cutoff: 'कटऑफ रैंक',
      branchWiseCutoffs: 'शाखा-वार कटऑफ',
    },
  };

  const t = translations[language] || translations['en'];

  // Mock College Data with realistic info
  const mockColleges = [
    {
      id: 1,
      name: 'Indian Institute of Technology Bombay (IITB)',
      location: 'Mumbai, Maharashtra',
      fees: 200000,
      cutoffRank: 150,
      qualifiedVia: 'General Merit',
      branches: {
        'Computer Science': 280,
        'Mechanical Engineering': 450,
        'Electrical Engineering': 520,
        'Civil Engineering': 1200,
      },
      hostel: 100000,
      established: 1958,
      placement: '98%',
    },
    {
      id: 2,
      name: 'National Institute of Technology Delhi (NIT Delhi)',
      location: 'Delhi',
      fees: 165000,
      cutoffRank: 2500,
      qualifiedVia: 'General Merit, OBC',
      branches: {
        'Computer Science': 4200,
        'Mechanical Engineering': 8500,
        'Electrical Engineering': 9200,
        'Civil Engineering': 12000,
      },
      hostel: 75000,
      established: 1990,
      placement: '94%',
    },
    {
      id: 3,
      name: 'Delhi University - Ramjas College',
      location: 'Delhi',
      fees: 50000,
      cutoffRank: 'N/A',
      qualifiedVia: 'Merit-based (CUET)',
      branches: {
        'Commerce': '88%',
        'Science': '92%',
        'Humanities': '85%',
      },
      hostel: 25000,
      established: 1917,
      placement: '75%',
    },
    {
      id: 4,
      name: 'Savitribai Phule Pune University',
      location: 'Pune, Maharashtra',
      fees: 80000,
      cutoffRank: 'State-based',
      qualifiedVia: 'State Merit, Reserved Category',
      branches: {
        'Engineering': '7500',
        'Medicine': '2300',
        'Law': '4500',
        'Arts': '9000',
      },
      hostel: 45000,
      established: 1949,
      placement: '82%',
    },
    {
      id: 5,
      name: 'Bangalore Institute of Technology',
      location: 'Bangalore, Karnataka',
      fees: 120000,
      cutoffRank: 8000,
      qualifiedVia: 'State Merit, SC/ST Quota',
      branches: {
        'Information Technology': 6800,
        'Electronics': 7200,
        'Mechanical': 8500,
        'Civil': 9500,
      },
      hostel: 60000,
      established: 2005,
      placement: '88%',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              setSelectedCollege(null);
              setFormData({
                exam: '',
                rank: '',
                percentile: '',
                gender: '',
                state: '',
                category: '',
                subCategory: '',
                branch: '',
              });
            }}
            className="flex items-center gap-2 text-green-600 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <Home size={20} />
            Back to Counselor
          </button>

          {!selectedCollege ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">{t.eligibleColleges}</h1>
              <p className="text-center text-gray-600 mb-8">
                Rank: {formData.rank} | State: {formData.state} | Category: {formData.category}
              </p>

              {/* Colleges List */}
              <div className="grid gap-6">
                {mockColleges.map((college) => (
                  <div
                    key={college.id}
                    onClick={() => setSelectedCollege(college)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-all border-l-4 border-green-500"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-800">{college.name}</h2>
                        <p className="text-gray-600 mt-2">{college.location}</p>
                        <div className="flex flex-wrap gap-4 mt-4">
                          <div>
                            <p className="text-xs text-gray-500">Annual Fees</p>
                            <p className="text-lg font-bold text-green-600">₹{college.fees.toLocaleString('en-IN')}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Cutoff Rank</p>
                            <p className="text-lg font-bold text-blue-600">{college.cutoffRank}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Placement Rate</p>
                            <p className="text-lg font-bold text-purple-600">{college.placement}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Qualified Via</p>
                            <p className="text-sm font-semibold text-orange-600">{college.qualifiedVia}</p>
                          </div>
                        </div>
                      </div>
                      <ChevronRight size={24} className="text-green-600 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* College Details Panel */}
              <button
                onClick={() => setSelectedCollege(null)}
                className="flex items-center gap-2 text-green-600 font-semibold mb-6 hover:gap-3 transition-all"
              >
                <ChevronRight size={20} className="rotate-180" />
                Back to List
              </button>

              <div className="bg-white rounded-xl p-8 shadow-xl mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedCollege.name}</h1>
                <p className="text-gray-600">{selectedCollege.location}</p>

                {/* Key Info Grid */}
                <div className="grid md:grid-cols-4 gap-4 mt-8 pb-8 border-b">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">ANNUAL FEES</p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">₹{selectedCollege.fees.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">HOSTEL FEES</p>
                    <p className="text-2xl font-bold text-green-600 mt-2">₹{selectedCollege.hostel.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">PLACEMENT RATE</p>
                    <p className="text-2xl font-bold text-purple-600 mt-2">{selectedCollege.placement}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">ESTABLISHED</p>
                    <p className="text-2xl font-bold text-orange-600 mt-2">{selectedCollege.established}</p>
                  </div>
                </div>

                {/* Branch-wise Cutoffs */}
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">{t.branchWiseCutoffs}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b-2 border-gray-300">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Branch</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Cutoff Rank</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(selectedCollege.branches).map(([branch, cutoff], idx) => {
                        const userRank = parseInt(formData.rank) || 0;
                        const cutoffRank = parseInt(cutoff) || 0;
                        const isEligible = userRank <= cutoffRank || cutoffRank === 0;

                        return (
                          <tr key={idx} className={`border-b ${isEligible ? 'bg-green-50' : 'bg-red-50'}`}>
                            <td className="px-4 py-3 font-semibold text-gray-800">{branch}</td>
                            <td className="px-4 py-3 text-gray-700">{cutoff}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                  isEligible
                                    ? 'bg-green-200 text-green-800'
                                    : 'bg-red-200 text-red-800'
                                }`}
                              >
                                {isEligible ? '✓ Eligible' : '✗ Not Eligible'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-800 mb-3">Qualification Details</h3>
                  <p className="text-gray-700">
                    You are eligible for this college via <span className="font-bold text-blue-600">{selectedCollege.qualifiedVia}</span>.
                    Your profile matches the admission criteria based on your rank, state preference, and category.
                  </p>
                </div>
              </div>
            </>
          )}
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
          {/* Step 1: Exam Scores */}
          {formStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Building2 size={24} className="text-blue-600" />
                {t.step1}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.exam}</label>
                <select
                  name="exam"
                  value={formData.exam}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Exam</option>
                  <option value="JEE-Main">JEE Main</option>
                  <option value="NEET">NEET</option>
                  <option value="CUET">CUET</option>
                  <option value="MHT-CET">MHT CET</option>
                  <option value="BITSAT">BITSAT</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.rank}</label>
                <input
                  type="number"
                  name="rank"
                  placeholder="Enter your rank"
                  value={formData.rank}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.percentile}</label>
                <input
                  type="number"
                  name="percentile"
                  placeholder="Enter percentile (e.g., 85)"
                  value={formData.percentile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          )}

          {/* Step 2: Demographics */}
          {formStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Filter size={24} className="text-green-600" />
                {t.step2}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.gender}</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.state}</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select State</option>
                  {['Andhra Pradesh', 'Gujarat', 'Haryana', 'Karnataka', 'Maharashtra', 'Delhi', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.category}</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC-NCL">OBC-NCL</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.subCategory}</label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Sub-Category</option>
                  <option value="None">None</option>
                  <option value="PwD">Person with Disability (PwD)</option>
                  <option value="Rural-Quota">Rural Quota</option>
                  <option value="Defence-Quota">Defence Quota</option>
                  <option value="Sports-Quota">Sports Quota</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Branch Selection */}
          {formStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Building2 size={24} className="text-purple-600" />
                {t.step3}
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">{t.branch}</label>
                <div className="space-y-2">
                  {['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Electronics', 'Chemical Engineering'].map((branch) => (
                    <label key={branch} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="branch"
                        value={branch}
                        checked={formData.branch === branch}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-green-600"
                      />
                      <span className="text-gray-700">{branch}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700">
                  <span className="font-semibold">Your Profile Summary:</span>
                  <br />
                  Exam: {formData.exam} | Rank: {formData.rank} | State: {formData.state} | Category: {formData.category}
                  <br />
                  Branch: {formData.branch}
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
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                {t.submit}
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCounseling;
