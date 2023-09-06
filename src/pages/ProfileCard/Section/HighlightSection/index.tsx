import Assets from "@/assets";
import { Helmet } from "react-helmet";
import "./styles.css";

export default function HighlightSection() {
  return (
    <div className="mt-5">
      <main className="grid-item main no-scrollbar">
        <div className="items no-scrollbar px-3 gap-5 flex">
          <Item image={Assets.Images.IconCoffeeCup} label="My 2023" />
          <Item image={Assets.Images.IconCoffeeCup} label="Coffee" />
          <Item image={Assets.Images.IconCoffeeCup} label="Workout" />
          <Item image={Assets.Images.IconCoffeeCup} label="Ride" />
        </div>
      </main>
      <Helmet>
        <script src="src/assets/js/slider.js"></script>
      </Helmet>
    </div>
  );
}
interface IItem {
  image: string;
  label: string;
}

const Item = ({ image, label }: IItem) => {
  return (
    <button className="gap-1 grid justify-center item">
      <div className="place-self-center">
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-700 bg-sky-900 overflow-hidden grid items-center justify-center">
          <img src={image} alt="" className="w-6 h-6" />
        </div>
      </div>
      <div className="overflow-hidden w-12">
        <p className="text-xs text-center line-clamp-1">{label}</p>
      </div>
    </button>
  );
};
