import React, { useEffect, useState } from 'react';

const Reviews = (props) => {
    const [avatarPath, setAvatarPath] = useState('')
    const [avatar, setAvatar] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (props.author_path != null && !avatarPath)
        {
            setAvatarPath(props.author_path)
        }

        setDate(props.posted)

        if (avatarPath.substring(0,3) === '/ht')
        {
            setAvatar(avatarPath.substring(1))
            
        }
        else if (avatarPath.substring(0,1) === '/' && avatarPath.substring(0,3) !== '/ht')
        {
            setAvatar('https://image.tmdb.org/t/p/w500/' + props.author_path)
        }

    }, [avatarPath, avatar])

    return (
        <div className="reviews-background">
            <h1>{props.author}</h1>
            <p className="Review-date">Posted: {date.substring(0,10)} : {date.substring(11, 16)}</p>
            {avatar &&(
                <div className="avatar-holder">
                    <img src={avatar} alt="" className="Review-avatar"></img>
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