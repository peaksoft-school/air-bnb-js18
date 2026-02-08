import { Card } from "@/components/UI/card/Card";
import type { CardData } from "@/components/UI/card/types";


interface AnnouncementProps {
  data?: CardData[];
}

export const Announcement = ({ data = [] }: AnnouncementProps) => {
  return (
    <div className="grid grid-cols-4 gap-6 w-225">
      {data.map((item, index) => (
        <Card key={index} variant="admin" data={item} />
      ))}
    </div>
  );
};
