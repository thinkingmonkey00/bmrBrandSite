import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import Spa from "@material-ui/icons/Spa"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"
import RegularButton from "components/CustomButtons/Button.jsx"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

// import { Link } from "@material-ui/icons"

// Images
import mainBookImage from "assets/img/book-cta.png"

class ProductSection extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.section} {...rest}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Let's talk about radical nutrition
            </h2>
            <h4 className={classes.subtitle}>
              What to eat when you're broke &amp; wanna be healthy!
            </h4>
            <h5 className={classes.description}>
              This cookbook will help you use food (stamps) to heal! Rachel is a
              Harvard-educated baby momma leading a revolution for low income,
              high potential communities to eat BETTER so they can LIVE better.
              She takes extra special care of her fellow baby mommas so the next
              generation can have happy and healthy habits passed down to them.
              Rachel overcame the welfare system with radical nutrition and you
              can, too!
            </h5>
            <hr />
            <p className={classes.subtitleBranded}>Some love from my readers</p>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                description="``I would highly recommend this book to anyone looking for
                  wonderful healthy food on a budget, food stamps or not! Rachel
                  shares with us a wealth of information regarding how to avoid
                  foods that will zap your budget and your health. Her butternut
                  squash mac&amp;cheese is to die for...``"
                icon={Spa}
                iconColor="info"
                vertical
                title=""
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                description="``Every Recipe in this book is healthy, tasty and affordable.``"
                icon={Spa}
                iconColor="rose"
                vertical
                title=""
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                description="``I am a professional chef and I can’t stand cookbooks that are
                  all slick pictures and no substance. This book is a welcome
                  relief! I am constantly asked how to eat better, and the
                  journey really is complex and unique for each individual...``"
                icon={Spa}
                iconColor="warning"
                vertical
                title=""
              />
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <img
                src={mainBookImage}
                alt="My Foodstamps Cookbook"
                className={classes.mainImg}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <p>
                <RegularButton
                  fullWidth
                  color="rose"
                  href="https://amzn.to/2GSxCfX"
                  target="_blank"
                >
                  Get it on Amazon
                </RegularButton>
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
