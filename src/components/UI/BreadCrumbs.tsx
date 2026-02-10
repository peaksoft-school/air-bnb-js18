import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/UI/breadcrumb";
import { Fragment } from "react";

interface BreadcrumbLink {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  if (!links || links.length === 0) return null;

  return (
    <Breadcrumb className="mb-10">
      <BreadcrumbList>
        {links.map(({ href, label }, i) => (
          <Fragment key={label + i}>
            <BreadcrumbItem>
              {i === links.length - 1 ? (
                <BreadcrumbPage className="text-[#222]">{label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={href}
                  className="text-[#c4c4c4] hover:text-[#222]"
                >
                  {label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {i < links.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
