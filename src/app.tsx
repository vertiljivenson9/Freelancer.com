import { Navbar } from './sections/navbar'
import { Hero } from './sections/hero'
import { Categories } from './sections/categories'
import { FeaturedFreelancers } from './sections/featuredfreelancers'
import { RecentJobs } from './sections/recentjobs'
import { HowItWorks } from './sections/howitworks'
import { Testimonials } from './sections/testimonials'
import { CTA } from './sections/cta'
import { Footer } from './sections/footer'

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