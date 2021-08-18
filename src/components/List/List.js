import React, { useState } from 'react'
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
    const [searchName, setSearchName] = useState('')

    AOS.init();


    const URL = 'https://www.breakingbadapi.com/api/characters'
    let { data, isPending, error } = Api(URL)
    // console.log(data, isPending, error)

    // let searchItems = [...data];
    const searchHanlder = (e) => {
        let value = e.target.value
        setSearchName(value)
        console.log(searchName)

        if (value.length > 0) {
            data = data.filter((elem) =>
                elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            );
            console.log(data);
        }


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

                    <div data-aos="fade-up" className={CSS.list}>
                        {isPending ? "" : data.slice((page - 1) * 12, page * 12).map((ele) => <ListItem key={ele.char_id} {...ele} />)}

                    </div>


                </div>)

            }
            < Footer totalItems={62} page={page} setPage={setPage} />
        </>
    )
}

export default List