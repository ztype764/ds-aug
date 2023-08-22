"use client";

import { Popover, Transition } from "@/app/headlessui";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CardCategory3 from "@/components/CardCategories/CardCategory3";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useState, useEffect } from "react";
import { Route } from "@/routers/types";
import Link from "next/link";
import axios from "axios";
import AppContext from "@/context/withAuth";
import { baseUrl } from "@/Url";

export interface NavItemType {
  id: string;
  name: string;
  href: Route;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}
export interface MenuProps {
  category_id: string;
  category_name:string;
  description:string;
}


const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {

const router = useRouter();
const handleclick=(id:string)=>{
router.push(`/collection?id=${id}`,id)
}
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const [menuCategory, setMenuCategory] = useState<MenuProps[]>([]);
  useEffect(()=>{
    axios.get(`${baseUrl}/get_all_categories`)
    .then((response)=>{
      console.log(response)
    setMenuCategory(response.data.data)})
    .catch((error)=>{console.log(error)}) 
  },[])

  
  
 

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  

  

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute transform z-10 w-56 top-full left-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children &&
                   
                        <li className="px-2">
                         {
                          menuCategory===null?'' :
                          menuCategory.map((info)=>{
                           return(
                             <button
                               className="flex items-center 
                               font-normal 
                               text-neutral-6000
                                dark:text-neutral-400 
                                py-2 px-4 rounded-md 
                                hover:text-neutral-700 
                                hover:bg-neutral-100 dark:hover:bg-neutral-800 
                                dark:hover:text-neutral-200"
                            // href={{pathname:'/collection', query:{id :info.category_id}}}
                            onClick={()=>{handleclick(info.category_id)}}
                             >
                               {info.category_name}
                               {/* {item.type && (
                                 <ChevronDownIcon
                                   className="ml-2 h-4 w-4 text-neutral-500"
                                   aria-hidden="true"
                                 />
                               )} */}
                             </button> 
                           )
                            
                             })
                         }
                        </li>
  }
                        
                
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <div className="h-20 flex-shrink-0 flex items-center">
        <Link
          className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          href={{
            pathname: item.href || undefined,
          }}
        >
          {item.name}
          {item.type && (
            <ChevronDownIcon
              className="ml-1 -mr-1 h-4 w-4 text-slate-400"
              aria-hidden="true"
            />
          )}
        </Link>
      </div>
    );
  };

  switch (menuItem.type) {
    case "dropdown":
      return renderDropdownMenu(menuItem);
   
    default:
      return (
        <li className="menu-item flex-shrink-0">{renderMainItem(menuItem)}</li>
      );
  }
};

export default NavigationItem;
