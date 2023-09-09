export default function QuoteSection({ isShow }: { isShow: boolean }) {
  return (
    <div
      className={`text-center px-5 place-self-center max-w-[220px] h-full items-end grid pb-4 transition-all ${
        isShow ? "opacity-100" : "opacity-0"
      }`}
      style={{ lineHeight: 1.45 }}
    >
      <span className="text-gray-500 italic font-normal text-xs">
        A lesson I learned from the gym, pain is important for growth
      </span>
    </div>
  );
}
