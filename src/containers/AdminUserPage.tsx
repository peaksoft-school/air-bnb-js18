import { useState } from "react";
import AdminTabs from "@/components/profile/AdminTabs";
import AnnouncementsGrid from "@/components/profile/AnnouncementsGrid";
import { UserProfileCard } from "@/components/profile/UserProfileCard";
import type { CardData } from "@/components/UI/card/types";


type TabType = "bookings" | "announcements";

const AdminUserPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("bookings");

  const bookingsData: CardData[] = [
    {
      title: "Cozy Apartment in the City Center",
      images: [
        "https://i.pinimg.com/736x/d3/00/09/d3000983dd414fac2669e650a93be852.jpg",
      ],
      price: 120,
      address: "New York, NY",
      rating: 4.5,
      guests: 2,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
  ];

  const announcementsData: CardData[] = [
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
    {
      title: "Modern Loft with Skyline View",
      images: [
        "https://attachments.timetreeapp.com/public_event/49b6/2024-06-17/0-1718666932450.jpg",
      ],
      price: 200,
      address: "Los Angeles, CA",
      rating: 4.8,
      guests: 4,
    },
  ];

  return (
    <div className="flex gap-11.75 my-10 mx-10 justify-between">
      <UserProfileCard
        user={{
          fullName: "Медер Медербеков",
          email: "mederbekov@gmail.com",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPODTQFvcf-4hkXhUiwnnhrvyUJyjPlChzQ&s",
        }}
      />

      <div className="flex-1">
        <AdminTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "bookings" && <AnnouncementsGrid data={bookingsData} />}

        {activeTab === "announcements" && (
          <AnnouncementsGrid data={announcementsData} />
        )}
      </div>
    </div>
  );
};

export default AdminUserPage;
