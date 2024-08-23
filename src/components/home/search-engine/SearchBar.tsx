import TabComponent from "@/components/home/search-engine/TabComponent";
import SearchInput from "@/components/home/search-engine/SearchInput";

export default function SearchBar(){
	return(
		<div className='bg-white rounded-lg p-2 sm:p-5 w-11/12 sm:w-1/2 mx-auto shadow-xl'>
			<TabComponent items={items} />
		</div>
	);
}

const items = [
	{
		title: "Rent",
		content: (
			<div className="rounded-lg py-4">
				<SearchInput />
			</div>
		),
	},
	{
		title: "3PL",
		content: (
			<div className="rounded-lg py-4">
				<SearchInput />
			</div>
		),
        
	},
   
];
