import Navbar from "@/Components/Home/Navbar"
import Hero from "@/Components/Home/Hero"
import Services from "@/Components/Home/Services"
import Testimonial from "@/Components/Home/Testimonials/Testimonial"
import Pricing from "@/Components/Home/Pricing"
import Blog from "@/Components/Home/Blog"
import Contact from "@/Components/Home/Contact"
import Footer from "@/Components/Home/Footer"

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
    <Footer/>

   </div>
  )
}

export default index