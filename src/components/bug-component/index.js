import React, {memo} from 'react';
import bugIcon from '../../assets/bug-icon/bug.svg'

const BugComponent = (props) => {
    return (
        <img
            src={bugIcon}
            alt=""
            className="bug"
            style={{top: props.bug.y, left: props.bug.x}}
            onClick={() => props.onClick(props.index)}
        />
    );
};

export default memo(BugComponent);