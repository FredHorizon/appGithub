'use strict'

import React  from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search></Search>
    <UserInfo></UserInfo>
    <Actions></Actions>
    <Repos
      className='repos'
      title='Repositórios:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}>
    </Repos>

    <Repos
      className='starred'
      title='Favoritos:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}>
    </Repos>
  </div>
)

export default App
