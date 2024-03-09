import { ChevronDown, ChevronUp } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ItemTy {
  label: string;
  icon: React.ReactNode;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}
type Props = {
  item: ItemTy;
  showSubMenu: string;
  setShowSubMenu: Dispatch<SetStateAction<string>>;
};

export default function SubMenu({ item, showSubMenu, setShowSubMenu }: Props) {
  const [subnav, setSubnav] = useState(item.initiallyOpened || false);

  const navigate = useNavigate();
  const location = useLocation();
  const splitLocation = location.pathname.split("/");

  const pathName = window.location.pathname;

  function handleRoute() {
    navigate(item.link);
    setShowSubMenu(item.label);
    setSubnav(false);
  }

  function handleRouteWithSubMenu() {
    // open submenu
    if (item.links && !subnav) {
      setSubnav(true);
      setShowSubMenu(item.label);
    }
    // close submenu
    else {
      setSubnav(false);
      setShowSubMenu(item.label);
    }
  }

  // if refresh open submenu if find
  useEffect(() => {
    if (showSubMenu) {
      if (item.label != showSubMenu) {
        setSubnav(false);
      } else {
        setSubnav(true);
      }
    }
  }, [showSubMenu]);

  return (
    <div>
      {!item.links?.length ? (
        <div
          className={`menu-item ${item.link == pathName && "active"}`}
          onClick={() => handleRoute()}
        >
          {item.label}
        </div>
      ) : (
        <>
          <div
            className="menu-item flex items-center justify-between"
            onClick={() => handleRouteWithSubMenu()}
          >
            <div>{item.label}</div>
            <div>{subnav ? <ChevronUp /> : <ChevronDown />}</div>
          </div>

          <div>
            {item.links?.map((v) => (
              <div
                key={v.label}
                className={`overflow-hidden  ${
                  !subnav
                    ? "max-h-0 ease-out duration-500 "
                    : "max-h-screen ease-in duration-500 "
                }`}
              >
                <div
                  key={v.label}
                  className={`ml-5 menu-item ${
                    v.link === pathName ? "active" : ""
                  }`}
                  onClick={() => navigate(v.link)}
                >
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
