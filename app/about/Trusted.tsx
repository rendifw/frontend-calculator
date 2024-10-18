import Image from 'next/image'
import React from 'react'

type Props = {}

const Trusted = (props: Props) => {
    return (
        <section>
            <div className='container'>
                <h1 className='text-6xl font-bold text-center text-white'>Trusted By Thousands of Universities Globally!</h1>
                <div className='flex justify-center gap-16'>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/icons/university.png" width={128} height={128} alt='University Icon' className='' />
                        <h3 className='text-3xl font-semibold text-white text-center'>University 1</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/icons/university.png" width={128} height={128} alt='University Icon' className='' />
                        <h3 className='text-3xl font-semibold text-white text-center'>University 2</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/icons/university.png" width={128} height={128} alt='University Icon' className='' />
                        <h3 className='text-3xl font-semibold text-white text-center'>University 3</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/icons/university.png" width={128} height={128} alt='University Icon' className='' />
                        <h3 className='text-3xl font-semibold text-white text-center'>University 4</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trusted