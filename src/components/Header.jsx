import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
        name: "SERIES",
        icon: HiTv,
      },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
        <div className="flex md:hidden gap-5">
        {menu.map((item, index) => index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className="md:hidden" onClick={() =>setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 rounded-sm">
          {menu.map((item, index) => index>3&& (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>:null}
        </div> 
        </div>
      </div>
      <img src="https://imgs.search.brave.com/Hi_Jb7yCRYcdYhlMLfbNoR52TxGeAPNJhMBR2kWbQ_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS84WDF5WHhtZG8y/QVFKQmJESzVTalQ5/WVVvXzdSZ21leXdL/cGVTQy1KbUIwaDhM/a24tQXZaV1dxNW1E/TXIxQWxOaXliND13/NTQwLWgzMDItcnc" 
      className="w-[40px] rounded-full"/>
    </div>
  );
};

export default Header;
