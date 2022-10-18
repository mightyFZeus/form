import React from 'react'


interface IBUtton{
    text: string;
    onClick: () =>void

}

const PrimaryButton: React.FC<IBUtton> = ({ text, onClick }) => {
  return (
      <div onClick={onClick} className=' flex gap-8 items-center'>
          <button className='submit-btn px-16 py-3' type='submit'>
              <p className='font-semibold text-white text-sm '>{text}</p>

          </button>
          <p className='text-darkBlue font-bold'>Cancel payment</p>

      </div>
  )
}

export default PrimaryButton