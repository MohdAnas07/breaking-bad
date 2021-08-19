import React, { useState, useEffect, useCallback } from 'react'
import CSS from './style.module.css'
import ListItem from '../ListItem/ListItem'
import SearchIcon from '@material-ui/icons/Search';
import Api from '../../Api/Api'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';


const List = () => {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([]);
    const [searchName, setSearchName] = useState('')

    AOS.init();


    const URL = 'https://www.breakingbadapi.com/api/characters'
    let { data, isPending, error } = Api(URL)


    // useEffect(() => {
    //     setItems(data);
    //     if (searchName.length > 0) {
    //         let item = items.filter((elem) =>
    //             elem.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    //         );
    //         setItems(item)
    //     }

    // }, [items, searchName])


    const searchHanlder = (e) => {
        setSearchName(e.target.value);
    }


    return (
        <>
            {isPending ? (<Loader />) :
                (<div data-aos="fade-up" className={CSS.listContainer}>
                    <div className={CSS.filters}>
                        <div style={{ position: 'relative' }}>
                            <input
                                value={searchName}
                                onChange={searchHanlder}
                                placeholder="Filter by Character name"
                                className={CSS.filter_name}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input
                                // value={category}
                                // onChange={onChangeHanlderCate}
                                placeholder="Search By Category"
                                className={CSS.filter_name}
                            />
                            <SearchIcon
                                // onClick={onSearchHanlder} 
                                className={CSS.filter_search} />
                        </div>
                    </div>

                    <hr className={CSS.hr} />

                    <div data-aos="fade-up" className={CSS.list}>
                        {data && (isPending ? "" : data.slice((page - 1) * 12, page * 12)).map((ele) => <ListItem key={ele.char_id} {...ele} />)}
                    </div>

                </div>)

            }
            < Footer totalItems={62} page={page} setPage={setPage} />
        </>
    )
}

export default List
