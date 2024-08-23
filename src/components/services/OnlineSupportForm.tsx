import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const OnlineSupportForm = () => {
	return (
		<div className='mt-10'>
			<div className="card bg-base-100 w-96 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">24/7 Online Support</h2>
					<p>Get immediate quotes & book warehouse.</p>
          
					<label className="input input-bordered flex items-center gap-2 mt-5 mb-3">
						<FaRegUser />
						<input type="text" className="grow" placeholder="Username" />
					</label>
					<label className="input input-bordered flex items-center gap-2 mb-3">
						<MdOutlineEmail />
						<input type="text" className="grow" placeholder="Email" />
					</label>
					<label className="input input-bordered flex items-center gap-2 mb-3">
						<IoPhonePortraitOutline />
						<input type="text" className="grow" placeholder="Contact" />
					</label>
					<label className="gap-2 grow mb-3">  
						<textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
					</label>
					<button className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">Submit</button>
				</div>
			</div>

		</div>
	);
};

export default OnlineSupportForm;
