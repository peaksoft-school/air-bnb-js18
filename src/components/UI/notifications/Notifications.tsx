import { X } from "lucide-react";

type NotificationVariant = "unblocked" | "blocked" | "wrong" | "booked";

const contentByVariant: Record<
  NotificationVariant,
  { title: string; description: string; bg: string; border: string }
> = {
  unblocked: {
    title: "Unblocked :)",
    description: "The house was successfully unblocked",
    bg: "bg-[#F0FFF1]",
    border: "border-[#DFF5E1]",
  },
  blocked: {
    title: "Blocked :)",
    description: "The house was successfully blocked",
    bg: "bg-[#F0FFF1]",
    border: "border-[#DFF5E1]",
  },
  wrong: {
    title: "Uh oh! Something went wrong :(",
    description:
      "We either couldn't find anything matching your search or have encountered an error. If you're searching for a unique location, try searching again with more common keywords.",
    bg: "bg-[#FFF1F0]",
    border: "border-[#DFF5E1]",
  },
  booked: {
    title: "Booked :)",
    description: "The house was successfully booked",
    bg: "bg-[#F0FFF1]",
    border: "border-[#DFF5E1]",
  },
};

type NotificationProps = {
  variant: NotificationVariant;
  onClose?: () => void;
};

export function Notification({ variant, onClose }: NotificationProps) {
  const content = contentByVariant[variant];

  return (
    <div
      className={`
        relative
        w-[612px]
        ${variant === "wrong" ? "h-[100px]" : "h-[66px]"}
        ${content.bg}
        ${content.border}
        border
        px-[28px]
        py-[12px]
        flex items-center
        animate-in
        slide-in-from-top-2
        fade-in
        duration-300
      `}
    >
      <div className="w-[556px] h-[42px] flex flex-col justify-center">
        <p className="text-sm font-medium text-black">{content.title}</p>
        <p className="text-sm text-[#646464]">{content.description}</p>
      </div>

      <button
        onClick={onClose}
        className="
          absolute
          top-[6.75px]
          right-[6.75px]
          w-[10.5px] h-[10.5px]
          text-[#828282]
          hover:opacity-70
        "
      >
        <X size={10.5} />
      </button>
    </div>
  );
}
