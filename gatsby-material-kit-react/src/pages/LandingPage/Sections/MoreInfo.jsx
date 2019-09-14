import React, { Component } from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Subscribe from "components/Subscribe/Subscribe"

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
              <Subscribe />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(moreInfoStyle)(MoreInfo)
