import React from 'react'
import userIcon from '../../assets/user-icon.png'
import likeIcon from '../../assets/like-icon.png'
import commentIcon from '../../assets/comment-icon.png'
import { useNavigate } from 'react-router-dom'
import { BLOGINNER } from '../../constants'


const EachLatestCard = ({ name, likes, comments, text, cardImg }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate(`${BLOGINNER}`);
}
return (
    <div className='each-latestCard-outer' >
        <div>
            <img onClick={handleNavigate} className='latestCard-img' src={cardImg} alt="" />
        </div>
        <div onClick={handleNavigate} className='each-latestCard-inner'>
            <div className='each-latestCard-inner-1'>
                <span>featured</span>
            </div>
            <div className='each-latestCard-inner-2'>
                <span>{text}</span>
            </div>
        </div>
        <div onClick={handleNavigate} className='each-latestCard-bottomContainer'>
            <div className='each-latestCard-bottomContainer-1'><span className='each-latestCard-bottomContainer-1-span'><span><img src={userIcon} alt="" /></span>{name}</span></div>
            <div className='each-latestCard-bottomContainer-2'>
                <span><img src={likeIcon} alt="" />{likes}</span>
                <span><img src={commentIcon} alt="" />{comments}</span>
            </div>
        </div>
    </div>
)
}

export default EachLatestCard