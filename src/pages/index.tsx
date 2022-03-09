import type { NextPage } from 'next'
import React from 'react'
import { Tools } from '../components/Tools'
import 'react-toastify/dist/ReactToastify.css';



const Home: NextPage = () => {

  return (
    <>
      <main>
        <Tools />
      </main>
    </>
  )
}

export default Home