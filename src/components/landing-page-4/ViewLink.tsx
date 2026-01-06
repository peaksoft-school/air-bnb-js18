type ViewLinkProps = {
  className?: string;
};

export const ViewLink = ({ className = "" }: ViewLinkProps) => {
  return (
    <span
      className={`text-base font-normal leading-4.75 text-[#363636] ${className}`}
    >
      View all
    </span>
  );
};
