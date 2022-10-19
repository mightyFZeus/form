import React, { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import BillingInfo from "./components/steps/BillingInfo";
import ConfirmPayment from "./components/steps/ConfirmPayment";
import PersonalInfo from "./components/steps/PersonalInfo";

const App = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const moveToNextStep = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const goToFirstPage = () => {
		setCurrentStep(0)
	}

	return (
		<div className="gradient h-screen">
			<div className="lg:max-w-2xl mx-auto p-10 lg:py-16 h-full ">
				<StepIndicator currentStep={currentStep} />
				{currentStep === 0 ? (
					<PersonalInfo moveToNextStep={moveToNextStep} />
				) : currentStep === 1 ? (
					<BillingInfo moveToNextStep={moveToNextStep} />
				) : (
							<ConfirmPayment goToFirstPage={goToFirstPage} />
				)}
			</div>
		</div>
	);
};

export default App;
