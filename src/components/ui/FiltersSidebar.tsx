import AccordionItem from "../shared/AccordionItem";
import { useTranslation } from "react-i18next";
import SearchInput from "../shared/SearchInput";
import { Check } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";

const categories: string[] = [
  "All",
  "Accessories",
  "Phone",
  "Headphone",
  "Camera",
];

interface ColorOption {
  color: string;
  checked: boolean;
}

const colors: ColorOption[] = [
  { color: "#1FA0C6", checked: false },
  { color: "#008000", checked: true },
  { color: "#C61FAA", checked: true },
  { color: "#1FC662", checked: false },
  { color: "#9DC61F", checked: false },
  { color: "#C67B1F", checked: true },
];

function FiltersSidebar() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <AccordionItem title={t("Keywords")}>
        <SearchInput placeholder={"Phone, Headphone, Shoe"} />
      </AccordionItem>

      <AccordionItem title={t("Categories")}>
        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => (
            <label key={i} className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 cursor-pointer mx-2" />
              {t(cat)}
            </label>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem title={t("Price")}>
        <PriceRangeSlider />
      </AccordionItem>

      <AccordionItem title={t("Colors")}>
        <div className="flex gap-2">
          {colors.map((c, i) => (
            <label key={i} className="cursor-pointer relative">
              <input
                type="checkbox"
                className="hidden peer"
                defaultChecked={c.checked}
              />
              <span
                className={`w-6 h-6 rounded block`}
                style={{ backgroundColor: c.color }}
              ></span>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 peer-checked:opacity-100">
                <Check className="w-4 h-4" />
              </span>
            </label>
          ))}
        </div>
      </AccordionItem>
    </div>
  );
}

export default FiltersSidebar;
