import React from 'react'
import CSS from './style.module.css'
import Image from '../../Assets/No-Image.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const ListItem = ({
    id = 'hii',
    name = 'Joshan Gurera',
    img = Image,
    occupation = ['Teacher', 'Student'],
    status = 'Alive',
    nickname = 'Harry',
    actor = 'Paul Wesley',
    seasons = [1, 2, 3, 4, 5],
    quotes = ['My Quotes'],
    birthday = '07/09/1967',
}) => {

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
    });

    return (
        <div data-aos="fade-up" className={CSS.listItem}>
            <div className={CSS.card} style={{ width: '18rem' }}>
                <img src={img} className={CSS.cardImg} alt="..." />
                <div className="card-body">
                    <h5 className={CSS.cardTitle} > {name} </h5>
                    <hr />
                    <div className={CSS.characterDetailLine}>
                        <p className={CSS.cardText}>status</p>
                        <p style={status === 'Alive' ? { color: 'green', fontWeight: 'bold' } : { color: 'red', fontWeight: 'bold' }} className="card-text">{status} </p>
                    </div>
                    <hr />
                    <div className={CSS.characterDetailLine}>
                        <p className={CSS.cardText}>actor</p>
                        <p className="card-text">{actor} </p>
                    </div>
                    <hr />
                    <div className={CSS.characterDetailLine}>
                        <p className={CSS.cardText}>occupation</p>
                        <p className="card-text">{occupation.reduce((prev, curr, i) => (i !== 0 ? prev + ', ' + curr : curr), '')} </p>
                    </div>
                    <hr />
                    <div className={CSS.characterDetailLine}>
                        <p className={CSS.cardText}>birthday</p>
                        <p className="card-text">{birthday} </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ListItem
