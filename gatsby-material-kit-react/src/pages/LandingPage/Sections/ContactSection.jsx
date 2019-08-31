import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx"
// import CustomInput from "components/CustomInput/CustomInput.jsx"
import Card from "components/Card/Card.jsx"
// import icons
// React icons
import { IconContext } from "react-icons"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/contactStyle"

class ContactSection extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.section}>
        <Card>
          <GridContainer>
            <GridItem xs={12}>
              <div classname={classes.nameSocial} {...rest}>
                ** Baby Momma Rachel **
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <IconContext.Provider
              value={{
                color: "purple",
                className: "global-class-name",
                size: "2em",
                style: { textAlign: "center" },
              }}
            >
              <GridItem xs={5} />
              <GridItem xs={1}>
                <FaTwitter />
              </GridItem>
              <GridItem xs={1}>
                <FaInstagram />
              </GridItem>
              <GridItem xs={1}>
                <FaFacebookF />
              </GridItem>
            </IconContext.Provider>
          </GridContainer>
        </Card>
        <Card>
          <div id="footer-form" className>
            <div className="border border-light rounded px-4 py-4">
              <div className="row">
                <div className="col-sm">
                  <h2 className>Drop me a note!</h2>
                </div>
                <div className="col">
                  <iframe
                    id="hidden_iframe"
                    style={{ display: "none" }}
                    onload="if(submitted) {window.location='thankyou.html';}"
                  />
                  <form
                    id="contact"
                    className="callback enters"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSf2JqayZyrTZGKh8uQwT2bg35gcBSZBungoMqdcB3h3c1m0LA/formResponse"
                    method="POST"
                    target="hidden_iframe"
                    onsubmit="submitted=true;"
                  >
                    <input
                      id="callback_name"
                      type="text"
                      name="entry.1670151414"
                      className="form-control py-1"
                      placeholder="What's your name?"
                      required="required"
                    />
                    <input
                      id="form_email"
                      type="email"
                      name="emailAddress"
                      autoComplete="email"
                      className="form-control py-1"
                      placeholder="email *"
                      required="required"
                    />
                    <textarea
                      id="message-text"
                      type="text"
                      name="entry.285675730"
                      className="form-control"
                      rows={3}
                      placeholder="What's on your mind?"
                      defaultValue={""}
                    />
                    <div className="alert alert-danger d-none">
                      Please, fill in form fields and push the button «Send»
                    </div>
                    <div className="alert alert-warning d-none">
                      Confirm that you are not a robot
                    </div>
                    <div className="form-group bot">
                      <p>
                        <i className="fa fa-circle-o ring d-none" />
                        <span className="d-none"> im not a bot</span>
                      </p>
                    </div>
                    <div className="success d-none">
                      <span>Awesome! Your message is sending now. Thanks!</span>
                    </div>
                    <button className="button submit">send me a message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default withStyles(contactStyle)(ContactSection)
