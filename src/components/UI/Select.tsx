import { forwardRef, useState } from "react";

type Option = {
  id: number;
  value: string;
  label: string;
};

type SelectChangeEvent = {
  target: {
    value: string;
  };
};

type SelectProps = {
  label: string;
  options: Option[];
  value?: string;
  defaultId?: number;
  isValueAsId?: boolean;
  isRating?: boolean;
  onChange?: (e: SelectChangeEvent) => void;
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      defaultId,
      isValueAsId = false,
      isRating = false,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const findedOption = options.find((option) =>
      value !== undefined
        ? option.value === value
        : option.id === Number(defaultId),
    );

    const [internalOption, setInternalOption] = useState<Option | undefined>(
      findedOption,
    );

    const selectedOption = value !== undefined ? findedOption : internalOption;
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (option: Option) => {
      if (value === undefined) {
        setInternalOption(option);
      }

      onChange?.({
        target: {
          value: option.value,
        },
      });

      setIsOpen(false);
    };

    return (
      <div ref={ref} className="relative w-67.75" {...rest}>
        <div
          className="py-3 px-4 border rounded cursor-pointer flex justify-between"
          onClick={() => setIsOpen((p) => !p)}
        >
          <span className="text-[#828282]">{label}</span>
          <span>{selectedOption?.label}</span>
        </div>

        {isOpen && (
          <ul className="absolute w-full mt-1 border rounded bg-white z-10">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelectChange(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
