type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Breadcrumb[];
};

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <div className="flex items-center gap-2 text-sm text-[#C4C4C4] p-10">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <a href={item.href} className="hover:text-black">
              {item.label}
            </a>
          ) : (
            <span className="text-black font-medium">{item.label}</span>
          )}

          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};
