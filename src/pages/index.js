import React, { useEffect, useState } from 'react';
import '../App.css';
import TabView from '../components/tab-view/index';
import Upcoming from './upcoming';
import Popular from './Popular';
import TopMovies from './TopMovies';

const IndexPage = (props) => {
  const tabViews = [
    {
        label: 'Upcoming',
        component: <Upcoming />,
    },
    {
        label: 'Popular',
        component: <Popular />,
    },
    {
        label: 'Top Movies',
        component: <TopMovies />,
    }
  ]

  const [pageNumber, setPageNumber] = useState(1)

  console.log(props.video)

  return (
    <div className="App">
        <TabView views={tabViews} />
    </div>
    
  );
}

export default IndexPage
