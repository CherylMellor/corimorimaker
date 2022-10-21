import React from 'react';
import Selfie from './Cheryl Mellor.jpg';
import OnHook from "./OnHook";
import PatternLinks from "./PatternLinks";
import CompletedProjectsAccordion from './CompletedProjectsAccordion';

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
        <p>My love of crafting began from a strange start.</p>
        <p>Many years ago I was diagnosed with Multiple Sclerosis (MS) and was loosing my manual dexterity. I wanted a way to maintain what I had and regain what I'd lost, so I started hand crafting. </p>
        <p>I chose to hand sew a baby's blanket for my friends first child. Along with regaining my ability to complete small precise movements I gained a love for seeing something come together from its component parts. Hand sewing however was not for me, it takes sooo long to complete a project, hense I now have a sowing machine. This presented me with a dilema, what to do to maintain manual dexterity?  This brought me to crochet, turns out I like that too, now I have 2 hobbies.</p>
        <p>Thought I love to make items  and gift them to friend to spread some joy. I also make items as a thank you gifts for donations to my #BikeMS fundraising efforts.</p>
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

    <PatternLinks sections='Amigurumi'/>
    <PatternLinks sections='Crochet'/>
    <PatternLinks sections='Quilts'/>

</div>
    )
}

export default Home