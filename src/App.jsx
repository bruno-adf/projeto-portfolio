import { Header } from './Style'
import Head from './sections/Head/Index'
import Skills from './sections/Skills/Index'
import About from './sections/About/Index'
import Portfolio from './sections/Portfolio/Index'
import portfoliodata from './Portfolio.json'

import './reset.css'

function App() {

  const data = JSON.parse(JSON.stringify(portfoliodata))
  const portfolio = data.portfolio
  const skills = data.skills

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

      <Head/>

      <Skills skills={skills}/>

      <About/>

      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;
