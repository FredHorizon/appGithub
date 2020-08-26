'use strict'

import React  from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type="search" placeholder='Pesquise um nome de usuário'/>
    </div>
    <div className='user-info'>
      <img src="https://avatars3.githubusercontent.com/u/30598272?v=4" alt=""/>
      <h1 className='username'>
        <a href="https://github.com/FredHorizon">Fred Oliveira</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios Públicos: 11</li>
        <li>Seguidores: 2</li>
        <li>Seguindo: 11</li>
      </ul>

      <div className='actions'>
        <button>Visualizar repositórios</button>
        <button>Visualizar favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
