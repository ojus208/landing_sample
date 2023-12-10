import Image from "next/image"

const Button = ({label, iconURL, fill}) => {
  return (
    <button className={'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ' + (fill? "bg-coral-red  text-white " : "text-coral-red border-coral-red")}>
        {label}
        {iconURL? <Image src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' /> : ""}
    </button>
  )
}

export default Button