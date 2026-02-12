import DownArrow from "@/assets/icons/downArrow.svg";

export const HeaderWithRight = () => (
  <div className="flex items-center gap-6">
    <button className="text-[#363636] text-[14px] font-medium uppercase">
      FAVORITE(4)
    </button>

    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-[#2F80ED] flex items-center justify-center">
        <span className="text-white font-medium">A</span>
      </div>

      <img src={DownArrow} alt="arrow" className="w-3.5 h-2 opacity-70" />
    </div>
  </div>
);
