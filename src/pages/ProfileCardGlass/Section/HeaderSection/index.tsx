import { BsInstagram } from "react-icons/bs";

export default function HeaderSection() {
  const directToInstagram = () => {
    window.open("https://www.instagram.com/rian.tosm");
  };

  return (
    <div className="pt-4 px-4 flex items-center justify-between w-full h-fit">
      <p className="text-white text-2xl font-bold">/me</p>
      <button onClick={directToInstagram}>
        <BsInstagram className="text-white text-xl" />
      </button>
    </div>
  );
}
