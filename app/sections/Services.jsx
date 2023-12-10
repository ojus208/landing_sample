import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="flex lg:flex-row flex-col w-full justify-center items-center lg:justify-between gap-16  ">
      {services.map((service, index)=>(
        <ServiceCard imgURL={service.imgURL} label={service.label} subtext={service.subtext} key={index} />
      ))}
    </section>
  )
}

export default Services