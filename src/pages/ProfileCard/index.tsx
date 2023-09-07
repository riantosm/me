// import styles from "./styles.module.css";
import { HeaderSection, NameSection, VersionSection } from "./Section";
import "./styles.css";

export default function ProfileCard() {
  return (
    <div>
      <div className="card items-start flex flex-col -mt-20">
        <HeaderSection />
        <NameSection />
        {/* <HighlightSection /> */}
        <VersionSection />
        {/* <NewHighlight /> */}
      </div>
    </div>
  );
}
