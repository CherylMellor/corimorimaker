import React from 'react';
import Selfie from './Cheryl Mellor.jpg';
import {useState} from "react";
import OnHook from "./OnHook";
import PatternLinks from "./PatternLinks";
import CompletedProjectsAccordion from './CompletedProjectsAccordion';

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
        <p>I started crafting after being diagnosed with Multiple Sclerosis, in a bid to maintain my manual dexterity. First, project was to hand sew a baby's blanket, I liked seeing something come together from its component parts, but hand sewing took sooo long, so I bought a sowing machine. Now needing something else to test and maintain manual dexterity I took a turn at crochet, turns out I like tat too, so now I have 2 hobbies.
        <p>I like to make items and use them as a thank you gifts for donations to my #BikeMS fundraising efforts.</p>
        Many of my quilts are also used in fundraising for the National Multiple Sclerosis Society, after all their mission is to cure MS. </p><br></br>
        <p>Scroll down or click the links to see what I've made</p>
</div>
</div>
    <OnHook />

    <div className='completed-projects'>

        <CompletedProjectsAccordion/>

    </div>

    <PatternLinks sections='Amigurumi'/>
    <PatternLinks sections='Crochet'/>
    <PatternLinks sections='Quilts'/>

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