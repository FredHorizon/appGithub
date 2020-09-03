'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    { !!userinfo &&  <UserInfo userinfo={userinfo} /> } {/* !! transforma o userinfo em valor booleano */}

    { !!userinfo && <Actions />}

    { !!repos.lenght &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    { !!starred.lenght &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.protoTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.oarray.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
