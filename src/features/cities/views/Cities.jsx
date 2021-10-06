import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import City from '../components/City';
import citiesSlice from '../redux/citiesSlice';

export default function Cities() {
  const { loading, error, cities } = useSelector((state) => state.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesSlice.actions.fetchCities());
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Cities</h1>
      <div>
        {cities.map((item) => (
          <City item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
