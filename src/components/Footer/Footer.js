import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import CSS from './style.module.css'


const Footer = ({ itemPerPage = 12, totalItems, page, setPage }) => {

    const increasePage = () => {
        if (!(page === Math.ceil(totalItems / itemPerPage))) {
            setPage((prev) => prev + 1);
        }
    };

    const decreasePage = () => {
        if (!(page === 1)) {
            setPage((prev) => prev - 1);
        }
    };

    return (
        <div className={CSS.footer}>
            <button className={CSS.footer_btn} disabled={page === 1} onClick={decreasePage}>
                <ChevronLeftIcon className={CSS.footer_icon} />
            </button>
            <p className={CSS.footer_text}>
                Page No: <span>{page}</span>
            </p>
            <p className={CSS.footer_text}>
                Items displayed{' '}
                {`${totalItems === 0 ? totalItems : (page - 1) * itemPerPage + 1} - ${Math.min(
                    page * itemPerPage,
                    totalItems
                )} Out Of ${totalItems}`}
            </p>

            <button
                className={CSS.footer_btn}
                disabled={page === Math.ceil(totalItems / itemPerPage)}
                onClick={increasePage}
            >
                <ChevronRightIcon className={CSS.footer_icon} />
            </button>
        </div>
    );
};

export default Footer;


