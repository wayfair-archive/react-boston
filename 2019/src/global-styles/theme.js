export const theme = {
  colors: {
    primary: "#2160ad",
    primaryDark: "#012e6f",
    primaryLight: "#caefff",
    secondary: "#f15959",
    secondaryDark: "#d63333",
    black: "#03050d",
    grey: "#f7f7f7",
    mediumGrey: "#6f6f6f",
    white: "#fff",
  },
  fontSizes: [16, 18, 20, 24, 32, 36, 40, 44, 48],
  fontWeights: {
    semibold: 600,
  },
  // margin and padding
  space: [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 64, 72],
  breakpoints: [40, 52, 72].map(n => n + "rem"),
}
