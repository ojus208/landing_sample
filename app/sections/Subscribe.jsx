import Button from "../components/Button"


const Subscribe = () => {
  return (
    <section className="flex flex-wrap justify-between items-center gap-10">
      <div>
        <h1 className="text-4xl font-bold font-palanquin ">Sign Up from <span className="text-coral-red">Updates</span> & Newsletter</h1>
      </div>
      <div className="flex rounded-full md:w-full sm:w-full lg:w-fit  px-10 py-5 border-2 border-coral-red">
        <input type="text" className="input" placeholder="Enter Your Email" />
        <Button label="Sign up" fill={true} />
      </div>
    </section>
  )
}

export default Subscribe