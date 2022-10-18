import React from "react";

interface IDropdown {
    label: string;
    options: string[];
    star?: boolean;
    formikTouched: boolean | undefined;
    formikErrors: string | undefined;
    getFieldProps: object;
}

const Dropdown: React.FC<IDropdown> = ({ label, star, options, formikErrors, formikTouched, getFieldProps }) => {
	return (
		<div className="mb-5">
            <p className="font-bold mb-3 whitespace-nowrap">{label} {star && <span className='text-[#ff0000]'>*</span>}</p>

			<div className="border-darkBlue border bg-white rounded-md p-2">
                <select {...getFieldProps} className="w-full outline-none">
                    {options.map((option, index) => (
                        <option key={index}>{ option}</option>

                        
                    ))}
					
				</select>
            </div>
            {formikTouched && formikErrors && (
                <div
                    className={
                        "block text-left  mt-1 font-regular text-xs   text-red-500"
                    }
                >
                    *{formikErrors}
                </div>
            )}
		</div>
	);
};

export default Dropdown;
