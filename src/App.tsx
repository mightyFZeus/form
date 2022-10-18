import React, { useState  } from "react";
import BillingInfo from "./components/steps/BillingInfo";
import ConfirmPayment from "./components/steps/ConfirmPayment";
import PersonalInfo from "./components/steps/PersonalInfo";

const App = () => {
	const formSteps = ["Personal Info", "Billing Info", "Confirm Payment"];

  const [currentStep, setCurrentStep] = useState(0);
  

  const moveToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1)

  }

	

	

	return (
		<div className="gradient h-screen">
			<div className="lg:max-w-2xl mx-auto p-10 lg:py-16">
				<div>
					<p className="lg:text-3xl text-xl font-bold text-darkBlue  mb-10 ">
						Complete your Purchase
					</p>
					<div className="flex justify-between">
						{formSteps.map((step, index) => (
							<div key={index}>
								<p
									className={
										index === currentStep
											? "text-primaryYellow font-bold text-sm lg:text-md"
											: "text-gray font-bold  text-sm lg:text-md"
									}
								>
									{step}
								</p>
							</div>
						))}
					</div>
					<div
						className="border-b  border-gray mt-6  w-full h-2 relative"
					>
						<div
							style={{
								left:
									currentStep === 0
										? "0%"
										: currentStep === 1
										? "35%"
										: "77%",
								position: "absolute",
							}}
							className={
									 "h-2 rounded-lg bg-primaryYellow  relative top-[2px] w-[23%] "
							}
						></div>
					</div>
        </div>
        {currentStep === 0
          ? <PersonalInfo moveToNextStep= { moveToNextStep } />
          : currentStep === 1
            ? <BillingInfo />
            : <ConfirmPayment />}

			</div>
		</div>
	);
};

export default App;
