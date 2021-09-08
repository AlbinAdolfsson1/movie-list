import React, { useState, useEffect } from 'react'
import cn from 'classnames'

const Pagination = ( { setPageNumber, pageNumber, maxPage } ) => {

    useEffect(() => {

    }, [])
    
    return (
        <div>
                {pageNumber >= 3 && pageNumber < maxPage-2 &&(
                    <div>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>First</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === pageNumber-2, })} onClick={() => setPageNumber(pageNumber-2)}>{pageNumber-2}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === pageNumber-1, })} onClick={() => setPageNumber(pageNumber-1)}>{pageNumber-1}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === pageNumber})} onClick={() => setPageNumber(pageNumber)}>{pageNumber}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === pageNumber+1, })} onClick={() => setPageNumber(pageNumber+1)}>{pageNumber+1}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === pageNumber+2, })} onClick={() => setPageNumber(pageNumber+2)}>{pageNumber+2}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage, })} onClick={() => setPageNumber(maxPage)}>Last</button>
                    </div>
                )}

                {pageNumber < 3 &&(
                    <div>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>First</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>{1}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>{2}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 3, })} onClick={() => setPageNumber(3)}>{3}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 4, })} onClick={() => setPageNumber(4)}>{4}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 5, })} onClick={() => setPageNumber(5)}>{5}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage, })} onClick={() => setPageNumber(maxPage)}>Last</button>
                    </div>
                )}

                {pageNumber >= maxPage-2 &&(
                    <div>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>First</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage -4 })} onClick={() => setPageNumber(maxPage -4)}>{maxPage -4}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage -3 })} onClick={() => setPageNumber(maxPage -3)}>{maxPage -3}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage -2 })} onClick={() => setPageNumber(maxPage -2)}>{maxPage -2}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage -1 })} onClick={() => setPageNumber(maxPage -1)}>{maxPage -1}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage})} onClick={() => setPageNumber(maxPage)}>{maxPage}</button>
                        <button className={cn('Page-button', {'Page-button-active': pageNumber === maxPage, })} onClick={() => setPageNumber(maxPage)}>Last</button>
                    </div>
                )}
            
        </div>
    )
}

export default Pagination