"use client"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card"
import Image from "next/image"

import { Header } from "~/components/header"

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"

import useWindowResize from "~/hooks/use-window-resize"

import landingbg from "~/assets/landingBG2.png"
import { useRef } from "react"




const sections = [
    { heading: "Section 1", imgBackground: landingbg },
    { heading: "Section 2", imgBackground: landingbg },
    { heading: "Section 3", imgBackground: landingbg }
]

export default function StackingSectionsPage() {
    const scrollRef = useRef(null);
    const {size} = useWindowResize();

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"] // start at the top of the page and end at the bottom of the page
    })


    const y = useTransform(scrollYProgress, [0, 1000], [1, 0.8])

    const titleHeight = size.height

    const sectiontimeline = sections.map((_, i) => {
        const start = titleHeight + i * size.height
        const end = titleHeight + (i + 1) * size.height

        return [start, end]
    })

    const timeline = [[0, titleHeight], ...sectiontimeline]

    const animation = timeline.map((data) => (
        {
            scale: useTransform(scrollYProgress, data, [1, 0.8])
        }
    ))

    return (
      <section ref={scrollRef} className="relative">
        <Header />
        <motion.div 
        style={{ scale: animation[0].scale, height: titleHeight }} 
        className="sticky top-0 flex items-end text-8xl lg:text-[160px] uppercase lg:leading-[140px] px-36 overflow-clip">
            <h1 className="w-full h-max">Stacking <br /> <span className="ml-20 lg:ml-52">Sections</span></h1>
        </motion.div>
            {sections.map((section, index) => (
            <motion.div 
                key={index} 
                className="h-dvh sticky top-0"
                style={animation[index]}
                >
              <Card key={index} className="h-dvn">
                <CardContent className="relative">
                    <Image src={section.imgBackground} alt={section.heading} width={1000} height={1000} className="w-full h-full object-cover" />
                    <h1 className="absolute top-10 left-10 text-white text-8xl lg:text-[160px] uppercase lg:leading-[140px]">{section.heading}</h1>
                </CardContent>
              </Card>
            </motion.div>
            ))}
            <div className="h-dvh"/>
      </section>
    )
  }