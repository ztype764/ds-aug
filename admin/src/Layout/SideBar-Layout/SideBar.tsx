import { useState } from "react";
import MENUITEMS from "./Menu";
import MenuList from "./SideBarItems";
import { LI, UL } from "../../AbstractElements";
import { Back } from "../../Constant";
import { useSelector } from "react-redux";
import { ThemeCustomizerTypes } from "../ThemeCustomizer/ThemeCustomizerTypes";
import ConfigDB from "../../config/ThemeConfig";
import { ArrowLeft, ArrowRight } from "react-feather";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState([]);
  const { toggleIcon } = useSelector((state: ThemeCustomizerTypes) => state.ThemeCustomizer);
  const wrapper = ConfigDB.data.settings.sidebar.type;
  const LayoutType = ConfigDB.data.settings.layout_type
  const [margin, setMargin] = useState(0);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  const scrollToRight = () => {
    if (margin === 0) {
      setMargin((margin) => (margin += -600));
      setRightArrow(true)
      setLeftArrow(false)
    }

  };
  const scrollToLeft = () => {
    if (margin === -600) {
      setMargin(0);
      setLeftArrow(true)
      setRightArrow(false)
    }

  };

  return (
    <header className={`main-nav ${toggleIcon ? " close_icon" : ""}`}>
      <nav>
        <div className="main-navbar">
          <div className={`left-arrow ${leftArrow ? "disabled" : ""}`} id="left-arrow" onClick={scrollToLeft}><ArrowLeft /></div>
          <div id="mainnav" style={(wrapper === "horizontal-wrapper") && (LayoutType === "box-layout") ? { left: margin + "px" } : { margin: "0px" }}>
            <UL className="nav-menu custom-scrollbar simple-list" style={{ display: "block" }}>
              <LI className="back-btn">
                <div className="mobile-back text-end">
                  <span>{Back}</span>
                  <i className="fa fa-angle-right ps-2" aria-hidden="true" />
                </div>
              </LI>
              <MenuList menu={MENUITEMS} isOpen={isOpen} setIsOpen={setIsOpen} level={0}/>
            </UL>
          </div>
          {(wrapper === "horizontal-wrapper") && (LayoutType === "box-layout") ? <div className={`right-arrow ${rightArrow ? "disabled" : ""}`} onClick={scrollToRight}><ArrowRight /></div> : ""}
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
