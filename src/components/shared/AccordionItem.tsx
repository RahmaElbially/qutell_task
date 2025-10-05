import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white p-5 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-left font-medium"
      >
        <span className="text-base font-light">{title}</span>
        <span
          className={`transform transition-transform cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
