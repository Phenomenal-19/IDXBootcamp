import React,{useState,useEffect} from "react";
import { About } from "./components/about";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import { Features } from "./components/features";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
// function App() {
//   <>
//   <About/>
//   <Navigation/>
//   </>
// }

const App = () => {
  
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
  
       <Navigation/>
       
      <Header data={landingPageData.Header}/>
      
      <Features data={landingPageData.Features}/>
      
      <About data={landingPageData.About}/>
    
      <Services data={landingPageData.OurServices}/>
   
      <Gallery data={landingPageData.Portfolio}/>

      <Team data={landingPageData.OurTeam}/>
      
      <Testimonials data={landingPageData.OurClientTestimonials}/>

      <Contact data={landingPageData.Contact}/>

    </div>
  );
};

export default App;
