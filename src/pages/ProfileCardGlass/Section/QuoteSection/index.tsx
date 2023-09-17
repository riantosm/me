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
      className={`text-center px- place-self-center max-w-[220px] h-full items-end grid pb-2 transition-all duration-1000 ${
        isLoadingQuote ? "opacity-100" : "opacity-0"
      }`}
      style={{ lineHeight: 1.45 }}
    >
      <span className="text-gray-100 italic font-normal text-xs">
        Failure is{" "}
        <span className="line-through text-gray-400">delayed success</span> my
        bad
      </span>
    </div>
  );
}
