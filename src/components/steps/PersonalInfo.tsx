import React from 'react'
import PrimaryInput from '../input/PrimaryInput'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PrimaryButton from '../button/PrimaryButton'

interface IPersonalInfo {
  moveToNextStep: () => void;
}

const PersonalInfo: React.FC<IPersonalInfo> = ({ moveToNextStep }) => {
  return (
    <div className='mt-10'>

      <Formik
        initialValues={{
          name: '',
          email: "",
          address1: "",
          address2: "",
          lga: "",
          state: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("First Name is required"),
          address1: Yup.string().required("Last Name is required"),
          address2: Yup.string().required("Delivery address is required"),
          email: Yup.string()
            .email("invalid email address")
            .required("Email is required"),

          state: Yup.string().required("State is required"),
          lga: Yup.string().required("State is required"),
        })}

        onSubmit={(values, { setSubmitting }) => {

          console.log(values)
          moveToNextStep()
          setSubmitting(false)
        }}


      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <PrimaryInput
              type='text'
              label="Name on Card"
              placeholder='Opara Linus Ahmed'
              formikTouched={formik.touched.name}
              formikErrors={formik.errors.name}
              getFieldProps={{
                ...formik.getFieldProps('name'),
              }}
            />
            <PrimaryInput
              type='email'
              label="Email Address"
              additional='The purchase receipt would be sent to this address'
              placeholder='OparaLinusAhmed@devmail.com'
              formikTouched={formik.touched.email}
              formikErrors={formik.errors.email}
              getFieldProps={{
                ...formik.getFieldProps('email'),
              }}
            />
            <PrimaryInput
              type='text'
              label="Address 1"
              placeholder='The address of the user goes here'
              formikTouched={formik.touched.address1}
              formikErrors={formik.errors.address1}
              getFieldProps={{
                ...formik.getFieldProps('address1'),
              }}
            />
            <PrimaryInput
              type='text'
              label="Address 2"
              placeholder='and here'
              formikTouched={formik.touched.address2}
              formikErrors={formik.errors.address2}
              getFieldProps={{
                ...formik.getFieldProps('address2'),
              }}
            />
            <PrimaryInput
              type='text'
              label="Local Government"
              placeholder='Surulere'
              formikTouched={formik.touched.lga}
              formikErrors={formik.errors.lga}
              getFieldProps={{
                ...formik.getFieldProps('lga'),
              }}
            />
            {/* <button type='submit' >next</button> */}
            <PrimaryButton onClick={formik.handleSubmit} text="Next" />

          </form>
        )}
      </Formik>
    </div>
  )
}

export default PersonalInfo