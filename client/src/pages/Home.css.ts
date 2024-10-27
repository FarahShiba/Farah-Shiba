import { style } from "@vanilla-extract/css";
import { vars } from "../../src/styles/themes.css";

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "550px",
  color: vars.colors.textPrimary,
  padding: vars.space["4x"],
});

export const countText = style({
  fontSize: vars.fontSizes["4x"],
  marginBottom: vars.space["2x"],
});

export const button = style({
  padding: vars.space["2x"],
  backgroundColor: vars.colors.secondary,
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: vars.fontSizes["3x"],
  ":hover": {
    backgroundColor: vars.colors.warning,
  },
});
