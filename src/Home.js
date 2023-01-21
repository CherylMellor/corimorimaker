import React from 'react';
import Selfie from './Cheryl Mellor.jpg';
import OnHook from "./OnHook";
import PatternLinks from "./PatternLinks";
import CompletedProjectsAccordion from './CompletedProjectsAccordion';
import FutureProjects from "./FutureProjects";
const Home = () => {

    return (
<div className={"Home-Page"}>
    <h2 className={"sub-title"}>Welcome to CoriMoriMaker</h2>
    <div className={'intro-section'}>
        <div className={'pic-box'}>
            <p className="introduction">Hello. I am Cheryl Mellor, the person behind CoriMoriMaker.</p><br></br>
            <img src={Selfie} alt="Cheryl Mellor selfie" className={'selfie'}/>
        </div>
    <div>
        <p>I started my crafting adventure after being diagnosed with Multiple Sclerosis.</p>
        <p> My manual dexterity was waining. I wanted a way to maintain what I had and regain what I'd lost, so I started hand crafting. </p>
        <p>A friend of mine was pregnant with her first child and I saw this as a perfect opportunity to hand sew a baby's blanket. Along with regaining my ability to complete small precise movements I gained a love for seeing something come together from its component parts. Hand sewing however was not for me, it takes sooo long to complete a project, hence I now have a sowing machine. This presented me with a dilemma, what to do to maintain my manual dexterity?  This brought me to crochet, turns out I like that too, now I have 2 hobbies.</p>
        <p>Thought I love to make items and gift them to friends to spread some joy. I also make items as a thank you gifts for donations to my #BikeMS fundraising efforts.</p>
        <p>Scroll down to see what I'm currently working on and what I've completed</p>
</div>
</div>
    <OnHook />
    <div className='completed-projects'>
        <h1>Maker Gallery</h1>
        <p style={{
            marginBottom: '30px',
        }}>Click on the headings to explore my makes</p>
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