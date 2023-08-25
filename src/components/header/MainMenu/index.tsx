"use client";
import { useState } from "react";
import NavWrapper from "./Menu.style";
import {
  MdNotes,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { getMenuData } from "@/utils/data.util";
import Button from "@/components/commons/Button";
import Image from "next/image";
const data = getMenuData();
const MainMenu = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container mx-auto">
        {/* Main Menu Start */}
        <div className="gamfi_menu_sect px-5 md:px-0">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <Link href="/">
                {/* <img src={logo.src} alt="gamfi nft logo" /> */}
              </Link>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => {
                  const subMenus = menu.subMenus || [];
                  return (
                    <li key={i}>
                      <Link href={menu.url}>
                        {menu.title}{" "}
                        {subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}
                      </Link>

                      {/* if has subMenu and length is greater than 0 */}
                      {subMenus?.length > 0 ? (
                        <ul className="sub_menu_list">
                          {subMenus?.map((subMenu, i) => {
                            const subMenuChilds = subMenu.subMenuChilds || [];
                            return (
                              <li key={i}>
                                <Link href={subMenu.url}>
                                  {subMenu.title}{" "}
                                  {subMenuChilds?.length > 0 && (
                                    <MdOutlineKeyboardArrowRight />
                                  )}
                                </Link>

                                {/* if subMenu child has menu child */}
                                {subMenuChilds?.length > 0 ? (
                                  <ul className="sub_menu_child_list">
                                    {subMenuChilds?.map((subChild, i) => (
                                      <li key={i}>
                                        <Link href={subChild.url}>
                                          {subChild.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <Button $sm $variant="white" className="connect_btn">
                <Image
                  src={"/assets/connect.png"}
                  alt="icon"
                  width={18}
                  height={18}
                />
                Connect
              </Button>
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {/* <!-- mobile menu --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default MainMenu;
