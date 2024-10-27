import { style } from "@vanilla-extract/css";
import { vars } from "../../src/styles/themes.css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  textAlign: "center",
  padding: vars.space["4x"],
  gap: vars.space["3x"],
});

export const card = style({
  width: "300px",
  margin: "15% auto",
  padding: vars.space["3x"],
  backgroundColor: vars.colors.primary,
  color: vars.colors.textPrimary,
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const cardTitle = style({
  fontSize: vars.fontSizes["4x"],
  marginBottom: vars.space["2x"],
});

export const cardDescription = style({
  fontSize: vars.fontSizes["3x"],
  color: vars.colors.textSecondary,
});
