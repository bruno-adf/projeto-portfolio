import React from 'react'
import {About} from './Style'

function Index() {
  return (
    <About>
        <div className='container'>
          <div className='image'></div>
          <div className='info'>
            <h1>Quem<br />sou eu?</h1>
            <div className='section'>
              <h3>Meu nome:</h3>
              <p>Bruno Aguirre</p>
            </div>
            <div className='section'>
              <h3>Minha idade:</h3>
              <p>20 anos</p>
            </div>
            <div className='section'>
              <h3>Onde moro:</h3>
              <p>Viamão, RS</p>
            </div>
          </div>
        </div>
        <div className='about'>
          <div className='section'>Sou um profissional que ama o que faz. Desde pequeno, era fascinado por tecnologia e em como tudo era feito, o que me levou a desenvolver pequenos jogos na Unity3D usando C#, e ali vi que era o meu sonho ser um programador.</div>
          <br /><br />
          <div className='section'>Hoje foco meus estudos em desenvolvimento web, e meu objetivo hoje como profissional, é somar a uma empresa onde eu possa crescer e aprender, sempre oferecendo o melhor de mim em cada projeto, e me aprimorando cada dia mais.</div>
        </div>
      </About>
  )
}

export default Index