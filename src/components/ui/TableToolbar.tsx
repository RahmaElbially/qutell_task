import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomeSelect from "../shared/CustomeSelect";
import SearchInput from "../shared/SearchInput";

type Option = {
  label: string;
  value: string;
};

interface TableToolbarProps {
  onSortChange: (value: string) => void;
  onItemsChange: (value: string) => void;
  onActionChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onReset?: () => void;
  onDelete?: () => void;
  title?: string;
  showSearch?: boolean;
  searchValue?: string;
}

const sortOptions: Option[] = [
  { label: "Name", value: "name" },
  { label: "Date", value: "date" },
  { label: "Price", value: "price" },
];

const itemsPerPage: Option[] = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

const actions: Option[] = [
  { label: "Delete", value: "delete" },
  { label: "Edit", value: "edit" },
  { label: "Reset", value: "reset" },
];

function TableToolbar({
  onSortChange,
  onItemsChange,
  onActionChange,
  onSearch,
  onReset,
  onDelete,
  title = "All Items",
  showSearch = true,
  searchValue = "",
}: TableToolbarProps) {
  const { t } = useTranslation();
  const [selectedSort, setSelectedSort] = useState<string>("Sort by");
  const [selectedItems, setSelectedItems] = useState<string>("5");
  const [selectedAction, setSelectedAction] = useState<string>("Actions");

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    onSortChange(value);
  };

  const handleItemsChange = (value: string) => {
    setSelectedItems(value);
    onItemsChange(value);
  };

  const handleActionChange = (value: string) => {
    setSelectedAction(value);
    onActionChange(value);
    if (value === "reset") {
      setSelectedSort("Sort by");
      setSelectedItems("5");
      setSelectedAction("Actions");
      onReset?.();
    }

    if (value === "delete") onDelete?.();
  };

  return (
    <div
      className="bg-white p-8 rounded-xl flex
                flex-col xl:flex-row items-left xl:items-center gap-5 xl:gap-0 justify-between"
    >
      <div className="flex flex-col md:flex-row items-left md:items-center justify-between gap-5">
        <p>{t(title)}</p>

        <CustomeSelect
          options={sortOptions}
          value={selectedSort}
          onChange={handleSortChange}
          placeholder={t("Sort by")}
        />

        <CustomeSelect
          options={itemsPerPage}
          value={selectedItems}
          onChange={handleItemsChange}
        />

        {showSearch && (
          <SearchInput
            placeholder={"Search"}
            value={searchValue}
            onChange={(value) => onSearch?.(value)}
          />
        )}
      </div>

      <CustomeSelect
        options={actions}
        value={selectedAction}
        onChange={handleActionChange}
        placeholder={t("Actions")}
        className="bg-primary text-white border-0"
        iconColor="white"
      />
    </div>
  );
}

export default TableToolbar;
