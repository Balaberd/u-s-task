import { ReactComponent as IconSearch } from "../../../assets/icons/search.svg";
import { ReactComponent as IconDatabase } from "../../../assets/icons/database.svg";
import { ReactComponent as IconArrowRightS } from "../../../assets/icons/arrowRightS.svg";
import { ReactComponent as IconArrowRightM } from "../../../assets/icons/arrowRightM.svg";
import { ReactComponent as IconDots } from "../../../assets/icons/dots.svg";
import { ReactComponent as IconFilter } from "../../../assets/icons/filter.svg";
import { ReactComponent as IconSettings } from "../../../assets/icons/settings.svg";

interface IconMap {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const ICON_MAP: IconMap = {
  search: IconSearch,
  database: IconDatabase,
  arrowS: IconArrowRightS,
  arrowM: IconArrowRightM,
  dots: IconDots,
  filter: IconFilter,
  settings: IconSettings,
};
