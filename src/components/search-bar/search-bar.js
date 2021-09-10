import React from 'react';
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';

export const SearchBar = ( {keyword, setKeyword} ) => {

    return (
        <div>
            <input key="searchMovie" className="searchBar" value={keyword} placeholder="Search Movies" onChange={(e) => setKeyword(e.target.value)} />
            {keyword &&(
                <Link to={`/search/${kebabCase(keyword)}`}><button className="searchBtn">Search</button></Link>
            )}
        </div>
    )
}

export default SearchBar
