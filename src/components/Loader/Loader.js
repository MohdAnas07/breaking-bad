import React from 'react'
import CSS from './style.module.css'
import CachedIcon from '@material-ui/icons/Cached';

const Loader = () => {

    const styleForPaper = {
        width: '200px',
        height: '200px',
    }

    return (
        <div style={{ color: 'black' }} className={CSS.loader} >
            <CachedIcon style={styleForPaper} className={CSS.loaderIcon} />
        </div>
    )
}

export default Loader
