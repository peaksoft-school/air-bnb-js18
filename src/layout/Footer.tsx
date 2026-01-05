import {
  InstagramIcon,
  Logo,
  TelegramIcon,
  WhatsAppIcon,
} from "@/assets/icons";

function Footer() {
  return (
    <footer className="w-full h-[222px] bg-[#1C2E20]  ">
      <div className="justify-between  flex px-25">
        <div className="flex gap-10 pt-[82px]">
          <span className="text-white">Regions</span>
          <span className="font-medium text-[#FFBE58]">leave an ad</span>
        </div>
        <div className="pt-15">
          <img className="w-22 h-16 cursor-pointer" src={Logo} alt="Airbnb" />
        </div>
        <div className="flex gap-4 pt-18 ">
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px] cursor-pointer">
            <img src={InstagramIcon} alt="instagram" />
          </div>
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px] cursor-pointer">
            <img src={TelegramIcon} alt="telegramm" />
          </div>
          <div className=" flex flex-col items-center justify-center w-10 h-10 bg-[#FFFFFF1F] rounded-[2px] cursor-pointer">
            <img src={WhatsAppIcon} alt="whatsapp" />
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
