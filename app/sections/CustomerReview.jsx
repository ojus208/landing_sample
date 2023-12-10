import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold font-palanquin">What Our <span className="text-coral-red">Customers</span> Say?</h1>
        <p className="info-text text-slate-500 text-center mt-4 font-montserrat leading-normal">Hear genuine stories our satisfied customers about thier exceptional expericences with us.</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 lg:justify-between items-center mt-5">
        {reviews.map((review, index)=>(
          <ReviewCard imgURL={review.imgURL} name={review.customerName} rating={review.rating} feedback={review.feedback} key={index} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview