import JoinForm from '@/components/join-form/JoinForm';
import JoinForm2 from '@/components/join-form/JoinForm2';
import JoinForm3 from '@/components/join-form/JoinForm3';
import JoinForm4 from '@/components/join-form/JoinForm4';
import JoinForm5 from '@/components/join-form/JoinForm5';
import JoinLayout from '@/layouts/JoinLayout';
import { useState } from 'react';

export default function JoinPage() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});

	const nextStep = () => {
		setStep(prevStep => Math.min(prevStep + 1, 5));
	};

	const prevStep = () => {
		setStep(prevStep => Math.max(prevStep - 1, 1));
	};

	const updateFormData = (newData: any) => {
		setFormData(prevData => ({ ...prevData, ...newData }));
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return <JoinForm nextStep={nextStep} updateFormData={updateFormData} />;
			case 2:
				return (
					<JoinForm2
						nextStep={nextStep}
						prevStep={prevStep}
						updateFormData={updateFormData}
					/>
				);
			case 3:
				return (
					<JoinForm3
						nextStep={nextStep}
						prevStep={prevStep}
						updateFormData={updateFormData}
					/>
				);
			case 4:
				return (
					<JoinForm4
						nextStep={nextStep}
						prevStep={prevStep}
						updateFormData={updateFormData}
					/>
				);
			case 5:
				return <JoinForm5 prevStep={prevStep} formData={formData} />;
			default:
				return <JoinForm nextStep={nextStep} updateFormData={updateFormData} />;
		}
	};

	return <JoinLayout>{renderForm()}</JoinLayout>;
}
