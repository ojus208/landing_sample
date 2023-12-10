import Image from "next/image"

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-col items-start justify-normal shadow-3xl flex-1  rounded-[20px] px-10 py-16 w-full">
        <div className="bg-coral-red w-11 h-11 rounded-full flex justify-center items-center "><Image src={imgURL} alt={label} width={25} height={25} /></div>
        <h3 className="mt-4 font-bold font-montserrat text-3xl leading-normal">{label}</h3>
        <p className="mt-4 text-slate-500 font-palanquin text-lg break-words leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard