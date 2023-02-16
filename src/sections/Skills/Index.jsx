import {AiOutlineComment, AiOutlineStock, AiOutlineClear, AiOutlineHeart, AiOutlineThunderbolt} from 'react-icons/ai'
import {DiGit, DiReact, DiJava, DiHtml5} from 'react-icons/di'
import {SiStyledcomponents, SiMysql, SiPhp} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import React from 'react'
import {Skills} from './Style'

function Index({skills}) {
  return (
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
  )
}

export default Index