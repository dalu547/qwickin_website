import mobileApp from "../assets/mobileapp.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-[760px] h-[560px]">
      <img
        src={mobileApp}
        alt="Qwickin mobile app screens"
        className="w-full h-auto"
      />
    </div>
  );
};
