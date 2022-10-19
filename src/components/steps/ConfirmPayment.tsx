import React from 'react'
import check from '../../assets/images/Vector.png'

interface IConfirm {
  goToFirstPage : () =>void;
}

const ConfirmPayment = ({ goToFirstPage }: IConfirm) => {
  return (
    <div className='flex justify-center items-center h-full w-full'>

      <div className='mt-10 shadow-xl rounded-lg h-80 w-full bg-white flex-col flex px-4 md:px-32 justify-center items-center '>
        <div className='h-16 w-16 rounded-full flex justify-center items-center mb-4 bg-white shadow-md'>
          <img src={check} alt='check' />
        </div>

        <p className='text-darkBlue text-xl md:text-3xl font-bold text-center lg:text-left lg:mr-auto '>Purchase Completed</p>
        <p className='mt-6 text-center lg:text-left '>Please check your email for details concerning
          this transaction</p>
        
        <p onClick={goToFirstPage} className='font-bold cursor-pointer text-primaryYellow underline text-center lg:mr-auto mt-10'>Return Home</p>

      </div>
    </div>
    
  )
}

export default ConfirmPayment