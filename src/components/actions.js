'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Visualizar repositórios</button>
    <button onClick={getStarred}>Visualizar favoritos</button>
  </div>
)

export default Actions
