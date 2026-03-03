import "dayjs/locale/ru";
import dayjs, { Dayjs } from "dayjs";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Calendar } from "./calendar";
import { CalendarIcon } from "@/assets/icons";

interface DatePickerProps {
  label?: string;
  value?: Dayjs | null;
  date?: Dayjs | string | null;
  onChange?: (value: Dayjs | null) => void;
  defaultValue?: Dayjs | null;
  className?: string;
  id?: string;
}

const DatePicker = ({
  value,
  date,
  onChange,
  defaultValue,
  className,
  id,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | undefined>(
    defaultValue ? defaultValue.toDate() : undefined,
  );

  const selectedDate =
    value !== undefined ? (value ? value.toDate() : undefined) : internalDate;

  const isDateDisabled = (day: Date): boolean => {
    if (date) return dayjs(day).isBefore(dayjs(date), "day");
    return false;
  };

  const handleSelect = (day: Date | undefined) => {
    const dayjsValue = day ? dayjs(day) : null;
    if (value === undefined) setInternalDate(day);
    onChange?.(dayjsValue);
    setOpen(false);
  };

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            className={cn(
              "w-[13.563rem] h-14 justify-around text-left font-normal border border-gray-400500 rounded flex items-center cursor-pointer",
              !selectedDate && "text-gray-400",
            )}
          >
            {selectedDate ? (
              format(selectedDate, "dd/MM/yy", { locale: ru })
            ) : (
              <span className="text-[rgb(175,175,175)] font-[Inter] text-[18px]">
                Select date
              </span>
            )}
            <img src={CalendarIcon} className="h-6 w-6 text-gray-400" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-62.5 p-0 shadow-lg border border-gray-200 relative bottom-60 right-4"
          align="start"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            disabled={isDateDisabled}
            locale={ru}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
