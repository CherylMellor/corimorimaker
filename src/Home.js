import Selfie from './Cheryl Mellor.jpg';
import {useState} from "react";
import OnHook from "./OnHook";
import PhotoCards from "./PhotoCards";
import PhotoCardQuilts from "./PhotoCardQuilts";

const Home = () => {
    const [favAmigurumi, setFavAmigurumi] = useState('');
    const handleFavAmigurumi = () => {
        setFavAmigurumi('the Monster');
    }
    const [favQuilt, setFavQuilt] = useState('');
    const handleFavQuilt = () => {
        setFavQuilt('Judiths quilt');
    }
    const [favCrochet, setFavCrochet] = useState('');
    const handleFavCrochet = () => {
        setFavCrochet('Striped scarf');
    }

    return (
<div className={"Home-Page"}>
    <h2 className={"sub-title"}>Welcome to CoriMoriMaker</h2>
    <div className={'intro-section'}>
        <div className={'pic-box'}>
    <img src={Selfie} alt="Cheryl Mellor selfie" className={'selfie'}/>
        </div>
    <div>
        <p className="introduction">Hello. My name is Cheryl Mellor and I love crafting.</p><br></br>
        <p>I started with a needle and thread and made a baby blanket, decided I liked it so bought a sowing machine. I also love crochet. I picked up the craft 5 years ago
        with a simple hat and have progressed to ever more complicated projects</p><br></br>
        <p>Scroll down or click the links to see what I've made</p>
</div>
</div>
    <OnHook />
    <div className='links-section'>
        <h2><a href='#Amigurumi_section'>Amigurumi</a></h2>
        <h2><a href='#Crochet_section'>Crochet</a></h2>
        <h2><a href='#Quilting_section'>Quilts</a></h2>
    </div>

    <div classname='completed-projects'>
        <h2 className='section_heading' id='Amigurumi_section'>Amigurumi projects</h2>
        <PhotoCards />
    </div>
    <div>
        <h2 className='section_heading' id='Crochet_section'>Crochet projects</h2>
        <PhotoCards />
    </div>
    <div>
        <h2 className='section_heading' id='Quilting_section'>Quilting projects</h2>
        <PhotoCardQuilts />
    </div>

    <div className='button-section'>
        <div className='button-response-section'>
    <button onClick={handleFavAmigurumi}>Click me to find out my favourite amigurumi</button>
    <p>My favourite amigurumi is {favAmigurumi}</p>
        </div>
        <div className='button-response-section'>
            <button onClick={handleFavCrochet}>Click me to find out my Fav Crochet</button>
            <p>My favourite crochet is {favCrochet}</p>
        </div>
        <div className='button-response-section'>
    <button onClick={handleFavQuilt}>Click me to find out my favourite quilt</button>
    <p>My favourite quilt is {favQuilt}</p>
        </div>
    </div>
</div>
    )
}

export default Home