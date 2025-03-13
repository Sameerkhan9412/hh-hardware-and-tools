"use-client";
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Link href={"/about"}>I am footer</Link>
    </div>
  )
}

export default Footer