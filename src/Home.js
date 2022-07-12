import Selfie from './Cheryl Mellor.jpg';

const Home = () => {
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
    <div className='Links_section'>
        <h2><a href='#Amigurumi_section'>Amigurumi</a></h2>
        <h2><a href='#Quilting_section'>Quilts</a></h2>

    </div>

</div>
    )
}

export default Home