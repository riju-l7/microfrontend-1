import React, { useState, useEffect, useRef, useMemo } from 'react';

const findNested = (entireObj, keyToFind) => {
  let found;
  if (entireObj[keyToFind]) return entireObj[keyToFind];
  for (const key in entireObj) {
    if (key !== keyToFind) {
      found = findNested(entireObj[key], keyToFind);
      if (found) {
        break;
      }
    }
  }
  return found;
};

const AccordionFormWizard = ({ contextData, callback, orderId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [existingData, setExistingData] = useState([]);
  const refvalue = useMemo(() => {
    const index = existingData.findIndex((ele) => ele.orderId === orderId);
    return {
      currentArray: existingData,
      index: index === -1 ? existingData.length : index,
    };
  }, [existingData]);
  const stateRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (contextData) {
      const { result } = findNested(contextData, 'accordion-form-wizard');
      const { form = null, currentStep } =
        result.find((ele) => ele.orderId === orderId) || [];
      setExistingData(result);
      if (form) {
        setFormData(form);
        setCurrentStep(currentStep);
      }
    }
  }, [contextData]);

  useEffect(() => {
    const onUnload = () => {
      callback(stateRef.current, 'accordion-form-wizard');
    };
    window.addEventListener('beforeunload', onUnload);
    return () => {
      onUnload();
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  useEffect(() => {
    refvalue.currentArray[refvalue.index] = {
      orderId,
      form: formData,
      currentStep: currentStep,
    };
    stateRef.current = refvalue.currentArray;
  }, [formData, currentStep, refvalue]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='md:container md:mx-auto px-4'>
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        {currentStep === 1 && (
          <form className='mt-6' onSubmit={handleNext}>
            <h2>Step 1: Personal Information</h2>
            <div className='mb-2'>
              <label className='block text-sm font-semibold text-gray-800'>
                Name:
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='block w-full px-4 py-2 mt-2 bg-white border rounded'
                />
              </label>
            </div>
            <div className='mb-2'>
              <label>
                Email:
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='block w-full px-4 py-2 mt-2 bg-white border rounded'
                />
              </label>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='px-4 py-2 bg-[#f0f0f0] border rounded'
              >
                Next
              </button>
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <form className='mt-6'>
            <h2>Step 2: Message</h2>
            <div className='mb-2'>
              <label className='block text-sm font-semibold text-gray-800'>
                Message:
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='block w-full px-4 py-2 mt-2 bg-white border rounded'
                ></textarea>
              </label>
            </div>
            <div className='mt-6'>
              <button
                type='button'
                className='mr-2 px-4 py-2 bg-[#f0f0f0] border rounded'
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-[#f0f0f0] border rounded'
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AccordionFormWizard;
