import { useWindowDimensions } from "react-native";
import { LAYOUT } from "@/constants/layout";

export function useResponsiveLayout() {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isPortrait: height > width,
    isTabletLayout: width >= LAYOUT.TABLET_BREAKPOINT,
  };
}