import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardPopular from './CardPopular'

const Search = (props) => {

    // Fake Data
    const [courseData, setCourseData] = useState([]);
    // Fake Data



    const [showRecent, setShowRecent] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [recents, setRecents] = useState([]);
    const maxRecents = 5;

    useEffect(() => {
        const getRecent = localStorage.getItem('Recent');
        if (getRecent) {
            setRecents(JSON.parse(getRecent));
        }
    }, []);

    const handleChange = (e) => {
        setSearchData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowRecent(false);
        if (searchData && !recents.includes(searchData)) {
            let updatedRecents = [searchData, ...recents];
            if (updatedRecents.length > maxRecents) {
                updatedRecents = updatedRecents.slice(0, maxRecents);
            }
            setRecents(updatedRecents);
            localStorage.setItem('Recent', JSON.stringify(updatedRecents));
        }
    };

    const pickRecentSearch = (item) => {
        setSearchData(item);
        setShowRecent(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowRecent(false);
        }, 200);
    };

    return (
        <div
            className={`${props.show ? '' : 'd-none'}`}
            style={{
                width: '100vw',
                height: 'calc(100vh - 56px)',
                position: 'fixed',
                top: '56px',
                left: '0',
                right: '0',
                zIndex: '1000',
            }}
        >

            {/* Modal */}
            <div className='bg-white pb-5' style={{ height: '92%', overflowY: 'scroll' }}>
                <div className="extraHeader">
                    <div className="search-form" style={{ position: 'relative' }}>
                        <form className="form-group searchbox" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id='searchBar'
                                className="form-control pl-2 pr-5"
                                value={searchData}
                                onChange={handleChange}
                                onFocus={() => recents.length > 0 ? setShowRecent(true) : setShowRecent(false)}
                                onBlur={handleBlur}
                                style={{ backgroundColor: '#EFEFEF' }}
                            />
                            <button
                                type="submit"
                                className="input-icon"
                                style={{
                                    border: 'none',
                                    background: 'none',
                                }}>
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </form>
                        <div className={`w-100 ${showRecent ? 'd-flex' : 'd-none'} flex-column border rounded pt-2`}
                            style={{
                                position: 'absolute',
                                backgroundColor: '#EFEFEF',
                                top: '28px',
                                zIndex: '-1',
                                transition: 'all 0.3s'
                            }}>
                            <div className="text-secondary text-center w-100 py-2">
                                Recent searches
                            </div>
                            <div className="w-100 px-2" style={{ borderTop: '1px solid #DADAE6' }}>
                                {recents.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => pickRecentSearch(item)}
                                        style={{
                                            padding: '5px',
                                            fontSize: '14px',
                                            borderTop: '1px solid #DADAE6',
                                            cursor: 'pointer'
                                        }}>
                                        {item.length > 35 ? item.substring(0, 40) + "..." : item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======================== Courses ============================ */}


                <div className="mt-5 row px-1">

                    {
                        searchData.length > 0 ? (
                            courseData.filter((item) =>
                                item.program_name.toLowerCase().includes(searchData.toLowerCase())
                            ).length > 0 ? (
                                courseData.filter((item) =>
                                    item.program_name.toLowerCase().includes(searchData.toLowerCase())
                                ).map((foundedItems) => (
                                    <div className="col-6 mt-3" key={foundedItems.id}>
                                        <Link
                                            to={`/course-detail/${foundedItems.id}`}
                                            style={{ textDecoration: 'none' }}
                                            className="card shadow"
                                        >
                                            <CardPopular
                                                title={foundedItems.program_name}
                                                category={foundedItems.category}
                                                image={'assets/img/course/1.png'}
                                                price={foundedItems.of_price}
                                            />
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12" style={{ display: 'grid', placeItems: 'center', width: '100%', height: 'calc(100vh - 190px)' }}>
                                    <div className='text-center'>No courses found matching
                                        <span style={{ fontWeight: '500' }}> "{searchData}"</span>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="col-12" style={{ display: 'grid', placeItems: 'center', width: '100%', height: 'calc(100vh - 190px)' }}>
                                <div className='text-center'>
                                    Type in the searchbox...
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>

            <div
                className='bg-dark'
                style={{
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '8%',
                    opacity: '0.4',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={props.onClose}
            >
                <ion-icon name="close-outline" style={{fontSize: '28px'}}></ion-icon>
            </div>
        </div>
    );
};

export default Search;
