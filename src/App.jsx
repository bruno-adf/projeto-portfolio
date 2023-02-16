import { Head, Header, Skills, About, Portfolio } from './Style'
import './reset.css'
import { useState } from 'react';
import portfoliodata from './Portfolio.json'
import {AiOutlineComment, AiOutlineStock, AiOutlineClear, AiOutlineHeart, AiOutlineThunderbolt} from 'react-icons/ai'
import {DiGit, DiReact, DiJava, DiHtml5} from 'react-icons/di'
import {SiStyledcomponents, SiMysql, SiPhp} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'

function App() {

  const data = JSON.parse(JSON.stringify(portfoliodata))
  const portfolio = data.portfolio
  const skills = data.skills
  const [index, setIndex] = useState(0)

  console.log(data)

  return (
    <div className="App">
      <Header>
        <div className='logo'>BRUNO<br />AGUIRRE</div>
        <div className='navigation'>
          <p>Home</p>
          <p>Skills</p>
          <p>Sobre</p>
          <p>Portfólio</p>
          <p>Contato</p>
        </div>
      </Header>

      <Head>
        <div className='title-a'>Meu portfólio</div>
        <div className='title-b'>Desenvolvedor <br /> Full-Stack.</div>
      </Head>

      <Skills>
          <h1>Soft skills</h1>
          <div className='soft-skills-container'>
            <div className='skill'><AiOutlineComment size={40} color='#00A3FF'/><h2>{skills[0].title}</h2><p>{skills[0].info}</p></div>
            <div className='skill'><AiOutlineStock size={40} color='#00A3FF'/><h2>{skills[1].title}</h2><p>{skills[1].info}</p></div>
            <div className='skill'><AiOutlineClear size={40} color='#00A3FF'/><h2>{skills[2].title}</h2><p>{skills[2].info}</p></div>
            <div className='skill'><AiOutlineHeart size={40} color='#00A3FF'/><h2>{skills[3].title}</h2><p>{skills[3].info}</p></div>
            <div className='skill'><AiOutlineThunderbolt size={40} color='#00A3FF'/><h2>{skills[4].title}</h2><p>{skills[4].info}</p></div>
          </div>
        <h1>Tecnologias</h1>
        <div className='line'/>
        <div className='hard-skills-container'>
          <DiGit size={50} color='white'/>
          <DiReact size={50} color='white'/>
          <DiJava size={50} color='white'/>
          <DiHtml5 size={50} color='white'/>
          <SiStyledcomponents size={50} color='white'/>
          <IoLogoJavascript size={50} color='white'/>
          <SiMysql size={50} color='white'/>
          <SiPhp size={50} color='white'/>
        </div>
      </Skills>

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

      <Portfolio>
        <h1>Meu portfólio</h1>
        <div className='selector'>
          <button onClick={() => {if(index === 0) setIndex(2); else setIndex(index - 1)}}></button>
          <button onClick={() => {if(index === 2) setIndex(0); else setIndex(index + 1)}}></button>
        </div>
        <div className='container'>
          <div className='image' />
          <div className='text'>
            <div className='title'>
              <h1>{portfolio[index].title}</h1>
              <p>{portfolio[index].subtitle}</p>
            </div>
            <div className='info'>
              <div className='section'>{portfolio[index].paragraph1}</div>
              <div className='section'>{portfolio[index].paragraph2}</div>
            </div>
          </div>
        </div>
      </Portfolio>
    </div>
  );
}

export default App;
