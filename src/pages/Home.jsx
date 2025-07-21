import Hero from "../components/Hero";
import AnimatedBowl from "../components/AnimatedBowl";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
// import  useLocoScroll  from '../scroll';


const Home = () => {
  // const scrollRef = useLocoScroll(true);

  return (
    <div>
      <Hero />
      <AnimatedBowl />
      <Gallery/>
      <Footer/>
    </div>

  )
}

export default Home