import { products } from "../constants"
import ProductCard from "../components/ProductCard"
const PopularProducts = () => {
  return (
    <section className="relative  flex flex-col items-start justify-center w-full">
      <div className="flex-1 flex-col my-3">
        <h1 className="font-palanquin text-4xl max-sm:text-xl font-bold my-5">Our <span className="text-coral-red">Popular</span> Products</h1>
        <p className="font-montserrat text-md my-5 text-slate-500">Experience top-notch quality and style with our sought-after selections/ Discover a world of comfort, design, and value</p>
      </div>
      <div className="flex-1 w-full flex justify-between items-center flex-wrap flex-row">
        {products.map((product, index)=>(
          <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} key={index} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts