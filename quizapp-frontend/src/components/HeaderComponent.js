import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header className="Header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow p-4">
          <div>
            <a href="/" className="navbar-brand" style={{fontSize: '2rem'}}>
              Quiz Application
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
