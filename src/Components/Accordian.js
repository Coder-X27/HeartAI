import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Accordian = () => {
  return (
    <>
        <Accordion className='accordion' allowMultipleExpanded={false}>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        What is Mind Language?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Mind Language is a graph-based meta-programming language designed to facilitate programming for both artificial intelligence (AI) systems and human users. It allows the creation and modification of programs through natural language or a visual drag-and-drop editor.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        How does HeartAI work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Mind Language operates by translating conversations or visual inputs into a graph structure where each node represents a specific action or decision point, and edges represent the flow or sequence of these actions.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        What makes Mind Language different form other programming languages?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Unlike traditional programming languages that require detailed code writing, Mind Language uses a combination of domain-specific languages, graph-oriented programming, and advanced AI to interpret and execute commands given in natural language or through visual interactions.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        Is Mind Language Turing-complete?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Yes, Mind Language is Turing-complete, meaning it can perform any computation that a Turing machine can, provided there is no restriction on the amount of memory available for execution.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        Can Mind Language be used by someone without programming experience?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Absolutely. One of the primary goals of Mind Language is to make programming accessible to those without a background in computer science. The use of natural language and visual programming removes the barriers typically associated with coding.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        What is a 'node' in Mind Language?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    A 'node' in Mind Language is a fundamental unit of execution that represents an action or a conditional block. Nodes are connected to form a directed graph that dictates the sequence of program execution.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        What applicatoins can Mind Language be used for?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Mind Language is agnostic to the domain, meaning it can be applied to a wide range of fields, from creating simple scripts to managing complex systems in various industries like finance, healthcare, and automation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        How do you ensure that the programs created are efficient?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Mind Language incorporates optimization mechanisms within its interpreter to ensure that the programs created are as efficient as possible. Moreover, users can refine their graphs to streamline the processes.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        Can I integrate Mind Language with existing systems?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    Mind Language is designed to be interoperable with existing systems. It can be integrated through APIs and can communicate with other software to perform a variety of tasks.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='m'>
                <AccordionItemHeading>
                    <AccordionItemButton  className='accordionheading'>
                        How do I get started with Mind Language?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordiondescription'>
                    <p>
                    To get started, you may need to access the language interpreter or development environment provided for Mind Language. Often, this will come with a set of tutorials or documentation to help you begin.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
    </>
  )
}

export default Accordian
