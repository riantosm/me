import Assets from "@/assets";

export default function HighlightSection() {
  return (
    <div className="mt-5 flex overflow-x-auto px-3 gap-5 no-scrollbar">
      <Item image={Assets.Images.ProfilePicture} label="My 2023" />
      <Item image={Assets.Images.ProfilePicture} label="Coffee" />
      <Item image={Assets.Images.ProfilePicture} label="Workout" />
      <Item image={Assets.Images.ProfilePicture} label="Ride" />
      <Item image={Assets.Images.ProfilePicture} label="Ride" />
    </div>
  );
}
interface IItem {
  image: string;
  label: string;
}

const Item = ({ image, label }: IItem) => {
  return (
    <div className="gap-1 grid justify-center">
      <div className="place-self-center">
        <img src={image} alt="" className="w-12 h-12 rounded-full" />
      </div>
      <div className="overflow-hidden w-12">
        <p className="text-xs text-center line-clamp-1">{label}</p>
      </div>
    </div>
  );
};
