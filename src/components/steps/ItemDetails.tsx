import React from "react";
import PrimaryButton from "../button/PrimaryButton";


interface IDetails {
    moveToNextStep: () => void;
}

const ItemDetails = ({ moveToNextStep }:IDetails) => {
	const item = [
		{
			name: "Data science and usability",
			price: "50,000.00",
		},
		{
			name: "Shipping",
			price: "00",
		},
	];
	return (
        <>
            <div className="bg-white rounded-xl shadow-xl mt-10 ">
                <div className="flex justify-around h-10 items-center font-semibold  rounded-t-xl bg-blue">
                    <p className="text-white">Item Name</p>
                    <p className="text-white">N Price</p>
                </div>
                <div className=" text-left ">
                    {item.map((item, index) => (
                        <div className=" flex justify-around mt-10 text-sm md:text-md text-darkBlue  px-4 md:px-14" key={index}>
                            <p className="text-left">{item.name}</p>
                            <p className='font-semibold ml-auto'>{item.price}</p>
                        </div>
                    ))}
                    <div className='md:px-14 px-4 mt-10 pb-10'>
                        <hr className='bg-darkBlue md:px-14' />
                        <div className="border-darkBlue border bg-white rounded-md p-2 text-darkBlue flex justify-between mt-10">
                            <p>Total</p>
                            <p>N 50,000.00</p>

                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <PrimaryButton
                    onClick={moveToNextStep}
                    text="Pay"
                />

            </div></>
	);
};

export default ItemDetails;
