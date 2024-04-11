import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./component/Slider.js"
import jsondata from "./data/data.json"
import Offers from './component/Offers.js';
import Heading from './component/Heading.js'
import StarProduct from "./component/StarProduct.js"
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js';
import HotAccessories from './component/HotAccessories.js';
import ProductReviews from './component/ProductReviews.js';
import Videos from './component/Videos.js';
import Banner from './component/Banner.js';
import Footer from './component/Footer.js';
import NavOptions from "./component/NavOptions"


const banner = jsondata.banner;
const offer = jsondata.offer;
const starProduct = jsondata.starProduct;
const hotAccessories = jsondata.hotAccessories;
const hotAccessoriesCover = jsondata.hotAccessoriesCover

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={jsondata.miPhones} redmiPhones={jsondata.redmiPhones}
      tv={jsondata.tv} laptop={jsondata.laptop} fitnessAndLifeStyle={jsondata.fitnessAndLifeStyle} home={jsondata.home} 
      accessories={jsondata.accessories} audio={jsondata.audio} />


      <Slider start={banner.start} />
      <Offers offer={offer}/> 
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={starProduct}/>
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      {/* Define your routes */}
      <Routes>
      <Route exact path="/music" element={<HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music} />} />
      </Routes>

      <Routes>
      <Route exact path="/smartDevice" element={<HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice} />} />
      </Routes>

      <Routes>
      <Route exact path="/home" element={<HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home} />} />
      </Routes>

      <Routes>
      <Route exact path="/lifestyle" element={<HotAccessories lifestyle={hotAccessories.lifeStyle} lifestyleCover={hotAccessoriesCover.lifeStyle} />} />
      </Routes>

      <Routes>
      <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      
      <Heading text = "PRODUCT REVIEWS"/>

      <ProductReviews productReviews={jsondata.productReviews}/>

      <Heading text="VIDEOS"/>

      <Videos videos={jsondata.videos} />

      <Heading text="IN THE PRESS"/>

      <Banner banner={jsondata.banner.end} />

      <Footer footer={jsondata.footer}/>
      
    </Router>
  );
}

export default App;
