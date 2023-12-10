import Image from "next/image"
import { star } from "../assets/icons"


const ReviewCard = ({imgURL, name, feedback, rating}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-md m-2">
        <Image src={imgURL} alt={name} className="w-[120px] h-[120px] rounded-full" />
        <p className="info-text text-center mt-4">{feedback}</p>
        <div className="flex justify-center items-center gap-2 mt-2 text-xl text-slate-500">
            <Image src={star} alt="rating icon" />
            <span>({rating})</span>
        </div>
        <h3 className="mt-2 text-2xl font-bold">{name}</h3>
    </div>
  )
}

export default ReviewCard