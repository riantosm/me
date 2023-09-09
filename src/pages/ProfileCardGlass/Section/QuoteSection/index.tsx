import { useState, useEffect } from "react";

export default function QuoteSection({ isShow }: { isShow: boolean }) {
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);

  useEffect(() => {
    if (!isShow) return;
    setTimeout(() => {
      setIsLoadingQuote(true);
    }, 1000);
  }, [isShow]);

  return (
    <div
      className={`text-center px- place-self-center max-w-[220px] h-full items-end grid pb-4 transition-all duration-1000 ${
        isLoadingQuote ? "opacity-100" : "opacity-0"
      }`}
      style={{ lineHeight: 1.45 }}
    >
      <span className="text-gray-400 italic font-normal text-xs">
        A lesson I learned from the gym, pain is important for growth
      </span>
    </div>
  );
}
