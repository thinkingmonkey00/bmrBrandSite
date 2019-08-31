import { brandFont } from "assets/jss/material-kit-react.jsx"

const aboutStyle = {
  section: {
    padding: "70px 0",
  },

  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  aboutImage: {
    maxWidth: "100%",
    height: "auto",
  },
  lead: {
    fontSize: "2rem",
  },
  title: {
    ...brandFont,
    fontSize: "3.5rem",
  },
  centered: {
    textAlign: "center",
  }
}

export default aboutStyle
