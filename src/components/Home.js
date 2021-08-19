import React from 'react'
import Header from './header/Header'
import List from './List/List'
import CSS from './style.module.css'

const Home = () => {

    return (
        <div>
            <Header />
            <section className={CSS.listSection}>
                <List />
            </section>
        </div>
    )
}

export default Home
