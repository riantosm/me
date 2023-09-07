import { Helmet } from "react-helmet";
import "./styles.css";

export default function UnderConstruction() {
  return (
    <div>
      <Helmet>
        <script>
          {`
            let body = document.getElementsByTagName('body')[0];
            body.classList.add('body-under-construction');
          `}
        </script>
      </Helmet>
      <div className="text-container">
        <h1>lagi sibuk dikit</h1>
      </div>
    </div>
  );
}
