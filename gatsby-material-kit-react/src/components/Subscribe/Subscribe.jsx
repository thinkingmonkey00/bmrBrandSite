import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import useInput from "hooks/useInput"
import Button from "components/CustomButtons/Button"
import CustomInput from "components/CustomInput/CustomInput"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"

const Subscribe = () => {
  const subscribeform = () => {
    const params = {
      email: inputs.email,
    }
    const addToSubscribe = () => {
      addToMailchimp(params)
        .then(data => {
          console.log(data)
        })
        .catch(() => {})
    }
    addToSubscribe()
  }

  const { inputs, handleInputChange, handleSubmit } = useInput(
    {
      email: "",
    },
    subscribeform
  )
  return (
    <form
      id="subscribeForm"
      onSubmit={handleSubmit}
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <GridContainer>
        <GridItem xs={12} md={6}>
          <CustomInput
            labelText="Enter your email to subscribe"
            id="subscribeEmail"
            formControlProps={{
              fullWidth: true,
              required: true,
            }}
            inputProps={{
              className: "required email",
              id: "mce-EMAIL",
              type: "email",
              name: "EMAIL",
              onChange: handleInputChange,
              defaultValue: inputs.email,
            }}
            required
          />
        </GridItem>
      </GridContainer>
      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_9a32ff42332c6bebf4b03013f_cca072786f"
          tabIndex={-1}
          defaultValue
        />
      </div>

      <Button color="primary" type="submit">
        Sign Me Up!
      </Button>
    </form>
  )
}

export default Subscribe
