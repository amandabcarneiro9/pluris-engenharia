import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from '../styles/contato.module.scss'

export default function Contato() {
  return (
    <Layout>
      <div className={Style.container}>
        <div className={Style.informations}>
          <span className={Style.firstMessage}>
            Tem sugestões, duvidas ou gostaria de um orçamento ? Entre em contato através do formulário ao
            lado.Ficaremos feliz em te ajudar !
          </span>
          <span className={Style.secondMessage}>Você também pode nos encontrar por aqui :</span>
          <div className={Style.contactIcons}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
            (xx)xxxx-xxxxx
          </div>
          <div>
            <FontAwesomeIcon icon={['fas', 'envelope-square']} />
            amandabcarneiro9@gmail.com
          </div>

          <div>
            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
            Rua: exemplo exemplo exemplo,980 Bairro Cep Cidade
          </div>
        </div>
      </div>
    </Layout>
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
