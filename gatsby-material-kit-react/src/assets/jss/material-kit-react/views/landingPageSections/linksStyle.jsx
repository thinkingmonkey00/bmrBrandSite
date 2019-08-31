import {
  successCardHeader,
  title,
  infoColor,
  card,
} from "assets/jss/material-kit-react.jsx"

const linksStyle = {
  header: {
    ...successCardHeader,
    // border: "2px solid red"
  },
  title: {
    ...title,
    textAlign: "center",
  },
  cardLink: {
    textAlign: "center",
    padding: "0.75rem 1.25rem",
  },
  partner: {
    ...card,
    backgroundColor: infoColor,
    color: "#fff",
    textAlign: "center",
  },
}

export default linksStyle
