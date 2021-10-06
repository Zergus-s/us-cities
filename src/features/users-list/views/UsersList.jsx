import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import usersSlice from '../redux/usersSlice';

export default function UsersList() {
  const { loading, error, users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersSlice.actions.fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((item) => (
          <User item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
