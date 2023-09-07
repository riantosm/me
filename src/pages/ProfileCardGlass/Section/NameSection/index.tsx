import Assets from "@/assets";

export default function NameSection() {
  return (
    <div className="flex-grow grid items-center h-fit">
      <div className="grid w-full h-full">
        <div className="place-self-center items-center grid justify-center px-5 w-full">
          <img
            src={Assets.Images.ProfilePicture}
            alt=""
            className="max-w-20 h-20 rounded-full shadow-xl aspect-square object-contain"
          />
        </div>
        <div className="text-center mt-2">
          <p className="text-white text-lg font-bold font-noto">Rian Tosm</p>
          <p
            className="text-gray-500 font-normal text-[11px]"
            style={{ lineHeight: 0.7 }}
          >
            Software Engineer
          </p>
        </div>
        {/* <div className="flex items-center gap-1 mt-5 w-fit place-self-center">
        <FiMapPin className="text-sky-400 text-sm" />
        <p className="text-sky-400 text-sm">Jakarta, Indonesia</p>
      </div> */}
      </div>
    </div>
  );
}