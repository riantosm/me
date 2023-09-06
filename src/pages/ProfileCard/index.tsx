// import styles from "./styles.module.css";
import { HeaderSection, HighlightSection, NameSection } from "./Section";
import "./styles.css";

export default function ProfileCard() {
  return (
    <div>
      <div className="card items-start flex flex-col">
        <HeaderSection />
        <NameSection />
        <HighlightSection />
        {/* <NewHighlight /> */}
      </div>
    </div>
  );
}
