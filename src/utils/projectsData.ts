import AdminPanelIcon from "../../public/icons/admin-panel.svg";
import CrossPlatformIcon from "../../public/icons/cross-platform.svg";
import MobileDesignIcon from "../../public/icons/mobile-design.svg";
import WebDesignIcon from "../../public/icons/webdesign.svg";
import WebsiteIcon from "../../public/icons/website.svg";

// Delever

import DeliveryIcon from "../../public/icons/Delivery.svg";
import Delever from "../../public/images/delever-name.svg";
import DeleverImage from "../../public/images/delever_app.png";

// SMS.UZ

import SMSUZIcon from "../../public/icons/smsuz-icon.svg";
import SMSUZName from "../../public/images/smsuz-name.svg";
import SMSUZ from "../../public/images/smsuz_app.png";

// Goodzone
import GoodzoneIcon from "../../public/icons/goodzone.svg";
import Goodzone from "../../public/images/goodzone-app.png";
import GoodzoneName from "../../public/images/goodzone.png";

// Iman
import FinanceIcon from "../../public/icons/finance.svg";
import ImanName from "../../public/images/iman-name.svg";
import Iman from "../../public/images/imanApp.png";

export const projects = [
  {
    id: 1,
    image: DeleverImage,
    name: "Delever",
    type: "Delivery",
    nameImage: Delever,
    icon: DeliveryIcon,
    color: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.2)",
    description:
      "Delever - Delivery service automation targeted at both consumers and restaurants.",
    technologies: [
      {
        id: 1,
        title: "Website",
        icon: WebsiteIcon,
      },
      {
        id: 2,
        title: "Admin panel",
        icon: AdminPanelIcon,
      },
      {
        id: 3,
        title: "Crossplatform",
        icon: CrossPlatformIcon,
      },
      {
        id: 4,
        title: "Web design",
        icon: WebDesignIcon,
      },
      {
        id: 5,
        title: "Mobile design",
        icon: MobileDesignIcon,
      },
    ],
  },
  {
    id: 2,
    image: SMSUZ,
    name: "Sms.uz",
    type: "Notification",
    nameImage: SMSUZName,
    icon: SMSUZIcon,
    color: "#4473E5",
    bgColor: "rgba(68, 115, 229, 0.2)",
    description: "Smsuz.uz - It is a platform for bulk SMS messaging.",
    technologies: [
      {
        id: 1,
        title: "Website",
        icon: WebsiteIcon,
      },
      {
        id: 2,
        title: "Admin panel",
        icon: AdminPanelIcon,
      },
      {
        id: 3,
        title: "Crossplatform",
        icon: CrossPlatformIcon,
      },
    ],
  },
  {
    id: 3,
    image: Goodzone,
    name: "Goodzone",
    type: "E-Commerce",
    nameImage: GoodzoneName,
    icon: GoodzoneIcon,
    color: "#F50000",
    bgColor: "rgba(245, 0, 0, 0.2)",
    description:
      "Goodzone - Internet shop of household appliances in Uzbekistan.",
    technologies: [
      {
        id: 1,
        title: "Website",
        icon: WebsiteIcon,
      },
      {
        id: 2,
        title: "Admin panel",
        icon: AdminPanelIcon,
      },
      {
        id: 3,
        title: "Crossplatform",
        icon: CrossPlatformIcon,
      },
      {
        id: 4,
        title: "Web design",
        icon: WebDesignIcon,
      },
      {
        id: 5,
        title: "Mobile design",
        icon: MobileDesignIcon,
      },
    ],
  },
  {
    id: 4,
    image: Iman,
    name: "Iman",
    nameImage: ImanName,
    type: "Finance",
    icon: FinanceIcon,
    color: "#01CAB0",
    bgColor: "rgba(1, 202, 176, 0.2)",
    description:
      "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
    technologies: [
      {
        id: 1,
        title: "Website",
        icon: WebsiteIcon,
      },
      {
        id: 2,
        title: "Admin panel",
        icon: AdminPanelIcon,
      },
      {
        id: 3,
        title: "Crossplatform",
        icon: CrossPlatformIcon,
      },
    ],
  },
];
