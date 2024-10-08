"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Memoize the linearGradients array
  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ], []);

  const backgroundColors = [
    "var(--zinc-800)",
    "var(--black)",
    "var(--zinc-800)",
    "var(--black)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
    animate={{
      backgroundColor: backgroundColors[activeCard % backgroundColors.length],
    }}
    className="h-[30rem] w-full overflow-y-auto flex justify-center relative p-10"
    ref={ref}
  >
    <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-2"
              >
                <div className="flex flex-col items-baseline justify-start">
                  {item.description}
                  <button className="bg-red hover:bg-red text-white text-sm font-bold py-2 px-4 rounded-full mt-4">
                        Read More
                  </button>
                </div>
                
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
    </div>
    <div
      // style={{ background: backgroundGradient }}
      className={cn(
        "hidden lg:block h-64 w-80 rounded-md bg-slate-900 sticky top-10 overflow-hidden p-2",
        contentClassName
      )}
    >
      {content[activeCard].content ?? null}
    </div>      
</motion.div>
    
  );
};

// export default StickyScroll;