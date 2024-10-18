import React from 'react'

type Props = {}

const CTA = (props: Props) => {
  return (
    <section className='p-8'>
        <div className='grid container min-h-64'>
            <div className='border-y-white border-y-4 text-white p-8 flex justify-center items-center'>
                <h2 className='text-4xl font-bold mb-4'>It's that simple</h2>
                <p className='text-gray-300 mb-8'>Our latest AI technology will complete all your calculations and equations, simply with a click!</p>
                <div className='flex gap-2'>
                  <button className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                    Try Calculating
                  </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA