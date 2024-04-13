import { Appearance } from "react-native";
import { convertPxToDp } from "../utils";

const isDarkMode = Appearance.getColorScheme() === "dark";

const FontConstants: {
  familyRegular: string;
  sizeTitle: number;
  sizeHeader: number;
  sizeRegular: number;
  familySemiBold: string;
  familyBold: string;
  weightBold:
    | "bold"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
} = {
  familyRegular: "Poppins-Regular",
  familySemiBold: "Poppins-SemiBold",
  familyBold: "Poppins-Bold",
  sizeTitle: 18,
  sizeRegular: 14,
  weightBold: "bold",
  sizeHeader: 24
};

const ColorConstants: {
  background: string;
  foreground: string;
  backgroundMedium: string;
  backgroundLight: string;
  buttonBackground: string;
  pagerBackground: string;
  font: string;
} = {
  background: "#111111",
  backgroundMedium: isDarkMode ? "#666666" : "#dddddd",
  backgroundLight: isDarkMode ? "#444444" : "#e8e8e8",
  font: isDarkMode ? "#eeeeee" : "#222222",
  buttonBackground: "#CB5715",
  pagerBackground: "#B87100",
  foreground: "#FFFFFF",
};

const SizeConstants: {
  paddingSmall: number;
  paddingRegular: number;
  paddingLarge: number;
  borderRadius: number;
  borderRadiusButton: number;
  iconWidth: number;
  iconHeight: number;
} = {
  paddingSmall: 2,
  paddingRegular: 8,
  paddingLarge: 16,
  borderRadius: 8,
  borderRadiusButton: 5,
  iconHeight: 36,
  iconWidth: 32,
};

export const appLogo = require('../../assets/images/audioterra.png');




const Screens = {
  Home: "Home",
  Library: "Library",
  Menu: "Menu",
  Search: "Search",
};

const Strings = {
  DanDareSeasonOne: "Dan Dare: Season 1",
  DanDareSeasonOneDescription:
    "Step into the future with Dan Dare. It’s got addiction, abuse, drugs, financial ruin...",
  ViewMore: "View more",
  Pilgrim: "Pilgrim",
  PremierRelease: "Premier Release",
  PilgrimDescription:
    "Step into Tudor Chambers. It’s got addiction, abuse, drugs, financial ruin...",
  BadSeed: "Bad Seed",
  BadSeedDescription:
    "Step into Tudor Chambers. It’s got addiction, abuse, drugs, financial ruin...",
  Adventure: "Adventure",
  GameForGentleMen: "A \ngame\nfor Gentlemen",
  GameForGentleMenDescription:
    "Step into Tudor Chambers. It’s got addiction, abuse, drugs, financial ruin...",
  Afterlive: "The Afterlives of Doctor Gachet",
  AfterliveDescription:
    "Step into Tudor Chambers. It’s got addiction, abuse, drugs, financial ruin...",
};

export { ColorConstants, FontConstants, Screens, SizeConstants, Strings };
