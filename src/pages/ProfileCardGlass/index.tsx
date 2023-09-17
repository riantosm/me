import Assets from "@/assets";
import "./styles.scss";
import { HeaderSection, NameSection, QuoteSection } from "./Section";
import { useEffect, useState } from "react";

export default function ProfileCardGlass() {
  const [height, setHeight] = useState("h-[60px]");
  const [isShowHeight, setIsShowHeight] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setHeight("h-[60px]");
    setIsShowHeight(false);
    setIsShow(false);
    setTimeout(() => {
      setIsShow(true);
    }, 500);
    setTimeout(() => {
      setHeight("h-[550px]");
      setIsShowHeight(true);
    }, 1500);
  }, []);

  return (
    <div>
      <div
        className={`frame rounded-xl ${height} transition-all duration-1000 ${
          isShow ? "opacity-100 mb-0" : "opacity-0 mb-32"
        }`}
      >
        <header className="frame-header h-full p-3">
          <div className="wrapper rounded-xl h-full grid grid-flow-row content-starts">
            <HeaderSection isShow={isShowHeight} />
            <NameSection isShow={isShowHeight} />
            <QuoteSection isShow={isShowHeight} />
          </div>
        </header>
        <div className="frame-bg rounded-2xl overflow-hidden border border-slate-900">
          <img
            className="bg-color album-artwork"
            src={Assets.Images.DummyBlue}
          />
          <img
            className="bg-black album-artwork"
            src={Assets.Images.DummyCity}
          />
        </div>
      </div>
    </div>
  );
}
