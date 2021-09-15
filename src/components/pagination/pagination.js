import React from 'react'
import cn from 'classnames'

const Pagination = ( { setPageNumber, pageNumber, maxPage } ) => {

    const btns = []

    if (pageNumber > 1) 
        btns.push(<button key={btns[pageNumber +1]} className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>First</button>)
    
    for (let x = Math.max(1, pageNumber-2); x<= Math.min(pageNumber+2, maxPage); x++)
        btns.push(<button key={x + pageNumber} className={cn('Page-button', {'Page-button-active': pageNumber === x, })} onClick={() => setPageNumber(x)}>{x}</button>)

    if (pageNumber < maxPage) 
        btns.push(<button key={btns[pageNumber]} className={cn('Page-button', {'Page-button-active': pageNumber === maxPage, })} onClick={() => setPageNumber(maxPage)}>Last</button>)

    return <div key={pageNumber}>{btns}</div>

}

export default Pagination