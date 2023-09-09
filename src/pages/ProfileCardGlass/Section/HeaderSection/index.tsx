import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";

export default function HeaderSection({ isShow }: { isShow: boolean }) {
  const [isShow2, setIsShow2] = useState(false);

  useEffect(() => {
    if (!isShow) return;
    setTimeout(() => {
      setIsShow2(true);
    }, 1000);
  }, [isShow]);

  const directToInstagram = () => {
    window.open("https://www.instagram.com/rian.tosm");
  };

  return (
    <div className="pt-2 px-2 grid relative items-center justify-end w-full h-fit">
      <div
        className={`absolute w-fit transition-all duration-500 ${
          isShow2
            ? "mt-2 left-2 -translate-x-0"
            : "mt-2 left-1/2 -translate-x-1/2"
        }`}
      >
        <p className="text-white text-2xl font-bold">./me</p>
      </div>
      <button
        onClick={directToInstagram}
        className={`transition-all duration-1000 ${isShow2 ? "opacity-100" : "opacity-0"}`}
      >
        <BsInstagram className="text-white text-xl" />
      </button>
    </div>
  );
}
