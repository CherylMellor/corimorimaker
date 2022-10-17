import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import PhotoCards from "./PhotoCards";

const CompletedProjectsAccordion = () => {

    return (
<div>
    <Accordion>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton><h2 className='accordion_section_heading' id='Amigurumi_section'>Amigurumi - Click to expoand</h2></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <PhotoCards section='Amigurumi' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton><h2 className='accordion_section_heading' id='Crochet_section'>Crochet projects - click to expand</h2></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <PhotoCards section='Crochet' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton><h2 className='accordion_section_heading' id='Quilting_section'>Quilting projects - click to expand</h2></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <PhotoCards section='Quilts' /></AccordionItemPanel>
    </AccordionItem>
    </Accordion>
</div>
)}
export default CompletedProjectsAccordion