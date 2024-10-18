import Image from 'next/image'
import React from 'react'

type Props = {}

const Partners = (props: Props) => {
    return (
        <section className='container max-w-6xl text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div className="bg-gray-900 p-6 rounded-md text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">From basic to the hardest math questions, we can solve it!</h2>
                    <p className='mb-8 text-gray-300'>Partner up with us to get exclusive features and benefits for your organization's math needs!</p>
                    <button className="bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-full">
                        Contact Sales
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 text-center p-6 rounded-lg flex flex-col items-center">
                        <div className="text-6xl mb-4"><Image src="/icons/.png" alt="Icon" width={128} height={128} /></div>
                        <p className="text-xl font-bold">Schools</p>
                    </div>
                    <div className="bg-gray-800 text-center p-6 rounded-lg flex flex-col items-center">
                        <div className="text-6xl mb-4"><Image src="/icons/.png" alt="Icon" width={128} height={128} /></div>
                        <p className="text-xl font-bold">Universities</p>
                    </div>
                    <div className="bg-gray-800 text-center p-6 rounded-lg flex flex-col items-center">
                        <div className="text-6xl mb-4"><Image src="/icons/.png" alt="Icon" width={128} height={128} /></div>
                        <p className="text-xl font-bold">Tech Companies</p>
                    </div>
                    <div className="bg-gray-800 text-center p-6 rounded-lg flex flex-col items-center">
                        <div className="text-6xl mb-4"><Image src="/icons/.png" alt="Icon" width={128} height={128} /></div>
                        <p className="text-xl font-bold">Research</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Partners