"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";


type NavItem = {
    title: string;
    path?: string;
    childrens?:NavItem[];
    icons?: any;
}


export const navlinks :NavItem[] = [
    {
        title : "About",
        path : "/aboutus",
        childrens: [
            {
                title: "Business Strategy",
                path: "#business-strategy", 
            },
            {
                title: "Why Warehouzez",
                path: "#why-warehouzez"
            },


        ]
    },
    {
        title : "Services",
        path : "#services",
        childrens: [
            {
                title: "Third Party Logistics",
                path: "#third-party-logistics"
            },
            {
                title: "On-demand Warehousing",
                path: "#on-demand-warehousing"
            },
            {
                title: "Contract Logistics",
                path: "#contract-logistics"
            },
            {
                title: "Warehousing & Distribution",
                path: "#warehousing-distribution"
            },
            {
                title: "Ecommerce Fulfillment",
                path: "#ecommerce-fulfillment"
            },
            {
                title: "Reverse Logistics",
                path: "#reverse-logistics"
            },
            {
                title: "Int. Freight Forwarding",
                path: "#int-freight-forwarding"
            },
            {
                title: "Global SCM Technology",
                path: "#global-SCM-technology"
            },
            {
                title: "Carrying & Forwarding Agency",
                path: "#carrying-forwarding-agency"
            },
            {
                title: "Digital Supply Chain Consultancy",
                path: "#gigital-supply-chain-consultancy"
            },
            {
                title: "Outsourcing Warehousing Operations",
                path: "#outsourcing-warehousing-operations"
            },
            {
                title: "Agri. Commodities Warehousing",
                path: "#agri-commodities-warehousing"
            },
            
        ]
    },
    {
        title : "Industries",
        path : "#industries",
        childrens: [
            {
                title: "Automotive and Spare Parts",
                path: "#automotive-and-spare-parts"
            },
            {
                title: "Fashion and Lifestyle",
                path: "#fashion-and-lifestyle"
            },
            {
                title: "Perfumes and Cosmetics",
                path: "#perfumes-and-cosmetics"
            },
            {
                title: "Packed Food Products",
                path: "#packed-food-products"
            },
            {
                title: "Pharmaceuticals and Medical",
                path: "#pharmaceuticals-and-medical"
            },
            {
                title: "Wind, Solar and Telecom",
                path: "#wind-solar-and-telecom"
            },
            {
                title: "Exhibition and Entertainment",
                path: "#exhibition-and-entertainment"
            },
            {
                title: "Fitness and Sporting",
                path: "#fitness-and-sporting"
            },
            {
                title: "Battery(EV) and PowerGrid",
                path: "#battery(EV)-and-powerGrid"
            },
            {
                title: "Semiconductors and Inverters",
                path: "#semiconductors-and-inverters"
            },
            {
                title: "Publication and Office Records",
                path: "#publication-and-office-records"
            },
            {
                title: "Computer and Electrical",
                path: "#computer-and-electrical"
            },
            {
                title: "Ecommerce and FMCG",
                path: "#ecommerce-and-FMCG"
            },
            {
                title: "Oil and Chemical",
                path: "#oil-and-chemical"
            },
            {
                title: "Minerals and Mining",
                path: "#minerals-and-mining"
            },
            {
                title: "Consumer Goods",
                path: "#consumer-goods"
            },


        ]
    },
    {
        title : "Network",
        path : "#network",
        childrens: [
            {
                title: "Bangalore",
                path: "#Bangalore"
            },
            {
                title: "Hyderabad",
                path: "#Hyderabad"
            },
            {
                title: "Chennai",
                path: "#Chennai"
            },
            {
                title: "Bhiwandi",
                path: "#Bhiwandi"
            },
            {
                title: "Mumbai",
                path: "#Mumbai"
            },
            {
                title: "Pune",
                path: "#Pune"
            },
            {
                title: "Ahmedabad",
                path: "#Ahmedabad"
            },
            {
                title: "Kolkata",
                path: "#Kolkata"
            },
            {
                title: "Jaipur",
                path: "#Jaipur"
            },
            {
                title: "Delhi",
                path: "#Delhi"
            },
            {
                title: "Noida",
                path: "#Noida"
            },
            {
                title: "Lucknow",
                path: "#Lucknow"
            },
            {
                title: "Gurgaon",
                path: "#Gurgaon"
            },
            {
                title: "Manesar",
                path: "#Manesar"
            },
            {
                title: "Faridabad",
                path: "#Faridabad"
            },
            


        ]
    },
    {
        title : "Blog",
        path : "#blog",
       
    },
    {
        title : "Resources",
        path : "#resources",
        childrens: [
            {
                title: "Press Release",
                path: "#press-release"
            },
            {
                title: "Career",
                path: "#career"
            },
            {
                title: "Contact Us",
                path: "#contact-us"
            },
            {
                title: "Login",
                path: "#login"
            },
            {
                title: "Sign Up",
                path: "#sign-up"
            },
            {
                title: "Forget Password",
                path: "#forget-password"
            },


        ]
    },

]




export default function MenuList() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="mx-auto z-50">
            <Menu setActive={setActive}>
                
                {navlinks.map((navlink, index) => (
                  
                    <Link key={index} className="flex group text-white items-center gap-1 relative z-20" href={navlink.path ?? "#"}> 
                        <MenuItem setActive={setActive} active={active} item={navlink.title}>
                            {navlink.childrens && (
                            <div  className="flex flex-col space-y-4 text-sm pb-3 last:pb-0">
                                {navlink.childrens.map((children, indexInner) => (
                                    <HoveredLink key={indexInner} href={children.path}>{children.title}</HoveredLink>
                                ))}
                            </div>
                            )}

                        </MenuItem> 
                        {navlink.childrens && (
                            <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0"/>
                        )}
                        
                    </Link>
                ))}
            </Menu>
        </div>
    );
  }
  
