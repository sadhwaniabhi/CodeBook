import { Filterbar } from "./components/Filterbar"
import { ProductsCard } from "../../components/Elements/ProductCard"

export const ProductsPage = () => {
  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="items-center text-black text-2xl font-bold dark:text-white mb-5">All eBooks (15)</span>
          <span>
            <button className="text-xl font-bold text-center p-2 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white  dark:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap px-3">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          
        </div>
      </section>
    </main>
  )
}
