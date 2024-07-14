import ComputerIcon from "../../public/icons/computer.svg";
import InterfaceIcon from "../../public/icons/interface.svg";
import PhoneIcon from "../../public/icons/phone.svg";
import SettingsIcon from "../../public/icons/settings.svg";
import SystemIcon from "../../public/icons/system.svg";
import TeamIcon from "../../public/icons/team.svg";

// service icon
import AndroidIcon from "../../public/icons/android.svg";
import CrossPlatformIcon from "../../public/icons/crossplatform.svg";
import IosIcon from "../../public/icons/ios.svg";

import FlutterIcon from "../../public/icons/flutter.svg";
import KotlinIcon from "../../public/icons/kotlin.svg";
import Swiftcon from "../../public/icons/swift.svg";

import MobileDev from "../../public/images/mobile_dev.png";

import CrmIcon from "../../public/icons/crm.svg";
import ECommerceIcon from "../../public/icons/e-commerce.svg";
import ELearningIcon from "../../public/icons/eLearning.svg";
import EmailIcon from "../../public/icons/email.svg";
import PosIcon from "../../public/icons/pos.svg";
import WareHouseIcon from "../../public/icons/warehouse.svg";

import Consulting from "../../public/images/consulting.svg";
import Design from "../../public/images/design.png";
import Desktop from "../../public/images/desktop.png";
import System from "../../public/images/system.png";

import AtomicDesignIcon from "../../public/icons/atomic.svg";
import MobileIcon from "../../public/icons/mobile.svg";
import PrototypingIcon from "../../public/icons/prototype.svg";
import UIIcon from "../../public/icons/ui.svg";
import UXIcon from "../../public/icons/ux.svg";
import WebDesignIcon from "../../public/icons/web-design.svg";

import FigmaIcon from "../../public/icons/figma.svg";
import IllustratorIcon from "../../public/icons/illustrator.svg";
import LottieIcon from "../../public/icons/lottie.svg";
import SketchIcon from "../../public/icons/sketch.svg";

import ArchitectureIcon from "../../public/icons/architecture.svg";
import CiCdIcon from "../../public/icons/ci:cd.svg";
import CloudIcon from "../../public/icons/cloud.svg";
import DevopsIcon from "../../public/icons/devops.svg";
import LoadTestingIcon from "../../public/icons/load-testing.svg";
import StressTestingIcon from "../../public/icons/stress.svg";
import AutoTestingIcon from "../../public/icons/testing.svg";

import BackendIcon from "../../public/icons/backend.svg";
import FrontendIcon from "../../public/icons/frontend.svg";
import QAIcon from "../../public/icons/qa.svg";
import UxUiIcon from "../../public/icons/UX:UI.svg";

export const services = [
  {
    id: "team",
    title: "Team",
    icon: TeamIcon,
  },
  {
    id: "mobile",
    title: "Development of mobile applications",
    titleDetail: "Development of mobile applications",
    description:
      "In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.",
    services: [
      {id: 1, title: "IOS", icon: IosIcon},
      {id: 2, title: "Android", icon: AndroidIcon},
      {id: 3, title: "Crossplatform", icon: CrossPlatformIcon},
    ],
    technologies: [
      {id: 1, title: "Swift", icon: Swiftcon},
      {id: 2, title: "Kotlin", icon: KotlinIcon},
      {id: 3, title: "Flutter", icon: FlutterIcon},
    ],
    icon: PhoneIcon,
    image: MobileDev,
  },
  {
    id: "erp",
    title: "Development and implementation ERP systems",
    titleDetail: "ERP systems",
    description:
      "IT Systems of any level of complexity at a convenient time for you",
    services: [
      {id: 1, title: "CRM", icon: CrmIcon},
      {id: 2, title: "eLearning", icon: ELearningIcon},
      {id: 3, title: "E-Commerce", icon: ECommerceIcon},
      {id: 4, title: "POS", icon: PosIcon},
      {id: 5, title: "Sms / Email", icon: EmailIcon},
      {id: 6, title: "Warehouse", icon: WareHouseIcon},
    ],
    icon: SystemIcon,
    image: Desktop,
  },
  {
    id: "design",
    title: "User interface, User experience design",
    titleDetail: "UI / UX design",
    description: "Our company takes a human-centered approach to design",
    services: [
      {id: 1, title: "UX", icon: UXIcon},
      {id: 2, title: "UI", icon: UIIcon},
      {id: 3, title: "Prototyping", icon: PrototypingIcon},
      {id: 4, title: "Mobile Design", icon: MobileIcon},
      {id: 5, title: "Web Design", icon: WebDesignIcon},
      {id: 6, title: "Atomic Design", icon: AtomicDesignIcon},
    ],
    technologies: [
      {id: 1, title: "Figma", icon: FigmaIcon},
      {id: 2, title: "Sketch", icon: SketchIcon},
      {id: 3, title: "Lottie", icon: LottieIcon},
      {id: 4, title: "Illustrator", icon: IllustratorIcon},
    ],
    icon: InterfaceIcon,
    image: Design,
  },
  {
    id: "optimization",
    title: "Optimization IT consulting infrastructure",
    titleDetail: "Optimization Infrastructure",
    description:
      "Our experienced professionals will help you optimize your infrastructure",
    services: [
      {id: 1, title: "Architecture", icon: ArchitectureIcon},
      {id: 2, title: "Auto testing", icon: AutoTestingIcon},
      {id: 3, title: "Stress testing", icon: StressTestingIcon},
      {id: 4, title: "Load testing", icon: LoadTestingIcon},
      {id: 5, title: "Devops", icon: DevopsIcon},
      {id: 6, title: "Cloud", icon: CloudIcon},
      {id: 7, title: "CI / CD", icon: CiCdIcon},
    ],
    icon: SettingsIcon,
    image: System,
  },
  {
    id: "consulting",
    title: "IT consulting",
    titleDetail: "IT consulting",
    description:
      "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
    services: [
      {id: 1, title: "Frontend", icon: FrontendIcon},
      {id: 2, title: "Backend", icon: BackendIcon},
      {id: 3, title: "Architecture", icon: ArchitectureIcon},
      {id: 4, title: "DevOps", icon: DevopsIcon},
      {id: 5, title: "UX/UI", icon: UxUiIcon},
      {id: 6, title: "QA", icon: QAIcon},
    ],
    icon: ComputerIcon,
    image: Consulting,
  },
];
