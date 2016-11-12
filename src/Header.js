import React from 'react'

import './Header.css'

const Header = React.createClass({
  displayName: 'Header',
  
  render() {
    return (
      <div className="Header">
        Let's play memory!
      </div>
    );
  },
})

export default Header
