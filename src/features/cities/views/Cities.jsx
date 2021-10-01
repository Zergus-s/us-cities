import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

export default function Cities() {
  const { status } = useSelector((state) => state.characters);

  switch (status) {
    case 'failed':
      console.error();
      break;
    case 'loading':
      return <h1>Loading</h1>;
    case 'success':
      return (
        <div>
          <h2>Cities</h2>
        </div>
      );

    default:
      return null;
  }
}
