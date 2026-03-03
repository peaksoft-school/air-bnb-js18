import { useEffect, useRef, type ComponentProps } from "react";
import { DayPicker, DayButton, getDefaultClassNames } from "react-day-picker";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Кастомная кнопка дня — оранжевая
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square h-auto w-full min-w-[--cell-size] items-center justify-center rounded-xl font-normal leading-none",
        "hover:bg-gray-100 transition-colors",
        "data-[selected-single=true]:bg-[#DD8A08] data-[selected-single=true]:text-white data-[selected-single=true]:rounded-full data-[selected-single=true]:hover:bg-[#c47d07]",
        "data-[range-start=true]:bg-[#DD8A08] data-[range-start=true]:text-white",
        "data-[range-end=true]:bg-[#DD8A08] data-[range-end=true]:text-white",
        "data-[range-middle=true]:bg-orange-100 data-[range-middle=true]:text-[#DD8A08] data-[range-middle=true]:rounded-none",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

// Основной Calendar компонент
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-white p-5", className)}
      classNames={{
        root: cn("w-full", defaultClassNames.root),
        months: cn("flex flex-col gap-4", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "inset-x-2 top-0 flex w-[90%] items-center justify-between absolute top-6",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          "h-[--cell-size] w-[--cell-size] p-0 aria-disabled:opacity-30",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          "h-[--cell-size] w-[--cell-size] p-0 aria-disabled:opacity-30",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          defaultClassNames.month_caption,
        ),
        caption_label: cn(
          "capitalize text-base font-medium",
          defaultClassNames.caption_label,
        ),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-gray-400 flex-1 text-sm font-normal text-center",
          defaultClassNames.weekday,
        ),
        week: cn("mt-1 flex w-full", defaultClassNames.week),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center text-base",
          defaultClassNames.day,
        ),
        outside: cn("text-gray-300 opacity-40", defaultClassNames.outside),
        disabled: cn(
          "text-gray-300 opacity-40 line-through",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        today: cn("font-semibold", defaultClassNames.today),
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: cls }) => {
          if (orientation === "left")
            return <ChevronLeftIcon className={cn("size-6", cls)} />;
          if (orientation === "right")
            return <ChevronRightIcon className={cn("size-6", cls)} />;
          return <ChevronDownIcon className={cn("size-4", cls)} />;
        },
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
