import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import PhotoCards from "./PhotoCards";

const CompletedProjectsAccordion = () => {

    return (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
                <AccordionItemButton><h2 id='Amigurumi_section'>Amigurumi</h2><div className={'arrow'}/></AccordionItemButton>
            <AccordionItemPanel>
                <PhotoCards section='Amigurumi' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
                <AccordionItemButton><h2 id='Crochet_section'>Crochet projects</h2><div className={'arrow'}/></AccordionItemButton>
            <AccordionItemPanel>
                <PhotoCards section='Crochet' /></AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemButton><h2 id='Quilting_section'>Quilting projects</h2><div className={'arrow'}/></AccordionItemButton>
        <AccordionItemPanel>
            <PhotoCards section='Quilts' /></AccordionItemPanel>
    </AccordionItem>
        <AccordionItem>
            <AccordionItemButton><h2 id='Embroidery_section'>Embroidery projects</h2><div className={'arrow'}/></AccordionItemButton>
            <AccordionItemPanel>
                <PhotoCards section='Embroidery' /></AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)}
export default CompletedProjectsAccordion