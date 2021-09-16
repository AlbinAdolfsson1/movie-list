import React, { useEffect, useState } from 'react';

const Reviews = (props) => {
    const [avatar, setAvatar] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        setAvatar(props.author_path)
        setDate(props.posted)

        console.log(props.author_path)
    }, [])

    return (
        <div className="reviews-background">
            <h1>{props.author}</h1>
            <p className="Review-date">Posted: {date.substring(0,10)} : {date.substring(11, 16)}</p>
            {avatar &&(
                <div className="avatar-holder">
                    <img src={avatar.substring(1)} className="Review-avatar"></img>
                </div>
            )}
            {props.rating &&(
                <p className="Review-rating"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" alt="" className="Details-star"></img>{props.rating}/10</p>
            )}
            <p className="Review-desc">{props.content}</p>
        </div>
    )
}

export default Reviews