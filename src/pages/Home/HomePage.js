import { Hero, Faq, FeaturedProducts, Testimonial } from "./components"


export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
    </main>
  )
}
