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

// technologies
import Android from "../../public/icons/android-mini.svg";
import AWS from "../../public/icons/aws.svg";
import Azure from "../../public/icons/azure.svg";
import Balsamic from "../../public/icons/balsamic.svg";
import Bitbucket from "../../public/icons/bitbucket.svg";
import DO from "../../public/icons/do.svg";
import ELK from "../../public/icons/elk.svg";
import Figma from "../../public/icons/figma.svg";
import Flutter from "../../public/icons/flutter.svg";
import GCP from "../../public/icons/gcp.svg";
import Gitlab from "../../public/icons/gitlab.svg";
import Grafana from "../../public/icons/grafana.svg";
import Invision from "../../public/icons/invision.svg";
import IOS from "../../public/icons/ios.svg";
import Java from "../../public/icons/java.svg";
import JS from "../../public/icons/js.svg";
import Kotlin from "../../public/icons/kotlin-mini.svg";
import Kubernetes from "../../public/icons/kubernetes.svg";
import Loki from "../../public/icons/loki.svg";
import Next from "../../public/icons/next.svg";
import Promotheus from "../../public/icons/promotheus.svg";
import React from "../../public/icons/react.svg";
import Swift from "../../public/icons/swift.svg";
import Terraform from "../../public/icons/terraform.svg";

import AdobeSuite from "../../public/icons/adobesuite.svg";
import AntDesign from "../../public/icons/antdesign.svg";
import Docker from "../../public/icons/docker.svg";
import Gatsby from "../../public/icons/gatsby.png";
import GO from "../../public/icons/go.svg";
import Node from "../../public/icons/node.svg";
import PHP from "../../public/icons/php.svg";
import Postgres from "../../public/icons/postgresql.svg";
import Principle from "../../public/icons/principle.svg";
import Python from "../../public/icons/python.svg";
import Sketch from "../../public/icons/sketch.svg";
import Vue from "../../public/icons/vue.svg";

import Appium from "../../public/icons/appium.svg";
import Cassandra from "../../public/icons/casandra.svg";
import Cypress from "../../public/icons/cypress.svg";
import Illustrator from "../../public/icons/illustrator.svg";
import Jmeter from "../../public/icons/jmeter.svg";
import Lottie from "../../public/icons/lottie-mini.svg";
import MongoDB from "../../public/icons/mongodb.svg";
import MUI from "../../public/icons/mui.svg";
import Photoshop from "../../public/icons/photoshop.svg";
import Zeplin from "../../public/icons/principle.svg";
import Sass from "../../public/icons/sass.svg";
import YouTrack from "../../public/icons/youtrack.svg";

export const services = [
  {
    id: 1,
    title: "Team",
    icon: TeamIcon,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

export const tools = [
  "frontend",
  "backend",
  "devops",
  "testing",
  "UX/UI",
  "infrastructure",
  "mobile",
];

export const technologies = [
  {
    id: 1,
    title: "Promotheus",
    icon: Promotheus,
    type: 2,
  },
  {
    id: 2,
    title: "Loki",
    icon: Loki,
    type: 2,
  },
  {
    id: 3,
    title: "Bitbucket",
    icon: Bitbucket,
    type: 2,
  },
  {
    id: 4,
    title: "Gitlab",
    icon: Gitlab,
    type: 2,
  },
  {
    id: 5,
    title: "Kotlin",
    icon: Kotlin,
    type: 6,
  },
  {
    id: 6,
    title: "Android",
    icon: Android,
    type: 6,
  },
  {
    id: 7,
    title: "Java",
    icon: Java,
    type: 6,
  },
  {
    id: 8,
    title: "Azure",
    icon: Azure,
    type: 5,
  },
  {
    id: 9,
    title: "GCP",
    icon: GCP,
    type: 5,
  },
  {
    id: 10,
    title: "DigitalOcean",
    icon: DO,
    type: 5,
  },
  {
    id: 11,
    title: "AWS",
    icon: AWS,
    type: 5,
  },
  {
    id: 12,
    title: "Kubernetes",
    icon: Kubernetes,
    type: 5,
  },
  {
    id: 13,
    title: "ELK",
    icon: ELK,
    type: 2,
  },
  {
    id: 14,
    title: "Grafana",
    icon: Grafana,
    type: 2,
  },
  {
    id: 15,
    title: "Terraform",
    icon: Terraform,
    type: 2,
  },
  {
    id: 16,
    title: "IOS",
    icon: IOS,
    type: 6,
  },
  {
    id: 17,
    title: "Swift",
    icon: Swift,
    type: 6,
  },
  {
    id: 18,
    title: "Flutter",
    icon: Flutter,
    type: 6,
  },
  {
    id: 19,
    title: "Next.JS",
    icon: Next,
    type: 0,
  },
  {
    id: 20,
    title: "React.JS",
    icon: React,
    type: 0,
  },
  {
    id: 21,
    title: "Javascript",
    icon: JS,
    type: 0,
  },
  {
    id: 22,
    title: "Balsamic",
    icon: Balsamic,
    type: 4,
  },
  {
    id: 23,
    title: "Invision",
    icon: Invision,
    type: 4,
  },
  {
    id: 24,
    title: "Figma",
    icon: Figma,
    type: 4,
  },
  {
    id: 25,
    title: "Docker",
    icon: Docker,
    type: 2,
  },
  {
    id: 26,
    title: "PostgreSQL",
    icon: Postgres,
    type: 1,
  },
  {
    id: 27,
    title: "Python",
    icon: Python,
    type: 1,
  },
  {
    id: 28,
    title: "Node.JS",
    icon: Node,
    type: 1,
  },
  {
    id: 29,
    title: "PHP",
    icon: PHP,
    type: 1,
  },
  {
    id: 30,
    title: "GO",
    icon: GO,
    type: 1,
  },
  {
    id: 31,
    title: "Ant Design",
    icon: AntDesign,
    type: 0,
  },
  {
    id: 32,
    title: "Gatsby.JS",
    icon: Gatsby,
    type: 0,
  },
  {
    id: 33,
    title: "Vue.JS",
    icon: Vue,
    type: 0,
  },
  {
    id: 34,
    title: "Principle",
    icon: Principle,
    type: 4,
  },
  {
    id: 35,
    title: "Sketch",
    icon: Sketch,
    type: 4,
  },
  {
    id: 36,
    title: "Adobe suite",
    icon: AdobeSuite,
    type: 4,
  },

  {
    id: 37,
    title: "YouTrack",
    icon: YouTrack,
    type: 3,
  },
  {
    id: 38,
    title: "Appium",
    icon: Appium,
    type: 3,
  },
  {
    id: 39,
    title: "Cypress",
    icon: Cypress,
    type: 3,
  },
  {
    id: 40,
    title: "Jmeter",
    icon: Jmeter,
    type: 3,
  },
  {
    id: 41,
    title: "MongoDB",
    icon: MongoDB,
    type: 1,
  },
  {
    id: 42,
    title: "Cassandra",
    icon: Cassandra,
    type: 1,
  },
  {
    id: 43,
    title: "Sass",
    icon: Sass,
    type: 0,
  },
  {
    id: 44,
    title: "Material UI",
    icon: MUI,
    type: 0,
  },
  {
    id: 45,
    title: "Zeplin",
    icon: Zeplin,
    type: 4,
  },
  {
    id: 46,
    title: "Illustrator",
    icon: Illustrator,
    type: 4,
  },
  {
    id: 47,
    title: "Lottie",
    icon: Lottie,
    type: 4,
  },
  {
    id: 48,
    title: "Photoshop",
    icon: Photoshop,
    type: 4,
  },
];
