"use client";
 
import PlaceholdersAndVanishInput  from "@/components/ui/placeholders-and-vanish-input";
import { TbBuildingWarehouse } from "react-icons/tb";


export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <TbBuildingWarehouse className="absolute size-6 z-10 left-6 text-slate-700 hidden sm:block" />
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}