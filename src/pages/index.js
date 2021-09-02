import React, { useEffect, useState } from 'react';
import '../App.css';
import TabView from '../components/tab-view/index';
import Upcoming from './Upcoming';
import Popular from './Popular';
import TopMovies from './TopMovies';



const IndexPage = (props) => {
  const tabViews = [
    {
        path: '/upcoming',
        label: 'Upcoming',
        component: <Upcoming />,
    },
    {
        path: '/popular',
        label: 'Popular',
        component: <Popular />,
    },
    {
        path: '/topMovies',
        label: 'Top Movies',
        component: <TopMovies />,
    }
  ]

  console.log(props.video)

  return (
    <div className="App">
      <TabView views={tabViews} />
    </div>
    
  );
}

export default IndexPage
