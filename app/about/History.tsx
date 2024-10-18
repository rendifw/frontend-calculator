import Image from 'next/image'
import React from 'react'

type Props = {}

const History = (props: Props) => {
  return (
    <section className='p-8'>
          <div className='grid lg:grid-cols-2 container min-h-64'>
              <div className='border-y-white border-y-4 text-white p-8'>
                  <p className='-mb-2'>#1 RATED CALCULATOR APP</p>
                  <h2 className='text-5xl font-bold mb-4'>Our History</h2>
                  <p className='text-gray-300 mb-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta obcaecati modi deserunt quia esse, eligendi a harum omnis nemo tenetur provident at error libero culpa sapiente. Voluptatem ea vero quisquam iusto quae reiciendis pariatur iste quidem optio numquam distinctio laborum debitis, sint, voluptatum qui laudantium laboriosam ab quos quo aliquam excepturi hic itaque necessitatibus deleniti. Natus explicabo, molestiae autem delectus quasi minima, veritatis quibusdam placeat iusto voluptatibus at architecto rerum, expedita ipsam amet similique.</p>
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

export default History