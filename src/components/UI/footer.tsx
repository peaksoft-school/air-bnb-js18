import AirbnbIcon from "../../assets/icon/Vector (3).svg";
import Telegramm from "../../assets/icon/telegram.svg";
import Instagram from "../../assets/icon/instagram.svg";
import WhatsApp from "../../assets/icon/whatsApp.svg";
function Footer() {
  return (
    <footer className="w-[1440px] h-[222px] bg-[#1C2E20] ">
      <div className="justify-between  flex px-25">
        <div className="flex gap-10 pt-[82px]">
          <span className="text-white">Regions</span>
          <span className="font-medium text-[#FFBE58]">leave an ad</span>
        </div>
        <div className="pt-15">
          <img className="w-22 h-16" src={AirbnbIcon} alt="Airbnb" />
        </div>
        <div className="flex gap-4 pt-18">
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px]">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px]">
            <img src={Telegramm} alt="telegramm" />
          </div>
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px]">
            <img src={WhatsApp} alt="whatsapp" />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-15">
        <p className="text-[#859589] text-sm">
          © Copyright PeakSoft. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;
