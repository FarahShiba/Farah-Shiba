// SignUp.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "620px",
});

export const form = style({
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "300px",
  textAlign: "center",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#4b3621", // Dark brown color for the title
  marginBottom: "1rem",
  borderBottom: "2px solid #4b3621",
  paddingBottom: "0.5rem",
  display: "inline-block",
});

export const input = style({
  width: "100%",
  padding: "0.75rem",
  margin: "0.5rem 0",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "14px",
});

export const button = style({
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#4b3621",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "1rem",
  ":hover": {
    backgroundColor: "#3b2a1b",
  },
});

export const footerText = style({
  fontSize: "14px",
  color: "#666",
  marginTop: "1rem",
});

export const loginLink = style({
  color: "#4b3621",
  textDecoration: "none",
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
  },
});
