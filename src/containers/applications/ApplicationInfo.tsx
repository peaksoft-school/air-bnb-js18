import { Button } from "@/components/UI/Button";

export const ApplicationInfo = () => {
  return (
    <div className="pt-13 pl-20">
      <div className="flex gap-5 ">
        <span className="px-3 py-1  bg-[#FFF0F6] border border-[#FFCBE0] ">
          Apartement
        </span>
        <span className="px-3 py-1  bg-[#FFF0F6] border border-[#FFCBE0]">
          2 Guests
        </span>
      </div>

      <div className=" pt-5">
        <h1 className="text-xl font-medium ">Name of hotel</h1>
        <p className="text-[#828282] \font-['Inter']">
          12 Morris Ave, Toronto, ON, CA
        </p>
      </div>

      <div className="w-135.5 h-21 pt-5">
        <p className="text-[#363636] text-[16px] ">
          The hotel will provide guests with air-conditioned rooms offering a
          desk, a kettle, a fridge, a minibar, a safety deposit box, a
          flat-screen TV and a shared bathroom with a shower. At Garden Hotel &
          SPA the rooms have bed linen and towels.
        </p>
      </div>

      <div className="flex items-center gap-4 pt-15">
        <div className="w-9 h-9 bg-[#C4C4C4] rounded-full"></div>
        <div>
          <h4 className="font-medium text-[16px] leading-tight">Anna Annova</h4>
          <p className="text-[#828282] text-[16px]">anna@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-5 pt-12">
        <Button variant="default">Reject</Button>

        <Button variant="outline">Accept</Button>
      </div>
    </div>
  );
};
