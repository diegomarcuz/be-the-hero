import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'


import api from '../../services/api'

import logo from '../../assets/logo.svg'
export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, SetWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try {
      console.log("entrou no try")
      const response = await api.post('ong', data)
      alert(`Criado com sucesso seu ID: ${response.data.id}`)
      history.push('/')
    } catch (error) {
      alert("Erro no cadastro, tente novamente")
    }
  }



  return (
    <div className="register-container">

      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>


        <form onSubmit={handleRegister} >
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp - Ex: 5511900000000"
            value={whatsapp}
            onChange={e => SetWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />

          </div>

          <button type="submit" className="button">Cadastrar</button>

        </form>
      </div>

    </div>
  )
}
