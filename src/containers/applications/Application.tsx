import { ApplicationGallery } from "./ApplicationGallery";
import { ApplicationInfo } from "./ApplicationInfo";
import Breadcrumbs from "@/components/UI/BreadCrumbs";

const Application = () => {
  return (
    <div>
      <Breadcrumbs
        links={[
          { label: "Application", href: "/applications" },
          { label: "Name", href: "/applications" },
        ]}
      />
      <div className="flex">
        <ApplicationGallery />
        <ApplicationInfo />
      </div>
    </div>
  );
};

export default Application;
