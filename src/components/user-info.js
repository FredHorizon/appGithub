'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/30598272?v=4' alt=''/>
    <h1 className='username'>
      <a href='https://github.com/FredHorizon'>Fred Oliveira</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios Públicos: 11</li>
      <li>Seguidores: 2</li>
      <li>Seguindo: 11</li>
    </ul>
  </div>
)

export default UserInfo
