import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
type Props = {}

export function AccordionFAQ() {
    return (
        <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

const FAQ = (props: Props) => {
    return (
        <section className='p-8 pb-16'>
            <div className="container max-w-4xl">
                <h2 className='text-4xl text-white text-center font-bold mb-8'>Frequently Asked Questions</h2>
                <AccordionFAQ />
            </div>
        </section>
    )
}

export default FAQ