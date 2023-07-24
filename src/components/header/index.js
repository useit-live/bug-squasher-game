import React, {memo} from 'react';

const Header = (props) => {
    return (
        <div className='bug-squasher-header'>
            <div className="bug-squasher-score">Score: {props.score}</div>
            <div className="bug-squasher-time">Time left: {props.timeLeft} seconds</div>
        </div>
    );
};

export default memo(Header);