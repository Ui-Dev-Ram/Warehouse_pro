import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { Gochi_Hand } from "next/font/google";

const gochiHand = Gochi_Hand({
	subsets:["latin"],
	weight: ["400"]
});

const InnerHeroBanner = () => {
	return (
		<div>

			<div className="flex mb-4 relative h-52 lg:h-auto">
				<div className="w-full bg-white h-100 relative">
					<Image src="/aboutus/herobanner.jpg" alt='Hero banner' fill={true} 
						className='w-full bg-no-repeat bg-center'/>
					<div className="absolute left-0 right-0 top-0 bottom-0 z-8 bg-black opacity-60 text-center m-auto">
						<div className="w-full lg:w-[40rem] h-40 relative m-auto">
           
							{/* Gradients */}
							{/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     */}

							{/* Core component */}
							<SparklesCore
								background="transparent"
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>
    
							{/* Radial Gradient to prevent sharp edges */}
							<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
						</div>
					</div>
					<div className="w-full absolute z-9 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
						<h3 className='text-center m-auto'>
							<span className="text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
             "Reliability in motion, trust in every mile."
							</span>
						</h3>

						<p className='text-white w-3/4 m-auto mt-2 lg:mt-5 text-xs lg:text-lg leading-5 lg:leading-8'>
            We offer the best and most authentic warehouse services. Warehouzez The Digital Supply Chain is one of the greatest and most well-known logistics and warehousing service providers in the country.
						</p>

					</div>
        
				</div>
				<div className="w-1/4 bg-[#314e56] text-white h-100 p-5 relative hidden lg:block">
					<div className="flex flex-col justify-start">
						<div className="absolute -left-16">
							<h1 className={`text-xl rotate-6 relative -left-14 text-[#fff] ${gochiHand.className}`}>Enquire Now</h1>
							<Image 
								src='/aboutus/Curly-Arrow-PNG.png' 
								alt=''
								className='relative brightness-0 invert -rotate-[20px] -left-2'
								width={80}
								height={80} />
						</div>
						<input 
							type="text" 
							placeholder="Enter Your Name*" 
							className="input h-8 bg-[#314e56] text-white border-b-[1px] border-white input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />

						<input 
							type="text" 
							placeholder="Enter Your Email*" 
							className="input h-8 bg-[#314e56] text-white border-b-[1px] border-white mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />
              
						<input 
							type="text" 
							placeholder="Enter Your Contact Number*" 
							className="input h-8 bg-[#314e56] text-white border-b-[1px] border-white mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />

						<input 
							type="text" 
							placeholder="Where do you need our service?*" 
							className="input h-8 bg-[#314e56] text-white border-b-[1px] border-white mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />
              
						<textarea className="textarea textarea-bordered bg-[#314e56] text-white border-b-[1px] border-white mt-4 w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" placeholder="Enter Your Message"></textarea>

						<Button
							borderRadius="1.75rem"
							className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
						>
                Submit
						</Button>
					</div>
				</div>  
			</div>
		</div>
	);
};

export default InnerHeroBanner;
