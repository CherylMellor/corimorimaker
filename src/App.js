import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import PhotoCards from "./PhotoCards";
import PhotoCardQuilts from "./PhotoCardQuilts";

function App() {
  return (

    <div className="App">
        <background-image/>
        <div>
        <h1 className={"title"}>CoriMoriMaker</h1>
    </div>
        <Navbar/>
        <div>
        <Home />
        </div>
          <div>
        <h2 className='section_heading' id='Amigurumi_section'>Amigurumi projects</h2>
          <PhotoCards />
      </div>
        <div>
    <h2 className='section_heading' id='Quilting_section'>Quilting projects</h2>
    <PhotoCardQuilts />
    </div>
    <div>
    <Footer/>
</div>
    </div>

  );
}

export default App;
