import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const boxSetting = style({
  textAlign: "center",
  padding: vars.space["3x"],
  backgroundColor: vars.colors.background,
  borderRadius: vars.space["1x"],
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  margin: vars.space["3x"],
});

export const boxTitle = style({
  fontSize: vars.fontSizes["5x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textPrimary,
  marginBottom: vars.space["2x"],
});

export const boxPara = style({
  fontSize: vars.fontSizes["3x"],
  color: vars.colors.textSecondary,
});

export const boxButton = style({
  marginTop: vars.space["2x"],
});
