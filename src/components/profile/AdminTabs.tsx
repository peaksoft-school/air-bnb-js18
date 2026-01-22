import type { TabType } from "./type";

interface AdminTabsProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

const AdminTabs = ({ activeTab, onChange }: AdminTabsProps) => {
  return (
    <div className="border-b mb-6 flex gap-8 text-sm justify-center">
      <button
        onClick={() => onChange("bookings")}
        className={`pb-2 ${
          activeTab === "bookings"
            ? "border-b-2 border-black text-gray-800 font-inter text-lg font-semibold"
            : "text-gray-600 font-inter text-lg font-normal"
        }`}
      >
        Bookings
      </button>

      <button
        onClick={() => onChange("announcements")}
        className={`pb-2 ${
          activeTab === "announcements"
            ? "border-b-2 border-black text-gray-800 font-inter text-lg font-semibold"
            : "text-gray-600 font-inter text-lg font-normal"
        }`}
      >
        My announcement
      </button>
    </div>
  );
};

export default AdminTabs;
