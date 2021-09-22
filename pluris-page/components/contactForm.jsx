import Style from './contactForm.module.scss'
import Util from '../styles/util.module.scss'
import { useState } from 'react'

export default function ContactForm({ className, onSubmit }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contactType, setContactType] = useState('Paisagismo')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function onFormSubmit(event) {
    event.preventDefault()
    //ler os dados dos campos através do state
    //validate data
    //if right submit => onSubmit(values)
    onSubmit({
      name: name.trim(),
      phone: phone.trim().replaceAll(' ', ''),
      email: email.trim(),
      address: address.trim(),
      contactType,
      subject: subject.trim(),
      message: message.trim(),
    })
    //if not right show the errors
  }

  function onContactTypeChange(event) {
    setContactType(event.target.value)
  }
  return (
    <form action="" onSubmit={onFormSubmit} className={Style.form}>
      <label htmlFor="name" className={Style.label}>
        Name:*
      </label>
      <input
        type="text"
        name="name"
        data-testid="inputName"
        id="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Seu nome aqui..."
        required
        className={Style.input}
      />
      <label htmlFor="phone" className={Style.label}>
        Telefone:*
      </label>
      <input
        type="text"
        name="phone"
        data-testid="inputPhone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
        placeholder="(xx)xxxxx-xxxx"
        required
        className={Style.input}
      />
      <label htmlFor="email" className={Style.label}>
        Email:*
      </label>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="inputEmail"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Seu email aqui..."
        required
        className={Style.input}
      />
      <label htmlFor="address" className={Style.label}>
        Endereço:*
      </label>
      <input
        type="text"
        name="address"
        id="address"
        data-testid="inputAddress"
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
        placeholder="Seu endereço aqui..."
        required
        className={Style.input}
      />
      <span className={Style.options}>Selecione uma opção:*</span>
      <div className={Style.checkbox}>
        <RadioBox name="contactType" value="Residencial" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Comercial" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Corporativo" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Paisagismo" selected={contactType} onChange={onContactTypeChange} />
      </div>
      <label htmlFor="subject" className={Style.label}>
        Assunto:*
      </label>
      <input
        type="text"
        name="subject"
        id="subject"
        // data-testid="inputSubject"
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
        placeholder="Escreva aqui título do email"
        required
        className={Style.input}
      />
      <label htmlFor="message" className={Style.label}>
        Sua mensagem:
      </label>
      <textarea
        name="message"
        id="message"
        // data-testid="inputMessage"
        cols="30"
        rows="10"
        placeholder="Deixe sua mensagem..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        required
        className={Style.textArea}
      ></textarea>
      <input type="submit" value="enviar" className={Util.submitInput} />
    </form>
  )
}

function RadioBox({ name, value, selected, onChange }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        checked={selected === value}
        data-testid={`radio${value}`}
        required
      />
      <label htmlFor={value}>{value}</label>
    </>
  )
}
