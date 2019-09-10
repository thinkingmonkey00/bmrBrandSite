import React from "react"
import * as emailjs from "emailjs-com"
import useInput from "hooks/useInput"

// core components
import Button from "components/CustomButtons/Button"
import CustomInput from "components/CustomInput/CustomInput"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"

const ContactForm = () => {
  const contactform = () => {
    const params = {
      email: inputs.email,
      name: inputs.name,
      message: inputs.message,
    }
    const service_id = "default_service"
    const template_id = "contactform"
    const user_id = "user_1hwQkALRBnW0srlGqwXJk"

    const sendMessage = () => {
      emailjs.send(service_id, template_id, params, user_id).then(
        res => {
          console.log(`Success`, res.status, res.text)
        },
        err => {
          console.log(`Failed`, err)
        }
      )
    }
    sendMessage()
    // console.log(`checking for input` + inputs.name + `did they show?`)
    alert(`Submitted: Name: ${inputs.name} Email: ${inputs.email} `)
  }
  const labelTextName = "What is your name?"
  const labelTextEmail = "Email?"
  const labelTextMessage = "What is on your mind?"
  const { inputs, handleInputChange, handleSubmit } = useInput(
    {
      name: "",
      email: "",
      message: "",
    },
    contactform
  )
  return (
    <form id="contactFooter" onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} md={6}>
          <CustomInput
            labelText={labelTextName}
            id="contactName"
            formControlProps={{
              fullWidth: true,
              required: true,
              autoFocus: true,
            }}
            inputProps={{
              type: "text",
              name: "name",
              onChange: handleInputChange,
              defultValue: inputs.name,
            }}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <CustomInput
            labelText={labelTextEmail}
            id="contactEmail"
            formControlProps={{
              fullWidth: true,
              required: true,
            }}
            inputProps={{
              type: "email",
              name: "email",
              onChange: handleInputChange,
              defaultValue: inputs.email,
            }}
            required
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CustomInput
            labelText={labelTextMessage}
            id="contactMessage"
            formControlProps={{
              fullWidth: true,
              required: true,
            }}
            inputProps={{
              type: "text",
              name: "message",
              onChange: handleInputChange,
              value: inputs.message,
            }}
            required
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Button color="primary" type="submit">
            Send me a message
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}

export default ContactForm
