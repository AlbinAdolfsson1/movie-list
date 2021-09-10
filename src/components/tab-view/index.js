import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchBar from '../search-bar/search-bar';

const TabView = ({ views }) => {
    const [keyword, setKeyword] = useState('')

    return (
        <div>
            <header className="App-header">
                <div className="App-title">
                    <NavLink exact={true} to='/' className='TabView-menu'>
                        <h1>The Movie List</h1>
                    </NavLink>
                </div>

                <div>
                    <SearchBar keyword={keyword} setKeyword={setKeyword}/>
                </div>

                <ul className="Categorie-list">
                    {views.map((m , i) => (
                        <li className="Categorie-list">
                            <NavLink exact={true} to={m.path} className='TabView-menu'>
                                {m.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </header>
        </div>
    );
}

export default TabView;