import {
  title,
  brandFont,
  infoColor,
  successColor
} from "assets/jss/material-kit-react.jsx"
import imgRaised from "assets/jss/material-kit-react/imagesStyles.jsx"

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  subtitle: {
    color: infoColor,
    fontWeight: "bold",
  },
  subtitleBranded: {
    ...brandFont,
    color: successColor,
    fontSize: "3rem",
    letterSpacing: "0.05em"
  },
  description: {
    color: "#000",
  },
  mainImg: {
    ...imgRaised,
    maxHeight: "50vh",
    width: "auto",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: "3rem",
    paddingBottom: "1rem",
  },
}

export default productStyle
