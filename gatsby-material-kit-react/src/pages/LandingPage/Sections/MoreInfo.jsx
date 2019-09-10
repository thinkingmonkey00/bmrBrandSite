import React, { Component } from "react"
// nodejs library that concatenates classes
// import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import CustomInput from "components/CustomInput/CustomInput.jsx"

import moreInfoStyle from "assets/jss/material-kit-react/views/landingPageSections/moreInfoStyle.jsx"

class MoreInfo extends Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.section} {...rest}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
            <div id="email-capture">
              <h2 className={classes.title}>Get on my VIP list!</h2>
              <p>
                <span className={classes.smallTitle}>
                  <strong>Be the first to know </strong>
                </span>
                about radical nutrition budget breakthroughs and my events, and
                get my FREE eat to heal anxiety guide right to your inbox!
              </p>
            </div>
            {/* Mailchimp integration */}
            <div id="mc_embed_signup">
              <form
                action="https://hipdhamma.us4.list-manage.com/subscribe/post?u=9a32ff42332c6bebf4b03013f&id=cca072786f"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div
                  id="mc_embed_signup_scroll"
                  className="input-group border-white"
                >
                  <label htmlFor="mce-EMAIL" />
                  <GridItem xs={12}>
                    <CustomInput
                      labelText="Your Email"
                      id="mce-EMAIL"
                      name="EMAIL"
                      required
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <div className="input-group-append">
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_9a32ff42332c6bebf4b03013f_cca072786f"
                        tabIndex={-1}
                        defaultValue
                      />
                    </div>
                    <Button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      color="primary"
                    >
                      Sign me up!
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(moreInfoStyle)(MoreInfo)
