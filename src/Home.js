import React from 'react';
import Selfie from './Cheryl Mellor.jpg';
import OnHook from "./OnHook";
import PatternLinks from "./PatternLinks";
import CompletedProjectsAccordion from './CompletedProjectsAccordion';
import FutureProjects from "./FutureProjects";
const Home = () => {

    return (
<div className={"Home-Page"}>
    <div className={'intro-section'}>
        <div className={'pic-box'}>
            <h2>Hello, I am Cheryl Mellor, alias: CoriMoriMaker.</h2><br></br>
            <img src={Selfie} alt="Cheryl Mellor selfie" className={'selfie'}/>
        </div>
    <div style={{display: 'flex', flexDirection: 'column',}}>
        <p>I started my crafting adventure after being diagnosed with Multiple Sclerosis.</p>
        <p> My manual dexterity was waining and I wanted a way to maintain what I had and regain what I'd lost, so I started hand crafting. </p>
        <p>I had a sewing kit and bought some fabric and handmade a bespoke baby blanket for my friends first child. Along with regaining my ability to complete small precise movements, I gained a love for seeing something come together from its component parts. Hand sewing however was not for me, instead I bought a sewing machine and quilting is now so much quicker but still fun. This presented me with a dilemma, what to do to maintain my manual dexterity?  This brought me to crochet, turns out I like that too, now I have 2 hobbies.</p>
        <p>I love to make items to gift to friends just to spread some joy. But I also make items as a thank you gifts for donations to my #BikeMS fundraising.</p>
        <p>Scroll down to see what I'm currently working on and what I've completed</p>
</div>
</div>
    <OnHook section='Amigurumi' />
    <div className='completed-projects'>
        <h1>Maker Gallery</h1>
        <h2 style={{
            marginBottom: '30px',
        }}>Click on the headings to explore my makes</h2>
        <CompletedProjectsAccordion/>

    </div>
   <FutureProjects/>
    <PatternLinks section='Amigurumi'/>
    <PatternLinks section='Crochet'/>
    <PatternLinks section='Quilts'/>

</div>
    )
}

export default Home