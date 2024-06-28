import { ProductsCard } from "../../../components/Elements/ProductCard"
export const FeaturedProducts = () => {
  return (
    <section className="my-20">
      <h1 className="text-center text-2xl underline underline-offset-8 mb-5 font-semibold dark:text-slate-100">Featured eBooks</h1>
      <div className="flex flex-wrap justify-around">
        < ProductsCard />
        < ProductsCard />
        < ProductsCard />
      </div>
    </section>
  )
}
