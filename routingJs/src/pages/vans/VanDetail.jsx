import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();
  console.log(location);
  useEffect(function () {
    async function fetchVanDetail() {
      try {
        const response = await fetch(`/api/vans/${id}`);

        if (!response.ok) {
          throw new Error('Error on the server');
        }

        const data = await response.json();
        setVan(data.vans);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchVanDetail();
  }, []);
  return (
    <div className="van-detail-container">
      <Link
        to={location.state?.search ? `..?${location.state?.search}` : '..'}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
