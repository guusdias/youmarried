import { DefaultTheme } from "styled-components";

export const colors = {
  main1: "#37FC6E",
  main1Light: "#ACF2C0",
  main2: "#5A81FA",
  main2Light: "#ACC4F8",
  darker: "#333333",
  dark: "#787D82",
  light: "#E6F3F6",
  lighter: "#F5F5F5",
  white: "#FBFBFB",
  black: "#101010",
  danger: "#DC3545",
  p1: "#28A745",
  p2: "#FFC107",
  p3: "#DC3545",
};

export const gradients = {
  main: [colors.main1, colors.main2],
  mainLight: [colors.main1Light, colors.main2Light],
  disabled: [colors.dark, colors.light],
};

export const theme: DefaultTheme = {
  colors,
  gradients,
  fonts: {
    primary: '"Roboto", sans-serif',
    secondary: '"Arial", sans-serif',
  },
  spacings: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
};
