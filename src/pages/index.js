import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Wigs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Sidebar/>
    <div className="flex flex-col w-screen">
    <Navbar/>
    <Hero/>
    </div>
    
    </div>
  )
}
