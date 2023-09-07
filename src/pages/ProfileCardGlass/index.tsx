import Assets from "@/assets";
import "./styles.scss";
import { HeaderSection, NameSection, QuoteSection } from "./Section";

export default function ProfileCardGlass() {
  return (
    <div>
      <div className="frame rounded-xl">
        <header className="frame-header h-full p-3">
          <div className="wrapper rounded-xl h-full grid grid-flow-row content-starts">
            <HeaderSection />
            <NameSection />
            <QuoteSection />
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
