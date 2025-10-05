import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import earth from "../../assets/earth.svg";

function BreadCrumb() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const segments: string[] = pathname.split("/").filter(Boolean);
  const firstSegment: string = segments[0] || "dashboard";
  const displayName: string =
    firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);

  return (
    <div className="flex items-center gap-2 my-10 text-primary text-xl">
      <div className="flex items-center gap-3">
        <img src={earth} alt="Earth Icon" className="w-4 h-4" />
        <Link to="/" className="hover:underline">
          {t("Dashboard")}
        </Link>
      </div>
      {firstSegment !== "dashboard" && (
        <>
          <span className="text-secondary">&gt;</span>
          <span className="text-secondary">{t(displayName)}</span>
        </>
      )}
    </div>
  );
}

export default BreadCrumb;
