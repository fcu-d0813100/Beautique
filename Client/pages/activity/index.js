import React, { useState, useEffect } from 'react'
import Header from '@/components/header'
import Styles from '@/styles/activity.scss'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Index(props) {
  return (
    <>
      <Header />
      <div className="{Style.}">index</div>
      <Footer />
    </>
  )
}
