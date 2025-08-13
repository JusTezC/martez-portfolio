import { FormEvent, useRef, useState } from 'react'
import '../assets/styles/Contact.scss'
import emailjs from '@emailjs/browser'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
// import TextField from '@mui/material/TextField'

function Contact() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  // const [nameError, setNameError] = useState<boolean>(false)
  // const [emailError, setEmailError] = useState<boolean>(false)
  // const [messageError, setMessageError] = useState<boolean>(false)

  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    // setNameError(name === '')
    // setEmailError(email === '')
    // setMessageError(message === '')

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Martez Cathey',
        to_email: 'justezc@gmail.com',
        message: message
      };

      emailjs.send('service_b6pci7b', 'template_st3qpa5', templateParams, 'cYodtO-FA4brr7QPc').then(
        () => {
          alert('Thank you, will get back to you shortly!');
        },
        () => {
          alert('Something went wrong. Please try again!')
        },
      )
      setName('')
      setEmail('')
      setMessage('')
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <input
                required
                id="outlined-required"
                // label="Your Name"
                placeholder="What's your name?"
                value={name}
                // InputProps={{sx:{color:'black', '& .MuiInputBase-inputMultiline': {color: 'black'}}}}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                // error={nameError}
                // helperText={nameError ? "Please enter your name" : ""}
              />
              <input
                required
                id="outlined"
                // label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                // error={emailError}
                // helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <textarea
              required
              id="outlined-multiline-static"
              // label="Message"
              placeholder="Send me any inquiries or questions"
              // multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              // error={messageError}
              // helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} type ={'submit'}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Contact