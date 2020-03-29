import React from 'react';
import PropTypes from 'prop-types';

//stateteless functional component - use this instead of class component because it has no state
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  //recieve state coming in from Users component - put into props
  //one way to do it...destructured above
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt='alt text'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};


export default UserItem;
