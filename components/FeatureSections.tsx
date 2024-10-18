import Image from 'next/image'
import React from 'react'

type Props = {}

const FeatureSection1 = (props: Props) => {
  return (
    <section className='p-8'>
        <div className='grid lg:grid-cols-2 container min-h-64'>
            <div className='border-y-white border-y-4 text-white p-8'>
                <p className='-mb-2'>#1 RATED CALCULATOR APP</p>
                <h2 className='text-4xl font-bold mb-4'>99.999999% Accuracy</h2>
                <p className='text-gray-300 mb-8'>From elementary school to university classes, we solve equations unlike any other app using the best technology there is. You will be rewarded with real money if our answers are ever wrong!</p>
                <div className='flex gap-2'>
                  <button className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                    Try Basic Calculator
                  </button>
                  <button className="px-8 py-2 rounded-full border-2 border-purple-400 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                    Go Scientific
                  </button>
                </div>
            </div>
            <div className='border-y-white border-y-4 relative'>
              <Image src="/images/image 2.png" fill objectFit='contain' alt="Calculating on a board "/>
            </div>
        </div>
    </section>
  )
}

const FeatureSection2 = (props: Props) => {
  return (
    <section className='p-8'>
        <div className='grid lg:grid-cols-2 container min-h-64'>
            <div className='border-y-white border-y-4 relative'>
              <Image src="/images/Studying-cuate.png" fill objectFit='contain' alt="Person studying, taking notes"/>
            </div>
            <div className='border-y-white border-y-4 text-white p-8'>
                <p className='-mb-2'>MOST ADVANCED AI NOTES</p>
                <h2 className='text-4xl font-bold mb-4'>Write down your problems, we'll do the rest</h2>
                <p className='text-gray-300 mb-8'>Our latest AI technology will complete all your calculations and equations, simply with a click!</p>
                <div className='flex gap-2'>
                  <button className="px-8 py-2 rounded-full bg-gradient-to-b from-purple-500 to-purple-600 text-white focus:ring-2 focus:ring-purple-400 hover:shadow-xl transition duration-200">
                    Try New Math Notes
                  </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export {FeatureSection1, FeatureSection2}