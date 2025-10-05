import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

type Option = {
  value: string | number;
  label: string;
};

type CustomeSelectProps = {
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconColor?: string;
};

function CustomeSelect({
  options,
  value,
  onChange,
  placeholder,
  className,
  iconColor,
}: CustomeSelectProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-md py-3 px-5 ${
          i18n.language === "ar" ? "pl-15" : "pr-15"
        } outline-0 cursor-pointer appearance-none w-full ${
          className || "border-2 border-[#CED4DA]"
        }`}
      >
        {placeholder && <option hidden>{placeholder}</option>}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white text-[#343A40]"
          >
            {t(option.label)}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`
          absolute top-1/2 -translate-y-1/2 pointer-events-none w-5
          ${i18n.language === "ar" ? "left-2" : "right-2 "}
        `}
        style={{ color: iconColor }}
      />
    </div>
  );
}

export default CustomeSelect;
