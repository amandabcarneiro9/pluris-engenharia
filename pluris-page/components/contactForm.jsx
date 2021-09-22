export default function ContactForm() {
  return (
    <form action="" onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:*</label>
      <input
        type="text"
        name="name"
        data-testid="inputName"
        id="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Seu nome aqui..."
        required
      />
      <label htmlFor="phone">Telefone:*</label>
      <input
        type="text"
        name="phone"
        data-testid="inputPhone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
        placeholder="(xx)xxxxx-xxxx"
        required
      />
      <label htmlFor="email">Email:*</label>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="inputEmail"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Seu email aqui..."
        required
      />
      <label htmlFor="address">Endereço:*</label>
      <input
        type="text"
        name="address"
        id="address"
        data-testid="inputAddress"
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
        placeholder="Seu endereço aqui..."
        required
      />
      <span className="options">Selecione uma opção:*</span>
      <div className="__checkbox">
        <RadioBox name="contactType" value="Residencial" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Comercial" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Corporativo" selected={contactType} onChange={onContactTypeChange} />
        <RadioBox name="contactType" value="Paisagismo" selected={contactType} onChange={onContactTypeChange} />
      </div>
      <label htmlFor="subject">Assunto:*</label>
      <input
        type="text"
        name="subject"
        id="subject"
        data-testid="inputSubject"
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
        placeholder="Escreva aqui título do email"
        required
      />
      <label htmlFor="message">Sua mensagem:</label>
      <textarea
        name="message"
        id="message"
        data-testid="inputMessage"
        cols="30"
        rows="10"
        placeholder="Deixe sua mensagem..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        required
      ></textarea>
      <input type="submit" value="enviar" />
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
