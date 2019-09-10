import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import ContactForm from "../../../components/Form/Form"

// React icons
import { IconContext } from "react-icons"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.jsx"

class ContactSection extends Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.section} {...rest}>
        <Card>
          <CardBody>
            <GridContainer>
              <GridItem xs={12}>
                <h1 className={classes.title}>** Baby Momma Rachel **</h1>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <IconContext.Provider
                value={{
                  color: "purple",
                  className: "global-class-name",
                  size: "2em",
                  style: { textAlign: "center" },
                }}
              >
                <GridItem xs={1}>
                  <a
                    href="https://twitter.com/babymommarachel?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </GridItem>
                <GridItem xs={1}>
                  <a
                    href="https://www.instagram.com/babymommarachel/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </GridItem>
                <GridItem xs={1}>
                  <a
                    href="https://www.facebook.com/BabyMommaRachel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </GridItem>
              </IconContext.Provider>
            </GridContainer>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ContactForm />
          </CardBody>
        </Card>
        <GridContainer />
      </div>
    )
  }
}

export default withStyles(contactStyle)(ContactSection)
