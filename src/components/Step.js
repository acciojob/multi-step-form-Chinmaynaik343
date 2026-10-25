
import React from "react";

function Step({
    currentStep,
    formData,
    handleChange,
    nextStep,
    previousStep,
    handleSubmit
}) {
    return (
        <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <div className="step">
                    <h2>Personal Information</h2>

                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}

            {currentStep === 2 && (
                <div className="step">
                    <h2>Car Information</h2>

                    <label htmlFor="model">Car Model</label>
                    <input
                        type="text"
                        id="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="car_price">Car Price</label>
                    <input
                        type="number"
                        id="car_price"
                        value={formData.car_price}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </div>
            )}

            {currentStep === 3 && (
                <div className="step">
                    <h2>Payment Information</h2>

                    <label htmlFor="card_info">Card Information</label>
                    <input
                        type="text"
                        id="card_info"
                        value={formData.card_info}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="expiry_date">Expiry Date</label>
                    <input
                        type="month"
                        id="expiry_date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}

            <div className="buttons">
                {currentStep > 1 && (
                    <button
                        type="button"
                        onClick={previousStep}
                    >
                        Previous
                    </button>
                )}

                {currentStep < 3 && (
                    <button
                        type="button"
                        onClick={nextStep}
                    >
                        Next
                    </button>
                )}

                {currentStep === 3 && (
                    <button type="submit">
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
}

export default Step;
