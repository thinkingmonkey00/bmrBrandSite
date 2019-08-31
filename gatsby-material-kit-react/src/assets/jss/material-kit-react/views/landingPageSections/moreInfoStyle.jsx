import {
  title,
  successColor,
  primaryColor,
} from "assets/jss/material-kit-react.jsx"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const moreInfoStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    background: successColor,
  },
  title: {
    ...title,
    marginBottom: "1rem",
    textDecoration: "none",
    color: "#fff",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  smallTitle: {
    color: primaryColor,
    fontSize: "1rem",
  },

  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
}

export default moreInfoStyle
