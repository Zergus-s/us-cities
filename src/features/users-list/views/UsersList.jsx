import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { fetchUsers } from '../redux/UsersSlice';

import styles from './UsersListStyles.module.scss';

export default function UsersList() {
  const { status, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userList = users.users;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  switch (status) {
    case 'failed':
      console.error();
      break;
    case 'loading':
      return <h1>Loading</h1>;
    case 'success':
      return (
        <div>
          <h1>Users</h1>
          <div>
            {userList.map((item) => (
              <User item={item} key={item.id} />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
