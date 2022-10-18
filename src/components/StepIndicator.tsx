import React from 'react'


interface IStep {
    currentStep: number;
} 

const StepIndicator = ({ currentStep }: IStep) => {
    const formSteps = ["Personal Info", "Billing Info", "Confirm Payment"];

  return (
      <div>
          {currentStep !== 2 && <div>
              <p className="lg:text-3xl text-xl font-bold text-darkBlue  mb-10 ">
                  Complete your Purchase
              </p>
              <div className="flex justify-between">
                  {formSteps.map((step, index) => (
                      <div key={index}>
                          <p
                              className={
                                  index === currentStep
                                      ? "text-primaryYellow font-bold text-xs lg:text-xl"
                                      : "text-gray font-bold  text-xs lg:text-xl"
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
          </div>}
    </div>
  )
}

export default StepIndicator