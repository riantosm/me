// import styles from "./styles.module.css";
import Assets from "@/assets";
import "./styles.css";

export default function ProfileCard() {
  return (
    <div>
      <div className="card items-start">
        <div className="grid mt-10 w-full">
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
            <p className="text-slate-300 text-xs">Software Engineer</p>
          </div>
          <div className="mt-10 px-5">
            <p className="text-justify">
              <span className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur.{" "}
                <span className="text-white">Hai, saya Rian.</span> Nemo culpa
                error sit qui quidem quaerat non, a aut id architecto illum
                similique porro! Tenetur perspiciatis nisi, ea at beatae natus!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
