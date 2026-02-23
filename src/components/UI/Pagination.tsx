import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  count,
  page,
  onChange,
  className,
}: PaginationProps) => {
  if (count <= 1) return null;

  return (
    <nav className={cn("flex items-center gap-2", className)}>
      <Button
        size="icon"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="hover:text-secondary"
      >
        ‹
      </Button>

      {Array.from({ length: count }).map((_, index) => {
        const currentPage = index + 1;
        const isActive = currentPage === page;

        return (
          <Button
            key={currentPage}
            size="icon"
            onClick={() => onChange(currentPage)}
            className={cn(
              "hover:bg-transparent hover:text-secondary focus:text-secondary",
              isActive && "text-secondary bg-transparent hover:bg-transparent",
            )}
          >
            {currentPage}
          </Button>
        );
      })}

      <Button
        size="icon"
        disabled={page === count}
        onClick={() => onChange(page + 1)}
        className="hover:text-secondary"
      >
        ›
      </Button>
    </nav>
  );
};
