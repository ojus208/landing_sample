import Image from 'next/image'
import Nav from './components/Nav'
import { Hero, CustomerReview, Footer, Services, SpecialOffer, Subscribe, SuperQuality, PopularProducts } from './sections'
import './globals.css'

export default function Home() {
  return (
    <main  className='relative'>
     <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
    <Hero/>
    </section>
    <section className='padding'>
    <PopularProducts/>
    </section>
    <section className='padding'>
    <SuperQuality/>
    </section>
    <section className='padding'>
    <Services/>
    </section>
    <section className='padding'>
    <SpecialOffer/>
    </section>
    <section className='padding bg-violet-100'>
    <CustomerReview/>
    </section>
    <section className='padding'>
    <Subscribe/>
    </section>
    </main>
  )
}
