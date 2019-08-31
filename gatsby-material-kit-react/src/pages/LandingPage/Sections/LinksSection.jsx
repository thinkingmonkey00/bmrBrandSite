import React from "react"

import withStyles from "@material-ui/core/styles/withStyles"
import linksStyle from "assets/jss/material-kit-react/views/landingPageSections/linksStyle.jsx"

import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import CardBody from "components/Card/CardBody.jsx"
import PartnerSlider from "components/Slider/Slider.jsx"

class LinksSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <GridContainer className="links">
        <GridItem>
          <Card>
            <CardHeader className={classes.header}>
              <h3 className={classes.title}>Want to learn more?</h3>
            </CardHeader>
            <CardBody>
              <ul id="press-links" className={classes.cardLink}>
                <li>
                  <a
                    className={classes.cardLink}
                    href="https://food52.com/blog/23035-rachel-bolden-kramer-my-food-stamps-cookbook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Woman Teaching People How to Eat Well on a Food Stamp
                    Budget
                  </a>
                </li>
                <li>
                  <a
                    className={classes.cardLink}
                    href="https://www.thepennyhoarder.com/food/food-stamp-budget-cookbook/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This Cookbook Will Teach Anyone How to Eat Healthy on a Food
                    Stamp Budget
                  </a>
                </li>
                <li>
                  <a
                    className={classes.cardLink}
                    href="http://feministing.com/2017/05/14/confronting-and-subverting-the-welfare-queen-trope-this-mothers-day/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Confronting and Subverting the 'Welfare Queen' Trope This
                    Mother's Day
                  </a>
                </li>
                <li>
                  <a
                    className={classes.cardLink}
                    href="https://www.thepennyhoarder.com/food/healthy-eating-with-snap-benefits/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5 Ways Anyone Can Eat Healthy, Delicious Food on an Insanely
                    Cheap Budget
                  </a>
                </li>
                <li>
                  <a
                    className={classes.cardLink}
                    href="http://www.thefiscaltimes.com/Articles/2014/02/24/High-Cost-Young-PhDs-Food-Stamps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The High Cost of Young PhDs on Food Stamps
                  </a>
                </li>
                <li>
                  <a
                    className={classes.cardLink}
                    href="https://cuesa.org/event/2018/rachel-bolden-kramer-author-my-food-stamps-cookbook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Previous Event: Book Signing at Jack London Square with
                    CUESA
                  </a>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12}>
          <Card className={classes.partner}>
            <CardHeader>
              <h4>
                I've partnered with some <strong>brilliant</strong> people
              </h4>
            </CardHeader>
            <CardBody>
              <PartnerSlider />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(linksStyle)(LinksSection)
