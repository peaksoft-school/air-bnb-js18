import { useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Heart } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
import { Button } from "../Button";

export const BookingCard = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [openIn, setOpenIn] = useState(false);
  const [openOut, setOpenOut] = useState(false);

  const isDateSelected = checkIn && checkOut;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="w-full max-w-85 mx-auto">
      <div className="rounded-xl border bg-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold">$26</span>
            <span className="text-lg text-gray-500">/ day</span>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="h-6 w-6" />
          </button>
        </div>

        <div className="px-5 pb-6 pt-2">
          <div className="grid grid-cols-2 border rounded-xl overflow-hidden divide-x divide-gray-200">
            <Popover.Root open={openIn} onOpenChange={setOpenIn}>
              <Popover.Trigger asChild>
                <button
                  className={cn(
                    "flex flex-col items-start px-5 py-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100",
                    !checkIn && "text-gray-500",
                  )}
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-600">
                    Check in
                  </span>
                  <span className="mt-1 text-base font-medium">
                    {checkIn
                      ? format(checkIn, "d MMM", { locale: ru })
                      : "Select date"}
                  </span>
                </button>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                  className="z-50 rounded-md border bg-white p-3 shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                  sideOffset={8}
                  align="start"
                >
                  <DayPicker
                    mode="single"
                    selected={checkIn}
                    onSelect={(date) => {
                      setCheckIn(date);
                      setOpenIn(false);
                      if (date) setOpenOut(true);
                    }}
                    disabled={{ before: today }}
                    locale={ru}
                    classNames={{
                      day: "p-0 h-9 w-9 flex items-center justify-center text-sm rounded-full",
                      day_selected:
                        "bg-orange-500 text-white hover:bg-orange-600",
                      day_today: "border border-orange-400 font-semibold",
                      day_disabled: "text-gray-300 cursor-not-allowed",
                      head_cell:
                        "text-gray-500 font-medium text-xs uppercase tracking-wide pb-2",
                      caption:
                        "flex justify-center items-center gap-2 py-2 font-medium",
                      nav_button: "hover:bg-gray-100 rounded-full p-1",
                      table: "border-collapse",
                    }}
                    modifiersClassNames={{
                      selected: "bg-orange-500 text-white",
                    }}
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>

            <Popover.Root open={openOut} onOpenChange={setOpenOut}>
              <Popover.Trigger asChild>
                <button
                  className={cn(
                    "flex flex-col items-start px-5 py-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100",
                    !checkOut && "text-gray-500",
                  )}
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-600">
                    Check out
                  </span>
                  <span className="mt-1 text-base font-medium">
                    {checkOut
                      ? format(checkOut, "d MMM", { locale: ru })
                      : "Select date"}
                  </span>
                </button>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                  className="z-50 rounded-md border bg-white p-3 shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                  sideOffset={8}
                  align="end"
                >
                  <DayPicker
                    mode="single"
                    selected={checkOut}
                    onSelect={(date) => {
                      setCheckOut(date);
                      setOpenOut(false);
                    }}
                    disabled={{
                      before: checkIn ?? today,
                    }}
                    locale={ru}
                    classNames={{
                      day: "p-0 h-9 w-9 flex items-center justify-center text-sm rounded-full",
                      day_selected:
                        "bg-orange-500 text-white hover:bg-orange-600",
                      day_today: "border border-orange-400 font-semibold",
                      day_disabled: "text-gray-300 cursor-not-allowed",
                      head_cell:
                        "text-gray-500 font-medium text-xs uppercase tracking-wide pb-2",
                      caption:
                        "flex justify-center items-center gap-2 py-2 font-medium",
                      nav_button: "hover:bg-gray-100 rounded-full p-1",
                      table: "border-collapse",
                    }}
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <Button
            disabled={!isDateSelected}
            className={cn(
              "mt-5 w-full h-14 rounded-xl text-base font-medium transition-all",
              isDateSelected
                ? "bg-linear-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-500 cursor-not-allowed",
            )}
          >
            REQUEST BOOK
          </Button>

          <p className="text-center text-xs text-gray-500 mt-3">
            You have to be signed in to book a listing!
          </p>
        </div>
      </div>
    </div>
  );
};
