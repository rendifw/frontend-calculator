import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className='py-28 text-white text-center'>
            <div className={`container flex flex-col justify-center items-center max-w-5xl`}>
                <h1 className='text-6xl font-extrabold mb-2'>Empowering Calculations With AI Precision</h1>
                <p className='max-w-lg text-gray-300 mb-8'>Our mission is to redefine the way you solve complex equations, blending cutting-edge AI with an intuitive interface, designed for everyone.Our mission is to redefine the way you solve complex equations, blending cutting-edge AI with an intuitive interface, designed for everyone.</p>
            </div>
        </section>
    )
}

export default Hero