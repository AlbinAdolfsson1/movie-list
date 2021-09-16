import React, { useState } from 'react'

const ListType = ({ setListType, listType, setPageNumber }) => {
    const [typeName, setTypeName] = useState('Movies')

    const Change = () => {
        if (listType === "movie")
        {
            setListType('tv')
            setTypeName('TV Shows')
        }
        else
        {
            setListType('movie')
            setTypeName('Movies')
        }

        if (setPageNumber)
            setPageNumber(1)

    }

    return (
        <div>
            <button className="Type-button" onClick={Change}>{typeName}</button>
        </div>
    )
}

export default ListType