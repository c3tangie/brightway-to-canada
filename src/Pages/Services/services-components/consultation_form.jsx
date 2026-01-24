import React, { useState, useEffect } from "react";

function ConsultationForm() {
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    studentFirstName: '',
    studentLastName: '',
    studentAge: '',
    studentGrade: '',
    email: '',
    phone: '',
    currentLocation: '',
    consultationType: '',
    currentStatus: '',
    timeframe: '',
    previousApplication: '',
    budget: '',
    academicBackground: '',
    englishProficiency: '',
    safetyConcerns: '',
    emotionalSupport: '',
    socialIntegration: '',
    livingArrangement: '',
    emergencyContact: '',
    healthcareQuestions: '',
    specificConcerns: '',
    additionalInfo: ''
  });

  const [validationMessages, setValidationMessages] = useState({});
  const API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

  const consultationTypes = [
    { value: "academic-planning", label: "Academic Planning & School Selection" },
    { value: "student-visa", label: "Student Visa Services" },
    { value: "homestay", label: "Homestay Placement and Support" },
    { value: "settlement", label: "Arrival Settlement and Support" },
    { value: "wellbeing-support", label: "Well-being & Emotional Support" },
    { value: "general", label: "General Consultation" }
  ];

  const currentStatusOptions = [
    { value: "middle-school", label: "Grade K-7" },
    { value: "junior-high-grad", label: "Grade 8-12" },
    { value: "current-canada", label: "Currently Studying in Canada" },
    { value: "planning-stage", label: "Planning Stage" }
  ];

  const timeframeOptions = [
    { value: "short-term", label: "Short-term (1-6 months)" },
    { value: "long-term", label: "Long-term (6-12 months)" },
    { value: "exploring", label: "Just exploring options" }
  ];

  const englishProficiencyOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "fluent", label: "Fluent/Native-like" },
    { value: "ielts-toefl", label: "Has IELTS/TOEFL scores" }
  ];

  const livingArrangementOptions = [
    { value: "unsure", label: "Not sure yet" },
    { value: "school-homestay", label: "School-Assigned Homestay preferred" },
    { value: "private-homestay", label: "Private Homestay preferred" },
    { value: "parent-accompany", label: "Parent will accompany" },
    { value: "relative", label: "Stay with relatives in Canada" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Basic validation
    const newValidationMessages = {};
    if (!formData.consultationType) {
      newValidationMessages.consultationType = "Please select a consultation type.";
    }
    if (!formData.currentStatus) {
      newValidationMessages.currentStatus = "Please select your current status.";
    }
    if (!formData.timeframe) {
      newValidationMessages.timeframe = "Please select your timeframe.";
    }

    if (Object.keys(newValidationMessages).length > 0) {
      setValidationMessages(newValidationMessages);
      return;
    }

    setValidationMessages({});

    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", API_KEY); // Replace with actual key

    const object = Object.fromEntries(formDataToSubmit);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.location.href = '#/thankyou';
    } else {
      window.alert("Something went wrong! Please try again.");
    }
  };

  const handleSubmitClick = (e) => {
    if (!window.confirm('Submit the consultation request?')) {
      e.preventDefault();
    }
  };

  const handleResetClick = (e) => {
    if (!window.confirm('Reset the form?')) {
      e.preventDefault();
    } else {
      setFormData({
        parentFirstName: '',
        parentLastName: '',
        studentFirstName: '',
        studentLastName: '',
        studentAge: '',
        studentGrade: '',
        email: '',
        phone: '',
        currentLocation: '',
        consultationType: '',
        currentStatus: '',
        timeframe: '',
        previousApplication: '',
        budget: '',
        academicBackground: '',
        englishProficiency: '',
        safetyConcerns: '',
        emotionalSupport: '',
        socialIntegration: '',
        livingArrangement: '',
        emergencyContact: '',
        healthcareQuestions: '',
        specificConcerns: '',
        additionalInfo: ''
      });
      setValidationMessages({});
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center min-h-screen bg-gray-300">
      <div className="container mx-auto">
        <div className="max-w-[1375px] mx-auto my-10 bg-white p-2 sm:p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700">
              Book a Consultation
            </h1>
            <p className="text-gray-600">
              Tell us about your child's immigration and education goals so we can provide personalized guidance for your family
            </p>
          </div>
          <div className="m-3 sm:m-7">
            <form className='mt-5 max-w-screen-2xl mx-auto px-2 sm:px-6 xl:px-20 2xl:px-20 font-RobotoFlex text-left text-base leading-normal' onSubmit={onSubmit}>
              
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">Parent/Guardian Information</h2>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="10" fill="#6B7280"/>
                    <text x="10" y="14" textAnchor="middle" fill="white" fontSize="12" fontFamily="serif" fontWeight="bold">i</text>
                  </svg>
                  Required fields are marked with an asterisk&nbsp;<span class="text-red-500">*</span>
                </div>
                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="parentFirstName" className="block mb-2 text-sm text-gray-600">Parent/Guardian First Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="parentFirstName" 
                      id="parentFirstName" 
                      placeholder="John" 
                      required 
                      value={formData.parentFirstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="parentLastName" className="block mb-2 text-sm text-gray-600">Parent/Guardian Last Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="parentLastName" 
                      id="parentLastName" 
                      placeholder="Smith" 
                      required 
                      value={formData.parentLastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                </div>

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Parent/Guardian Email Address <span class="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="parent@email.com" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">Parent/Guardian Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="currentLocation" className="block mb-2 text-sm text-gray-600">Current Location <span class="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="currentLocation" 
                    id="currentLocation" 
                    placeholder="City, Country (e.g., Shanghai, China)" 
                    required 
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                  />
                </div>
              </div>

              {/* Student Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Student Information</h2>
                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="studentFirstName" className="block mb-2 text-sm text-gray-600">Student First Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="studentFirstName" 
                      id="studentFirstName" 
                      placeholder="Jane" 
                      required 
                      value={formData.studentFirstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="studentLastName" className="block mb-2 text-sm text-gray-600">Student Last Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="studentLastName" 
                      id="studentLastName" 
                      placeholder="Smith" 
                      required 
                      value={formData.studentLastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                </div>

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="studentAge" className="block mb-2 text-sm text-gray-600">Student Age <span class="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      name="studentAge" 
                      id="studentAge" 
                      placeholder="15" 
                      min="10" 
                      max="25" 
                      required 
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="studentGrade" className="block mb-2 text-sm text-gray-600">Current Grade Level <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="studentGrade" 
                      id="studentGrade" 
                      placeholder="Grade 9 / Junior High 3" 
                      required 
                      value={formData.studentGrade}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="academicBackground" className="block mb-2 text-sm text-gray-600">Academic Background & Grades</label>
                  <textarea 
                    name="academicBackground" 
                    id="academicBackground" 
                    rows="3"
                    placeholder="Describe your child's academic performance, strengths, weaknesses, and any special needs..."
                    value={formData.academicBackground}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="englishProficiency" className="block mb-2 text-sm text-gray-600">English Proficiency Level</label>
                  <select 
                    name="englishProficiency" 
                    id="englishProficiency" 
                    value={formData.englishProficiency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select English level...</option>
                    {englishProficiencyOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Study Abroad Planning</h2>
                
                <div className="mb-6">
                  <label htmlFor="consultationType" className="block mb-2 text-sm text-gray-600">Main Area of Concern <span class="text-red-500">*</span></label>
                  <select 
                    name="consultationType" 
                    id="consultationType" 
                    required
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select main concern...</option>
                    {consultationTypes.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {validationMessages.consultationType && (
                    <div className="text-red-400 text-sm mt-1">{validationMessages.consultationType}</div>
                  )}
                </div>

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="currentStatus" className="block mb-2 text-sm text-gray-600">Student's Current Status <span class="text-red-500">*</span></label>
                    <select 
                      name="currentStatus" 
                      id="currentStatus" 
                      required
                      value={formData.currentStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select status...</option>
                      {currentStatusOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {validationMessages.currentStatus && (
                      <div className="text-red-400 text-sm mt-1">{validationMessages.currentStatus}</div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="timeframe" className="block mb-2 text-sm text-gray-600">Planned Study Abroad Timeframe <span class="text-red-500">*</span></label>
                    <select 
                      name="timeframe" 
                      id="timeframe" 
                      required
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select timeframe...</option>
                      {timeframeOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {validationMessages.timeframe && (
                      <div className="text-red-400 text-sm mt-1">{validationMessages.timeframe}</div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="livingArrangement" className="block mb-2 text-sm text-gray-600">Preferred Living Arrangement in Canada</label>
                  <select 
                    name="livingArrangement" 
                    id="livingArrangement" 
                    value={formData.livingArrangement}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select preferred option...</option>
                    {livingArrangementOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="previousApplication" className="block mb-2 text-sm text-gray-600">Previous Canadian Study/Immigration Applications</label>
                  <select 
                    name="previousApplication" 
                    id="previousApplication" 
                    value={formData.previousApplication}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Please select...</option>
                    <option value="no">No, this is our first time</option>
                    <option value="yes-approved">Yes, and it was approved</option>
                    <option value="yes-rejected">Yes, but it was rejected</option>
                    <option value="yes-pending">Yes, and it's currently pending</option>
                  </select>
                </div>
              </div>

              {/* Parent Concerns - Based on ServiceArticle Questions */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Specific Concerns</h2>
                
                <div className="mb-6">
                  <label htmlFor="safetyConcerns" className="block mb-2 text-sm text-gray-600">Safety & Well-being Concerns</label>
                  <textarea 
                    name="safetyConcerns" 
                    id="safetyConcerns" 
                    rows="3"
                    placeholder="Any concerns about your child's safety, healthcare, or emotional well-being in Canada?"
                    value={formData.safetyConcerns}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="emotionalSupport" className="block mb-2 text-sm text-gray-600">Emotional & Psychological Support Needs</label>
                  <textarea 
                    name="emotionalSupport" 
                    id="emotionalSupport" 
                    rows="3"
                    placeholder="Concerns about stress, adaptation, emotional support, or maturity issues?"
                    value={formData.emotionalSupport}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="socialIntegration" className="block mb-2 text-sm text-gray-600">Social Integration & Cultural Adaptation</label>
                  <textarea 
                    name="socialIntegration" 
                    id="socialIntegration" 
                    rows="3"
                    placeholder="Concerns about making friends, cultural adjustment, or integration with local students?"
                    value={formData.socialIntegration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="emergencyContact" className="block mb-2 text-sm text-gray-600">Emergency & Healthcare Questions</label>
                  <textarea 
                    name="emergencyContact" 
                    id="emergencyContact" 
                    rows="2"
                    placeholder="Questions about emergency procedures, healthcare policies, or vaccinations?"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="healthcareQuestions" className="block mb-2 text-sm text-gray-600">Financial & Practical Preparation Questions</label>
                  <textarea 
                    name="healthcareQuestions" 
                    id="healthcareQuestions" 
                    rows="2"
                    placeholder="Questions about costs, budgeting, required documents, or practical preparations?"
                    value={formData.healthcareQuestions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Additional Information</h2>
                
                <div className="mb-6">
                  <label htmlFor="specificConcerns" className="block mb-2 text-sm text-gray-600">Any Other Specific Questions or Concerns</label>
                  <textarea 
                    name="specificConcerns" 
                    id="specificConcerns" 
                    rows="4"
                    placeholder="Please list any other specific questions or concerns you'd like to discuss..."
                    value={formData.specificConcerns}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="additionalInfo" className="block mb-2 text-sm text-gray-600">Additional Information About Your Family</label>
                  <textarea 
                    name="additionalInfo" 
                    id="additionalInfo" 
                    rows="3"
                    placeholder="Any other information about your family situation, goals, or expectations..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  onClick={handleSubmitClick}
                  className="bg-navy-600 hover:bg-navy-700 text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Consultation Request
                </button>
                <button
                  type="reset"
                  onClick={handleResetClick}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-8 rounded-md transition-colors duration-300"
                >
                  Reset Form
                </button>
              </div>

              <div className="text-center mt-6 text-sm text-gray-600">
                <p>We'll review your request and contact you within 24-48 hours to schedule your consultation.</p>
                <p className="mt-2">Based on your concerns, we'll prepare specific guidance for your family's unique situation.</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;