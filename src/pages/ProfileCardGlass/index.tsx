import Assets from "@/assets";
import "./styles.scss";
import { HeaderSection, NameSection, QuoteSection } from "./Section";
import { useEffect, useState } from "react";

export default function ProfileCardGlass() {
  const [height, setHeight] = useState("h-[90px]");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setHeight("h-[90px]");
    setIsShow(false);
    setTimeout(() => {
      setHeight("h-[550px]");
      setIsShow(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div className={`frame rounded-xl ${height} transition-all duration-700`}>
        <header className="frame-header h-full p-3">
          <div className="wrapper rounded-xl h-full grid grid-flow-row content-starts">
            <HeaderSection isShow={isShow} />
            <NameSection isShow={isShow} />
            <QuoteSection isShow={isShow} />
          </div>
        </header>
        <div className="frame-bg rounded-2xl overflow-hidden border border-slate-900">
          <img
            className="bg-color album-artwork"
            src={Assets.Images.DummyCity}
          />
          <img
            className="bg-black album-artwork"
            src={Assets.Images.ProfilePicture}
          />
        </div>
      </div>
    </div>
  );
}
