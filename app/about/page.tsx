import Testimonials from '@/components/Testimonials'
import React from 'react'
import Hero from './Hero'
import Partners from './Partners'
import Trusted from './Trusted'
import History from './History'

type Props = {}

const About = (props: Props) => {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Partners />
      <Trusted />
      <History />
      <Testimonials />
    </main>
  )
}

export default About