import { Card } from "../UI/card/Card";
import type { CardData } from "../UI/card/types";


interface AnnouncementsGridProps {
  data: CardData[];
}

const AnnouncementsGrid = ({ data }: AnnouncementsGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-6 w-225">
      {data.map((item, index) => (
        <Card key={index} variant="admin" data={item} />
      ))}
    </div>
  );
};

export default AnnouncementsGrid;
