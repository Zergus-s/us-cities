import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

export default function CitiesAdmin() {
  const { characters, status } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(console.log('запрос данных'));
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
          <h2>CitiesAdmin</h2>
        </div>
      );

    default:
      return null;
  }
}
