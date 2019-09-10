import { useState } from "react"


const useInput = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues)
  // const params = {
  //   email: "email_value",
  //   //inputs.email
  //   name: "name_value",
  //   //inputs.name
  //   message: "message_value",
  //   //inputs.message
  // }
  // const service_id = "default_service";
  // const template_id = "contactform";
  // const user_id = "user_1hwQkALRBnW0srlGqwXJk"

  // const sendMessage = () => {
  //   emailjs.send(service_id, template_id, params, user_id)
  //   .then((res) => {
  //     console.log(`Success`, res.status, res.text, res.params)
  //   }, (err) => {
  //     console.log(`Failed`, err);
      
  //   }) 
  // }

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleInputChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  }
}

export default useInput
