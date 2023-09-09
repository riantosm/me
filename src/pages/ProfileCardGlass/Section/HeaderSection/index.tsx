import { BsInstagram } from "react-icons/bs";

export default function HeaderSection({ isShow }: { isShow: boolean }) {
  const directToInstagram = () => {
    window.open("https://www.instagram.com/rian.tosm");
  };

  return (
    <div className="pt-4 px-4 grid relative items-center justify-end w-full h-fit">
      <div
        className={`absolute w-fit transition-all duration-200 ${
          isShow ? "mt-4 left-4 -translate-x-0" : "mt-7 left-1/2 -translate-x-1/2"
        }`}
      >
        <p className="text-white text-2xl font-bold">./me</p>
      </div>
      <button
        onClick={directToInstagram}
        className={`transition-all ${isShow ? "opacity-100" : "opacity-0"}`}
      >
        <BsInstagram className="text-white text-xl" />
      </button>
    </div>
  );
}
