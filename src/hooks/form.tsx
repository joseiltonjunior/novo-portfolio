import { useState, useCallback, useContext, createContext } from 'react';

type FormContextData<T> = {
  setFormData(formData: {}): void;
  data: T;
  resetFormData(): void;
  setCurrentStep: (step: number) => void;
  step: number;
};

const FormContext = createContext<{}>({});

const FormProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);

  const setCurrentStep = useCallback((nextStep: number) => {
    setStep(nextStep);
  }, []);

  const setFormData = useCallback(
    (formData: {}) => {
      if (formData) {
        const newData = { ...data, ...formData };
        setData(newData);
      }
    },
    [data],
  );

  const resetFormData = useCallback(() => {
    setData({});
  }, []);

  return (
    <FormContext.Provider
      value={{ setFormData, data, resetFormData, setCurrentStep, step }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useForm<T>(): FormContextData<T> {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context as FormContextData<T>;
}

export { FormProvider, useForm };
