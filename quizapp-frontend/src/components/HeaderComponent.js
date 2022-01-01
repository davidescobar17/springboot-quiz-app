import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark shadow p-4 ">
                    <div>
                        <a href = "/" className = "navbar-brand " style={{fontSize: '3rem'}}>
                            Flash Card Application
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
