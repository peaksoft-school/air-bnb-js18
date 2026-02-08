import { useState } from "react";
import {
  Tabs as ShadcnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/UI/tabs";

interface Tab {
  label: string;
  Component: React.ComponentType<any>;
}

interface TabsProps {
  tabs: Tab[];
  data?: any;
}

const Tabs = ({ tabs }: TabsProps) => {
  const [value, setValue] = useState(tabs[0]?.label || "");

  if (!tabs || tabs.length === 0) return null;

  return (
    <ShadcnTabs value={value} onValueChange={setValue} className="w-full">
      <TabsList className="w-full justify-center gap-20 border-b-2 border-[#c4c4c4] bg-transparent rounded-none h-auto p-0">
        {tabs.map(({ label }) => (
          <TabsTrigger
            key={label}
            value={label}
            className="text-[#363636] capitalize text-lg px-4 pb-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#363636] rounded-none"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ Component, label }) => (
        <TabsContent key={label} value={label}>
          <Component />
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
};

export default Tabs;