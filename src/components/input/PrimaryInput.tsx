import React from "react";

interface IInput {
	placeholder: string;
	type: string;
	label: string;
	formikTouched: boolean | undefined;
	formikErrors: string | undefined;
	getFieldProps:  object;
    additional?: string;
    star?: boolean;
}

const PrimaryInput: React.FC<IInput> = ({
	type,
	label,
	additional,
    placeholder,
    formikErrors,
    formikTouched,
    getFieldProps,
    star
}) => {
	return (
		<div className="mb-5">
            <p className="font-bold mb-3 whitespace-nowrap">{label} {star && <span className='text-[#ff0000]'>*</span>}</p>
			{additional && (
				<p className="text-gray mb-1 text-sm">{additional}</p>
			)}
			<div className="border-darkBlue border bg-white rounded-md p-2">
				<input
					type={type}
					className="w-full h-full outline-none"
                    placeholder={placeholder}
                    {...getFieldProps}
				/>
            </div>
            {formikTouched && formikErrors  && (
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

export default PrimaryInput;
