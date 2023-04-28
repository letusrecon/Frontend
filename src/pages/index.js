import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Services from "@/Components/Services"
import Testimonial from "@/Components/Testimonials/Testimonial"
import Pricing from "@/Components/Pricing"
import Blog from "@/Components/Blog"
import Contact from "@/Components/Contact"

const index = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Testimonial/>
    <Pricing/>
    <Blog/>
    <Contact/>

   </div>
  )
}

export default index