import { LeaveAnAdHeader } from "../../containers/LeaveAnAdPage/LeaveAnAdHeader";
import { LeaveAnAdForm } from "../../containers/LeaveAnAdPage/LeaveAnAdForm";
import { Footer } from "@/layout/Footer";

export const LeaveAnAdPage = () => {
  return (
    <div>
      <LeaveAnAdHeader />

      <div className="my-10">
        <LeaveAnAdForm />
      </div>

      <Footer />
    </div>
  );
};
