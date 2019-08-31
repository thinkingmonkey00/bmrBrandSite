import React from "react"
import { Gallery } from "gatsby-theme-gallery"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
// style sheet
import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.jsx"
//images
import issaAndRachel from "assets/img/babymommaAndBaby.jpg"
class AboutSection extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true,
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  render() {
    const { classes } = this.props
    const ExpandAbout = () => (
      <div className="modal">
        <div className={classes.textArea}>
          Rachel is a first-generation graduate of Harvard University. After a
          trauma, Rachel became an expert in navigating the welfare system and
          referenced her strategies for survival at the margins in her workshops
          on radical healing commissioned by the New York City Housing
          Authority. The early “My Food Stamps Cookbook” workshops grew into the
          Hip Dhamma Yoga Studio of Brooklyn, a community center owned and
          operated by Black Women yoga teachers in BedStuy. In May 2017, over
          1000 backers made the cookbook become a reality in print and ebook via
          Kickstarter and Backerkit crowdsourcing.
        </div>
      </div>
    )
    const MainGallery = () => (
      <Card>
        <h2 className={classes.centered}>
          <span className={classes.title}>Baby Momma Rachel</span>{" "}
          <span>Gallery</span>
        </h2>
        <Gallery />
      </Card>
    )

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <img
              className={classes.aboutImage}
              src={issaAndRachel}
              alt="Baby Momma Revolutionary"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <Card>
              <CardBody>
                <div className={classes.textArea}>
                  <span className={classes.lead}>Rachel Bolden-Kramer </span>is
                  a writer and babymomma revolutionary originally from San
                  Francisco’s Haight-Ashbury. She disturbed the status-quo as a
                  militant teenager and poetry slam champion in the 1990s.
                  Rachel credits the arts and activism movement of her
                  generation in the Bay Area for contributing to her keen sense
                  of creative justice.
                </div>
                <Button
                  className={classes.button}
                  color="primary"
                  size="sm"
                  aria-expanded="false"
                  aria-controls="collapseAbout"
                  onClick={this.toggleHidden.bind(this)}
                >
                  Read more ...
                </Button>
                {!this.state.isHidden && <ExpandAbout />}
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12}>
            <MainGallery />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(aboutStyle)(AboutSection)
