import React from 'react'
import LandingLayout from '@/components/eddy_item/layout/landing-layout'

export default function Landing() {
  return (
    <>
      <h1>起始頁版面(Landing)</h1>
    </>
  )
}

Landing.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>
}
