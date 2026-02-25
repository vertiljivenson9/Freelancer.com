import Navbar from './sections/navbar'
import Hero from './sections/hero'
import Categories from './sections/categories'
import FeaturedFreelancers from './sections/featuredFreelancers'
import RecentJobs from './sections/recentJobs'
import HowItWorks from './sections/howItWorks'
import Testimonials from './sections/testimonials'
import CTA from './sections/cta'
import Footer from './sections/footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedFreelancers />
        <RecentJobs />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App