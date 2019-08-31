/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons"

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link to="/">
            Home
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#about" color="transparent" className={classes.navLink}>
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#events" color="transparent" className={classes.navLink}>
          Events
        </Button>
      </ListItem>{" "}
      <ListItem className={classes.listItem}>
        <Button href="#press" color="transparent" className={classes.navLink}>
          Press
        </Button>
      </ListItem>{" "}
      <ListItem className={classes.listItem}>
        <Button href="#contact" color="transparent" className={classes.navLink}>
          Contact
        </Button>
      </ListItem>{" "}
      <ListItem className={classes.listItem}>
        <Button href="https://amzn.to/2GSxCfX" color="rose" className={classes.navLink.rose}>
          Buy My Book!
        </Button>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
