export const theme = {
  colors: {
    black: "#000000",
    text: {
      primary: "#FFFFFF",
    },
  },
  fontSize: {
    small: "0.5rem",
    normal: "1rem",
    large: "2rem",
    huge: "7rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 500,
  },
  mediaQuery: {
    "915": "915px",
  },
};

export type ITheme = typeof theme;
