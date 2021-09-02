import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import cn from 'classnames';

const TabView = ({ views }) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <header className="App-header">
                <ol className="Categorie-list">
                    <li className="Title">
                        <h1>The Movie List</h1>
                    </li>

                    {views.map((m , i) => (
                        <div>
                            <li className="Categorie-list">
                                <Link to={m.path}>
                                    <button className={cn('TabView-menu', {'TabView-menu-active': activeTab === i, })} onClick={() => setActiveTab(i)} key={`${m.label}-${i}`}>
                                    {m.label}
                                    </button>
                                </Link>
                            </li>
                        </div>
                    ))}
                </ol>

            </header>

            <div>
                <Switch>
                    <Route path="/upcoming">
                        {views[0].component}
                    </Route>
                    <Route path="/popular">
                        {views[1].component}
                    </Route>
                    <Route path="/topMovies">
                        {views[2].component}
                    </Route>
                    <Route path="/">
                        {views[activeTab].component}
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default TabView;