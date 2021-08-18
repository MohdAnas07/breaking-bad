import React from 'react'
import CSS from './style.module.css'
import CachedIcon from '@material-ui/icons/Cached';

const Loader = () => {

    return (

        <div style={{ color: 'black' }} className={CSS.loader} >
            <p>l</p>
            <p>o</p>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </div>
    )
}

export default Loader

// <CachedIcon style={styleForPaper} className={CSS.loaderIcon} />