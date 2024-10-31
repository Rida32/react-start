import logo from './logo.svg';
import './App.css';
import Image1 from "./assets/Image1.jpg"
import Image2 from "./assets/Image2.jpg"
import Image3 from "./assets/Image3.jpg"
import designer from "./assets/designer.jpg"
import trend from "./assets/trend.jpg"
import product1 from "./assets/product1.jpg"
import product2 from "./assets/product2.jpg"
import product3 from "./assets/product3.jpg"
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Product from './components/Product';
import Retail from './components/Retail';

import Image4 from './assets/product4.jpg';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0">
        <div className="row image-side position-relative" style={{padding: "0px", height: "100vh"}}>
            <div id="carouselExampleControls" className="carousel slide h-100 w-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item active"
                        style={{backgroundImage: `url(${Image1})`, backgroundSize: "cover", height: "100vh"}}></div>
                    <div className="carousel-item"
                        style={{backgroundImage:  `url(${Image2})`, backgroundSize: "cover", height: "100vh"}}></div>
                    <div className="carousel-item"
                        style={{backgroundImage:  `url(${Image3})`, backgroundSize:  "cover", height: "100vh"}}></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="image-text-overlay  position-absolute bottom-0 start-0 text-light text-left"
                style={{fontWeight: "bold"}}>
                <h2>Discover the Latest Trends</h2>
                <p>Style that speaks to your soul</p>
                <a>Learn More About Us</a>
            </div>
        </div>
        <div className="container my-5 d-flex justify-content-center align-items-center" style={{height: "25vh"}}>
            <div className="started text-center">
                <h1 className="nail">Get started with <span>Little</span> Fashion</h1>
                <p>Join us to explore the latest trends and stay stylish every day!</p>
            </div>
        </div>
    </div>
    <Retail img={pro}
    <div className="container my-5">
        <div className="row">
            <div className="col-md-3">
                <ul className="nav flex-column sidebar">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">How we work?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Capabilities</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 d-flex">
                <img src={designer} alt="Fashion" classNmae="img-fluid rounded"/>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold mb-3"><span classNmae="text-highlight">Good</span> Design <br/> Ideas for <span
                        className="text-highlight">your</span> fashion</h2>
                <p className="text-muted mb-3">
                    Little Fashion templates come with sign-in / sign-up pages, product listing / product detail, about,
                    FAQs, and contact pages.
                </p>
                <p className="text-muted mb-4">
                    Since this HTML template is based on the Bootstrap 5 CSS library, you can feel free to add more
                    components as needed.
                </p>
                <a href="#" className="text-uppercase fw-bold learn-more">Learn more about us</a>
            </div>
        </div>
    </div>
        <Retail img={trend} description="Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate."/>
        <Retail img={Image2} description="Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate."/>
        <Retail img={Image3} description="Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate."/>
      <div className="container my-5 d-flex justify-content-center align-items-center" style={{height: "15vh"}}>
        <div className="Featured text-center">
            <h1 className="nael">Featured Products</h1>
        </div>
    </div>
    <div className="container my-5">
        <div className="row">
            <Product img={product1} tag="New Arrival" title="Stationary" price="10.00"/>
            <Product img={product2} tag="Low Price" title="Winter outfit" price="15.00"/>
            <Product img={product3} tag="Sale" title="Heels" price="20.00"/>
            <Product img={product2} tag="New arival" title="Jackets" price="90.00"/>
        </div>
    </div>
    <div className="text-center my-4">
        <a href="#" class="view-all-link">View All Products</a>
    </div>
    <Footer/>
    </>
  );
}

export default App;
