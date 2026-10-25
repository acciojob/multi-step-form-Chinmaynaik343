
import React, { useState } from "react";
import "./App.css";
import Step from "./Step";

function App() {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        model: "",
        car_price: "",
        card_info: "",
        expiry_date: ""
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    const previousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="container">
            <h1>Multi-Step Form</h1>

            <p>Step {currentStep} of 3</p>

            <Step
                currentStep={currentStep}
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                previousStep={previousStep}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
