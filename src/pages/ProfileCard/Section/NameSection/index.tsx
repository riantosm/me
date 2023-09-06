import Assets from "@/assets";

export default function NameSection() {
  return (
    <div className="grid w-full h-ful mt-5">
      <div className="place-self-center items-center grid grid-cols-3 px-5 w-full">
        <div className="text-center">
          {/* <p className="text-white font-bold text-lg">542</p>
          <p className="text-slate-300 text-xs">Followers</p> */}
        </div>
        <img
          src={Assets.Images.ProfilePicture}
          alt=""
          className="w-20 h-20 rounded-full"
        />
        <div className="text-center">
          {/* <p className="text-white font-bold text-lg">534</p>
          <p className="text-slate-300 text-xs">Following</p> */}
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-white text-lg font-bold">Rian Tosm</p>
        <p className="text-slate-300 text-xs" style={{ lineHeight: 0.5 }}>
          Software Engineer
        </p>
      </div>
      {/* <div className="flex items-center gap-1 mt-5 w-fit place-self-center">
        <FiMapPin className="text-sky-400 text-sm" />
        <p className="text-sky-400 text-sm">Jakarta, Indonesia</p>
      </div> */}
      <div
        className="mt-5 text-center px-5 text-sm place-self-center w-[220px]"
        style={{ lineHeight: 1.2 }}
      >
        <p className="text-gray-200 italic">
          Dan pada akhirnya usaha bisa menghianati hasil
        </p>
      </div>
    </div>
  );
}
