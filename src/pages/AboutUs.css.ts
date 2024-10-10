// AboutUs.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const container = style({
  padding: vars.space["4x"],
  backgroundColor: vars.colors.background,
  color: vars.colors.textPrimary,
  fontFamily: vars.fonts.body,
  lineHeight: 1.6,
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
});

export const title = style({
  fontSize: vars.fontSizes["5x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  marginBottom: vars.space["2x"],
});

export const description = style({
  fontSize: vars.fontSizes["3x"],
  color: vars.colors.textSecondary,
  marginBottom: vars.space["2x"],
});
