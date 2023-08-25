import { useState } from "react";
import MobileMenuStyleWrapper from "./MobileMenu.style";
import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import { getMenuData } from "@/utils/data.util";
type Props = {
  mobileMenuhandle: () => void;
};

const data = getMenuData();

const MobileMenu: React.FC<Props> = ({ mobileMenuhandle }) => {
  const [menuId, setMenuId] = useState("");
  const [subMenuId, setSubMenuId] = useState("");

  return (
    <MobileMenuStyleWrapper className="gamfi_mobile_menu">
      <div className="gamfi_mobile_menu_content">
        <div className="mobile_menu_logo">
          {/* <img className="gamfi_logo" src={logo.src} alt="gamfi logo" /> */}
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="gamfi_mobile_menu_list">
          <ul>
            {/* menu  */}
            {data?.map((menu, i) => {
              const subMenus = menu.subMenus || [];
              return (
                <li
                  key={i}
                  // manu expand icon and menu active based on condition
                  className={`${subMenus.length > 0 ? "has_submenu" : ""} ${
                    menuId === menu.id ? "expand_submenu" : ""
                  }`}
                  onClick={() => setMenuId(menu.id)}
                >
                  <Link href={menu.url}>{menu.title}</Link>

                  {/* if has subMenu and length is greater than 0 */}
                  {subMenus.length > 0 ? (
                    <ul className="sub_menu_list">
                      {subMenus.map((subMenu, i) => {
                        const subMenuChilds = subMenu.subMenuChilds || [];
                        return (
                          <li
                            key={i}
                            // manu expand icon and menu active based on condition
                            className={`${
                              subMenuChilds.length > 0 ? "sub_has_submenu" : ""
                            } ${
                              subMenuId === subMenu.id
                                ? "expand_submenu_child"
                                : ""
                            }`}
                            onClick={() => setSubMenuId(subMenu.id)}
                          >
                            <Link href={subMenu.url}>{subMenu.title}</Link>
                            {/* if subMenu child has menu child */}
                            {subMenuChilds.length > 0 ? (
                              <ul className="sub_menu_child_list">
                                {subMenuChilds.map((subChild, i) => (
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
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
