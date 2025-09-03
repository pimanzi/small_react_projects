// import { useEffect, useState } from 'react';
import {
  Link,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';

export default function Vans() {
  // const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typedVariable = searchParams.get('type');
  const vans = useLoaderData();
  const navigation = useNavigation();

  // useEffect(() => {
  //   fetch('/api/vans')
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  function handleFilter(key, value) {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      if (value === null || value === '') {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
      return sp;
    });
  }
  const filteredVans = typedVariable
    ? vans.filter((van) => van.type === typedVariable)
    : vans;
  const vanElements = filteredVans.map((van) => (
    <Link
      to={`/vans/${van.id}`}
      key={van.id}
      className="van-tile"
      state={{ search: searchParams.toString() }}
    >
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </Link>
  ));

  if (navigation.state === 'loading') return <div>loading</div>;
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <div>
        <button
          onClick={() => handleFilter('type', 'simple')}
          className="van-type simple"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilter('type', 'luxury')}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilter('type', 'rugged')}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilter('type', null)}
          className="van-type clear-filters"
        >
          Clear
        </button>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
