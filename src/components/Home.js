import React from 'react'
import Header from './header/Header'
import List from './List/List'

const Home = () => {

    return (
        <div>
            <Header />
            <section style={{ marginTop: '8rem' }}>
                <List />
            </section>
        </div>
    )
}

export default Home
