import search from "../../assets/search.svg";
import { useTranslation } from "react-i18next";

interface SearchInputProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex relative">
      <img
        src={search}
        alt="Search Icon"
        className={`absolute top-4 w-4 h-4 ${
          i18n.language === "ar" ? "left-5" : "right-5"
        }`}
      />
      <input
        className="
          border-2 border-[#CED4DA] outline-0 rounded-md py-3 px-5 pr-10 w-full lg:w-40 xl:w-full 
          text-secondary"
        type="text"
        placeholder={`${t(placeholder)}...`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
