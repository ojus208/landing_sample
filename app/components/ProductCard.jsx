import Image from "next/image"
import {star} from '../assets/icons'

const ProductCard = ({imgURL, name, price}) => {
  return (
    <div className="w-fit flex flex-col my-5">
        <div className="rounded-md bg-card w-fit my-3">
        <Image 
        src={imgURL}
        alt={name}
        />
        </div>
        <div>
            <h1 className=" flex items-center justify-start text-2xl gap-2 font-palanquin text-slate-500">
            <Image
            src={star}
            alt="star image"
            className="w-2xl"
            
            /> (4.5) </h1>
            <h1 className="my-3 text-2xl font-bold font-palanquin">{name}</h1>
            <p className="text-xl text-coral-red font-bold my-0">{price}</p>

        </div>
    </div>
  )
}

export default ProductCard