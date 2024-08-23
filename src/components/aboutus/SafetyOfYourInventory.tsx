import React from "react";
import { BiHappyAlt } from "react-icons/bi";
import { FaChildReaching } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const SafetyOfYourInventory = () => {
	return (
		<div className="flex flex-col justify-center text-center my-10">
			<h3 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
            Safety Of Your Inventory Is Utmost Necessary To Us!
			</h3>

			<div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 mt-12 justify-center items-center">
				<div className="card bg-base-100 w-96 shadow-xl">
					<div className="card-body text-center">
						<BiHappyAlt className='m-auto rounded-full w-12 h-12 text-center bg-gray-600 p-2 text-white' />
						<h2 className="card-title text-center m-auto">Preferred</h2>
						<p>Being a preferred services partner is our mission. We shall be preferred warehouse and logistics services provider across the world with focus on technology, skill development, customer services and safety measures.</p>
					</div>
				</div>

				<div className="card bg-base-100 w-96 shadow-xl">
					<div className="card-body text-center">
						<FaChildReaching  className='m-auto rounded-full w-12 h-12 text-center bg-gray-600 p-2 text-white' />
						<h2 className="card-title text-center m-auto">Accessible</h2>
						<p>Anytime data and team access to build technology for global logistics and inventory management standards to achieve anytime informational accessibility to representative stackholders such as employees and suppliers.</p>
					</div>
				</div>

				<div className="card bg-base-100 w-96 shadow-xl">
					<div className="card-body text-center">
						<FaRupeeSign  className='m-auto rounded-full w-12 h-12 text-center bg-gray-600 p-2 text-white' />
						<h2 className="card-title text-center m-auto">Cost-Effective</h2>
						<p>We provide cost-effective solutions to bring the warehouse partners and customers (warehouse users) together by delivering cost-effective services. We provide high - quality services to our customers.</p>
					</div>
				</div>
			</div>
        
		</div>
	);
};

export default SafetyOfYourInventory;
