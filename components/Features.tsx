import Image from 'next/image'
import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <section className='p-8'>
        <div className="container grid grid-cols-2 lg:grid-cols-4">
            <div className='bg-[#222] relative flex flex-col items-center text-white p-4 gap-2 border-b-white border-b-4 lg:border-b-0 border-r-white border-r-4 max-h-48'>
                <Image src="" objectFit='cover' alt='Arithmetics Image'/>
                <h3 className='text-3xl font-medium'>Arithmetics</h3>
            </div>
            <div className='bg-[#222] relative flex flex-col items-center text-white p-4 gap-2 border-b-white border-b-4 lg:border-b-0 lg:border-r-white lg:border-r-4 max-h-48'>
                <Image src="" objectFit='cover' alt='Algebra Image'/>
                <h3 className='text-3xl font-medium'>Algebra</h3>
            </div>
            <div className='bg-[#222] relative flex flex-col items-center text-white p-4 gap-2 border-r-white border-r-4 max-h-48'>
                <Image src="" objectFit='cover' alt='Calculus Image'/>
                <h3 className='text-3xl font-medium'>Calculus</h3>
            </div>
            <div className='bg-[#222] relative flex flex-col items-center text-white p-4 gap-2 max-h-48'>
                <Image src="" objectFit='cover' alt='Statistics Image'/>
                <h3 className='text-3xl font-medium'>Statistics</h3>
            </div>
        </div>
    </section>
  )
}

export default Features