import React, { useEffect, useState } from "react";
import "../assets/css/TheSidebar.style.css";
import { menu } from "../constant/menu";
import SubMenu from "../components/SubMenu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TheSidebar({ isOpen, onClose }: Props) {
  const [showSubMenu, setShowSubMenu] = useState();

  // if refresh open submenu if find
  useEffect(() => {
    const path = window.location.pathname;
    let finding = false;
    menu.map((data) => {
      if (finding) return;
      if (data.links?.find((ele) => ele.link == path)) finding = data.label;
    });
    setShowSubMenu(finding);
  }, []);

  return (
    <div>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`sidebar scrollbar lg:translate-x-0 ease-out ${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <div className="inner-sidebar scrollbar">
          <ul className="menu-list ">
            {menu?.map((v) => (
              <div key={v.label}>
                <SubMenu
                  item={v}
                  showSubMenu={showSubMenu || ""}
                  setShowSubMenu={setShowSubMenu}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
