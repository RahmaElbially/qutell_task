import { ChevronsLeft, ChevronsRight } from "lucide-react";
// import { useState } from "react";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

// const pages: number[] = [1, 2, 3];

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const { i18n } = useTranslation();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalItems === 0) return null;

  return (
    <div className="my-5">
      <ul className="flex items-center justify-center text-primary">
        <li
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="bg-white cursor-pointer border border-[#DEE2E6] rounded-l-md px-3 py-4"
        >
          {i18n.language === "ar" ? (
            <ChevronsRight className="w-4 h-4" />
          ) : (
            <ChevronsLeft className="w-4 h-4" />
          )}
        </li>

        {pages.map((page: number) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              cursor-pointer border border-[#DEE2E6] px-4 py-3
              ${
                currentPage === page
                  ? "bg-primary text-white border-x-0"
                  : "bg-white"
              }
            `}
          >
            {page}
          </li>
        ))}

        <li
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="bg-white cursor-pointer border border-[#DEE2E6] rounded-r-md px-3 py-4"
        >
          {i18n.language === "ar" ? (
            <ChevronsLeft className="w-4 h-4" />
          ) : (
            <ChevronsRight className="w-4 h-4" />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
