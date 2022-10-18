import React, { useState } from "react";
import PrimaryInput from "../input/PrimaryInput";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../button/PrimaryButton";
import Dropdown from "../input/Dropdown";
import ItemDetails from "./ItemDetails";

interface IBillingInfo {
	moveToNextStep: () => void;
}

const BillingInfo: React.FC<IBillingInfo> = ({ moveToNextStep }) => {
	const [showDetails, setShowDetails] = useState(false);

	const options = ["Please choose an option", "Visa", "Mastercard", "Verve"];

	if (showDetails) {
		return <ItemDetails moveToNextStep={moveToNextStep} />;
	}

	return (
		<div className="mt-10 pb-10 lg:pb-20">
			<Formik
				initialValues={{
					name: "",
					CardNumber: "",
					expiryDate: "",
					ccv: "",
					c: "",
				}}
				validationSchema={Yup.object({
					name: Yup.string().required(" Name of card is required"),
					CardNumber: Yup.string().required("Card Number is required").length(16),
					expiryDate: Yup.string().required("ExpiryDate is required").length(5),
					ccv: Yup.string().required(" Cvv is required").length(3),
					c: Yup.string().required("Card type is required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					setShowDetails(true);
					setSubmitting(false);
				}}
			>
				{(formik) => (
					<form onSubmit={formik.handleSubmit}>
						<PrimaryInput
							type="text"
							label="Name on Card"
							placeholder="Opara Linus Ahmed"
							formikTouched={formik.touched.name}
							formikErrors={formik.errors.name}
							getFieldProps={{
								...formik.getFieldProps("name"),
							}}
							star
						/>
						<Dropdown
							formikTouched={formik.touched.c}
							formikErrors={formik.errors.c}
							getFieldProps={{
								...formik.getFieldProps("c"),
							}}
							star
							label="Card Type"
							options={options}
						/>
						<div className="md:flex gap-2 justify-between">
							<div className="md:w-[55%]">
								<PrimaryInput
									type="number"
									label="Card Details"
									placeholder="44960 44960 44960 44960"
									formikTouched={formik.touched.CardNumber}
									formikErrors={formik.errors.CardNumber}
									getFieldProps={{
										...formik.getFieldProps("CardNumber"),
									}}
									star
								/>
							</div>
							<div className="md:w-[17%]">
								<PrimaryInput
									type=""
									label="Expiry Date"
									placeholder="04 / 23"
									formikTouched={formik.touched.expiryDate}
									formikErrors={formik.errors.expiryDate}
									getFieldProps={{
										...formik.getFieldProps("expiryDate"),
									}}
									star
								/>
							</div>
							<div className="md:w-[17%]">
								<PrimaryInput
									type="number"
									label="CVV"
									placeholder="923"
									formikTouched={formik.touched.ccv}
									formikErrors={formik.errors.ccv}
									getFieldProps={{
										...formik.getFieldProps("ccv"),
									}}
									star
								/>
							</div>
						</div>

						<div className="mt-10">
							<PrimaryButton
								onClick={formik.handleSubmit}
								text="Next"
							/>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default BillingInfo;
