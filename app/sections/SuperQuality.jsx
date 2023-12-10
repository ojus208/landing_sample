import Image from 'next/image'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='flex w-full  lg:flex-row flex-col justify-between items-center  '>
      <div className='relative my-5 flex-1 flex-col items-start justify-center '>
        <h1 className='text-4xl font-bold font-Palanquin my-3 '>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='mt-4 lg:max-w-lg info-text '>Ensuring premium comfort and style, out meticulosly crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='mt-4  mb-4 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label="Shop now" iconURL={arrowRight}   />
      </div>
      
      <div className='flex-1 flex justify-center items-center  '>
      <Image 
      src={shoe8}
      alt="shoe image of nike"
      />
      </div>
    </section>
  )
}

export default SuperQuality