import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4"; 

const Page = {
  Step1: 1,
  Step2: 2,
  Step3: 3,
  Step4: 4,
};


const FINAL_STEP = Page.Step4;
    // TODO:: Pass steps from Parent

function MultiStepForm({ onSubmit = () => {}, 
     }) {
  const [currentStep, setCurrentStep] = useState(Page.Step1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    step1: {
      arrivalDate: "",
      departureDate: "",
    },
    step2: {
      adults: 1,
      children: 0,
    },
    step3: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    step4: {
      additionalDetails: "",
    },
  });

  const Steps = {
    [Page.Step1]: Step1,
    [Page.Step2]: Step2,
    [Page.Step3]: Step3,
    [Page.Step4]: Step4,
  };

  const Component = Steps[currentStep];

  const submitButtonText = FINAL_STEP === currentStep ? "Save" : "Next";

  function validateStep() {
    if (currentStep === Page.Step1) {
      const { arrivalDate, departureDate } = inputs.step1;
      if (!arrivalDate || !departureDate) {
        alert("Please fill in both arrival and departure dates");
        return false;
      }
    } else if (currentStep === Page.Step3) {
      const { firstName, lastName, email } = inputs.step3;
      if (!firstName || !lastName || !email) {
        alert("Please fill in all required fields (First Name, Last Name, and Email)");
        return false;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }
    return true;
  }

  async function handleNext() {
    if (currentStep === Page.Step1) {
      if (!validateStep()) return;
      setCurrentStep(currentStep + 1);
    } else if (currentStep === Page.Step2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === Page.Step3) {
      if (!validateStep()) return;
      setCurrentStep(currentStep + 1);
    } else if (currentStep === Page.Step4) {
      // Flatten the inputs into a single object
      const reservationData = {
        arrivalDate: inputs.step1.arrivalDate,
        departureDate: inputs.step1.departureDate,
        adults: inputs.step2.adults,
        children: inputs.step2.children,
        firstName: inputs.step3.firstName,
        lastName: inputs.step3.lastName,
        email: inputs.step3.email,
        phone: inputs.step3.phone,
        additionalDetails: inputs.step4.additionalDetails,
      };
      
      try {
        // Save to server API directly
        const response = await fetch('http://localhost:3001/api/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData),
        });
        
        const data = await response.json();
        
        if (data.success) {
          console.log("Reservation saved:", data.reservation);
          
          // Call parent onSubmit if provided
          onSubmit(reservationData);
          
          setShowSuccessPopup(true);
          
          // Navigate to homepage after 2 seconds
          setTimeout(() => {
            setShowSuccessPopup(false);
            navigate('/');
          }, 2000);
        } else {
          throw new Error(data.message || 'Failed to save reservation');
        }
      } catch (error) {
        console.error('Failed to save reservation:', error);
        alert('Failed to save reservation. Please make sure the server is running.');
      }
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleInputChange({ stepKey, value, inputKey }) {
    const oldInputs = structuredClone(inputs);

    oldInputs[stepKey][inputKey] = value;

    setInputs(oldInputs);
  }

  const inputToSend = inputs[`step${currentStep}`];

  const stepLabels = [
    { step: 1, label: "Dates" },
    { step: 2, label: "Guests" },
    { step: 3, label: "Information" },
    { step: 4, label: "Details" },
  ];

  const progressPercentage = ((currentStep - 1) / (FINAL_STEP - 1)) * 100;

  return (
    <div className="multi-step-form w-full max-w-5xl mx-auto py-4">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center items-center justify-center flex flex-col">
              <div className="mx-auto  flex items-center justify-center h-16 w-16 rounded-full mb-4" style={{ backgroundColor: '#A4742C' }}>
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#3b3b3b' }}>
                Reservation Submitted Successfully!
              </h3>
              <p className="text-base text-gray-600">
                Thank you for your reservation. We'll contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <div className="flex justify-between mb-4 text-sm font-medium text-gray-600">
          <span>Step {currentStep} of {FINAL_STEP}</span>
          <span>{stepLabels[currentStep - 1].label}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%`, backgroundColor: '#A4742C' }}
          ></div>
        </div>
      </div>

      <form className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <Component
          stepKey={`step${currentStep}`}
          onChange={handleInputChange}
          inputs={inputToSend}
        />

        <div className="flex gap-4 pt-2 md:pt-4 lg:pt-6 ">
          {currentStep > Page.Step1 && (
            <button 
              type="button" 
              onClick={handleBack}
              className="px-8 py-3 rounded font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#A4742C' }}
            >
              Back
            </button>
          )}
          <button 
            type="button" 
            onClick={handleNext}
            className="px-8 py-3 rounded font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#A4742C' }}
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;