import { INavigationMenu } from "../../../lib/types/navigationMenu";
import { Icon } from "../../shared";

export const navigationMenu: INavigationMenu[] = [
  {
    title: "CMDB",
    icon: <Icon iconName="database" />,
    subtitleList: [
      { name: "Серверы и ПК", path: "/cmdb/servers_and_pc" },
      { name: "Гипервизоры и вирт. машины", path: "/cmdb/hypervisors" },
      { name: "Принтеры и МФУ", path: "/cmdb/printers" },
      { name: "Сетевые устройства и МФУ", path: "/cmdb/newtwork_devices" },
    ],
  },
  {
    title: "Мониторинг",
    icon: <Icon iconName="database" />,
    subtitleList: [
      { name: "Test - 1", path: "/monitoring/path-1" },
      { name: "Test - 2", path: "/monitoring/path-2" },
    ],
  },
];
