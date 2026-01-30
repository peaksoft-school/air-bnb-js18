import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { AdminHeader } from "@/layout/admin/AdminHeader";
import { ApplicationGallery } from "./ApplicationGallery";
import { ApplicationInfo } from "./ApplicationInfo";

export const Application = () => {
  return (
    <div>
      <AdminHeader />
      <Breadcrumbs
        items={[
          { label: "Application", href: "/applications" },
          { label: "Name" },
        ]}
      />
      <div className="flex">
      <ApplicationGallery />
      <ApplicationInfo />
      </div>
    </div>
  );
};
