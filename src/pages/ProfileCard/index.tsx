// import styles from "./styles.module.css";
import { Helmet } from "react-helmet";
import { HeaderSection, NameSection, VersionSection } from "./Section";
import "./styles.css";

export default function ProfileCard() {
  return (
    <div>
      <Helmet>
        <script>
          {`
          let body = document.getElementsByTagName('body')[0];
          body.classList.add('body-profile-card');
          `}
        </script>
      </Helmet>
      <div className="card items-start flex flex-col">
        <HeaderSection />
        <NameSection />
        {/* <HighlightSection /> */}
        <VersionSection />
        {/* <NewHighlight /> */}
      </div>
    </div>
  );
}
