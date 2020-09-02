'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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

export default AppContent