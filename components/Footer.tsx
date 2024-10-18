import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='container flex flex-col items-center border-t-white border-t-2 text-white gap-2 p-8'>
        <h2 className='text-3xl'>LOGO</h2>
        <p className='text-gray-300'>Copyright NAME ©2024 All Rights Reserved</p>
    </footer>
  )
}

export default Footer