import React, { useState, useEffect } from "react";

function ConsultationForm() {
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    studentFirstName: '',
    studentLastName: '',
    email: '',
    phone: '',
    consultationType: '',
    currentStatus: '',
    timeframe: '',
    previousApplication: '',
    budget: '',
    specificConcerns: '',
    additionalInfo: ''
  });

  const [validationMessages, setValidationMessages] = useState({});

  const consultationTypes = [
    { value: "student-visa", label: "Student Visa Services" },
    { value: "immigration", label: "Immigration Consulting" },
    { value: "documentation", label: "Documentation Support" },
    { value: "school-selection", label: "School Selection & Education Planning" },
    { value: "homestay", label: "Homestay Placement and Support" },
    { value: "settlement", label: "Arrival Settlement and Support" },
    { value: "general", label: "General Consultation" }
  ];

  const currentStatusOptions = [
    { value: "prospective-student", label: "Prospective Student" },
    { value: "current-student", label: "Current Student" },
    { value: "graduate", label: "Recent Graduate" },
    { value: "working-professional", label: "Working Professional" },
    { value: "family-member", label: "Family Member/Parent" },
    { value: "other", label: "Other" }
  ];

  const timeframeOptions = [
    { value: "immediate", label: "Immediate (within 1 month)" },
    { value: "short-term", label: "Short-term (1-3 months)" },
    { value: "medium-term", label: "Medium-term (3-6 months)" },
    { value: "long-term", label: "Long-term (6+ months)" },
    { value: "exploring", label: "Just exploring options" }
  ];

  const budgetOptions = [
    { value: "under-1000", label: "Under $1,000 CAD" },
    { value: "1000-2500", label: "$1,000 - $2,500 CAD" },
    { value: "2500-5000", label: "$2,500 - $5,000 CAD" },
    { value: "5000-10000", label: "$5,000 - $10,000 CAD" },
    { value: "above-10000", label: "Above $10,000 CAD" },
    { value: "flexible", label: "Flexible/Depends on services needed" }
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
    formDataToSubmit.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with actual key

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
        email: '',
        phone: '',
        consultationType: '',
        currentStatus: '',
        timeframe: '',
        previousApplication: '',
        budget: '',
        specificConcerns: '',
        additionalInfo: ''
      });
      setValidationMessages({});
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex items-center min-h-screen bg-gray-300">
      <div className="container mx-auto">
        <div className="max-w-[1370px] mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700">
              Book a Consultation
            </h1>
            <p className="text-gray-600">
              Tell us about your child's immigration and education goals so we can provide personalized guidance for your family
            </p>
          </div>
          <div className="m-7">
            <form className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-left text-base leading-normal' onSubmit={onSubmit}>
              
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
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
                      className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Consultation Details</h2>
                
                <div className="mb-6">
                  <label htmlFor="consultationType" className="block mb-2 text-sm text-gray-600">Type of Consultation Needed <span class="text-red-500">*</span></label>
                  <select 
                    name="consultationType" 
                    id="consultationType" 
                    required
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select consultation type...</option>
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
                    <label htmlFor="currentStatus" className="block mb-2 text-sm text-gray-600">Current Status <span class="text-red-500">*</span></label>
                    <select 
                      name="currentStatus" 
                      id="currentStatus" 
                      required
                      value={formData.currentStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select your status...</option>
                      {currentStatusOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {validationMessages.currentStatus && (
                      <div className="text-red-400 text-sm mt-1">{validationMessages.currentStatus}</div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="timeframe" className="block mb-2 text-sm text-gray-600">Timeframe <span class="text-red-500">*</span></label>
                    <select 
                      name="timeframe" 
                      id="timeframe" 
                      required
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                  <label htmlFor="previousApplication" className="block mb-2 text-sm text-gray-600">Have you previously applied for Canadian immigration/study permits?</label>
                  <select 
                    name="previousApplication" 
                    id="previousApplication" 
                    value={formData.previousApplication}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Please select...</option>
                    <option value="no">No, this is my first time</option>
                    <option value="yes-approved">Yes, and it was approved</option>
                    <option value="yes-rejected">Yes, but it was rejected</option>
                    <option value="yes-pending">Yes, and it's currently pending</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="budget" className="block mb-2 text-sm text-gray-600">Expected Budget for Services</label>
                  <select 
                    name="budget" 
                    id="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                 <div className="mb-6">
                  <label htmlFor="budget" className="block mb-2 text-sm text-gray-600">Placeholder Question 1</label>
                  <select 
                    name="budget" 
                    id="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                 <div className="mb-6">
                  <label htmlFor="budget" className="block mb-2 text-sm text-gray-600">Placeholder Question 2</label>
                  <select 
                    name="budget" 
                    id="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                 <div className="mb-6">
                  <label htmlFor="budget" className="block mb-2 text-sm text-gray-600">Placeholder Question 3</label>
                  <select 
                    name="budget" 
                    id="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Additional Information</h2>
                
                <div className="mb-6">
                  <label htmlFor="specificConcerns" className="block mb-2 text-sm text-gray-600">Specific Concerns or Questions</label>
                  <textarea 
                    name="specificConcerns" 
                    id="specificConcerns" 
                    rows="4"
                    placeholder="Please describe any specific concerns, questions, or challenges you're facing..."
                    value={formData.specificConcerns}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="additionalInfo" className="block mb-2 text-sm text-gray-600">Additional Information</label>
                  <textarea 
                    name="additionalInfo" 
                    id="additionalInfo" 
                    rows="3"
                    placeholder="Any other information you'd like us to know before the consultation..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  onClick={handleSubmitClick}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Consultation Request
                </button>
                <button
                  type="reset"
                  onClick={handleResetClick}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
                >
                  Reset Form
                </button>
              </div>

              <div className="text-center mt-6 text-sm text-gray-600">
                <p>We'll review your request and contact you within 24-48 hours to schedule your consultation.</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;