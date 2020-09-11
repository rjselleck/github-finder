import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//stateteless functional component - use this instead of class component because it has no state
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

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
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};


export default UserItem;
