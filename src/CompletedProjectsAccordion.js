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
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton><h2 className='accordion_section_heading' id='Amigurumi_section'>Amigurumi</h2></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <PhotoCards section='Amigurumi' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton><h2 className='accordion_section_heading' id='Crochet_section'>Crochet projects</h2></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <PhotoCards section='Crochet' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton><h2 className='accordion_section_heading' id='Quilting_section'>Quilting projects</h2></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <PhotoCards section='Quilts' /></AccordionItemPanel>
    </AccordionItem>
    </Accordion>
)}
export default CompletedProjectsAccordion