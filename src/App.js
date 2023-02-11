/** @jsxImportSource theme-ui */

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {ThemeProvider} from "theme-ui";

const theme = { config: { useBorderBox: false }, breakpoints: ['415px', '769px', '1025px', '1441px'],}

function App() {

  return (
      <ThemeProvider theme={theme}>

    <div className="App">
        <h1 className={"title"}>Welcome to CoriMoriMaker</h1>
        <Navbar/>
        <div className='Homewrapper'>
        <Home />
            <Footer/>
        </div>

    <div>
</div>
    </div>
      </ThemeProvider>
  );
}

export default App;
