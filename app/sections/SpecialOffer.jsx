import Image from "next/image"
import Button from "../components/Button"
import { offer } from "../assets/images"


const SpecialOffer = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-center items-center lg:justify-between gap-10">
      <div className="flex-2 flex justify-center items-center">
        <Image src={offer} alt="offer image" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="info-text text-slate-500 leading-normal mt-4 font-montserrat">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="info-text text-slate-500 leading-normal mt-4 font-montserrat">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex flex-row justify-start items-center gap-5 mt-5">
          <Button label="View Details" fill={true} />
          <Button label="Learn More"  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer