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
        <p>
          <span className="text-xs text-small uppercase">Sepertinya</span>
          <br />
          <span className="uppercase">sedang sibuk dikit</span>
          <br />
          <br />
          <span className="text-[10px] font-thin mt-10">v23.x</span>
        </p>
      </div>
    </div>
  );
}
