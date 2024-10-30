import { style } from "@vanilla-extract/css";
import { vars } from "../../src/styles/themes.css";

export const heroSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  backgroundColor: "#f9f9f9",
});

export const heroText = style({
  maxWidth: "50%",
});

export const heroImage = style({
  maxWidth: "50%",
});

export const shopNowLink = style({
  display: "inline-block",
  marginTop: "1rem",
  padding: "10px 20px",
  backgroundColor: "#4b3621",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: "#3b2a1b",
  },
});

// export const homeContainer = style({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   minHeight: "550px",
//   color: vars.colors.textPrimary,
//   padding: vars.space["4x"],
// });

// export const countText = style({
//   fontSize: vars.fontSizes["4x"],
//   marginBottom: vars.space["2x"],
// });

// export const button = style({
//   padding: vars.space["2x"],
//   backgroundColor: vars.colors.secondary,
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
//   fontSize: vars.fontSizes["3x"],
//   ":hover": {
//     backgroundColor: vars.colors.warning,
//   },
// });
