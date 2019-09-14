import { useState } from "react"


const useInput = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues)
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
