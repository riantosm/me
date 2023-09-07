import { BsInstagram } from "react-icons/bs";

export default function HeaderSection() {
  const directToInstagram = () => {
    window.open("https://www.instagram.com/rian.tosm");
  };

  return (
    <div className="pt-3 px-3 flex items-center justify-between w-full">
      <p className="text-white text-2xl font-bold">About me</p>
      <button onClick={directToInstagram}>
        <BsInstagram className="text-white text-xl" />
      </button>
    </div>
  );
}
