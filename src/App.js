import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

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
    <Footer/>
</div>
    </div>

  );
}

export default App;
