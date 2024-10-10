import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  backgroundColor: vars.colors.primary,
  padding: vars.space["2x"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "auto",
  width: "100%",
  textAlign: "center",
});
