import { useState, useEffect } from "react";
import AccommodationItem from "./AccommodationItem";
import { ACCOMMODATION_URL } from "./../../constants/api";

function AccommodationList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(ACCOMMODATION_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setAccommodations(json);
        } else {
          setError("An error has ocurred");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error}</div>;
  }

  return (
      <div className="accommodations-list d-flex flex-wrap justify-content-center">
        {accommodations.map(function (accommodation) {
          const {
            id,
            name,
            type,
            description,
            bathrooms,
            bedrooms,
            size,
            image,
            feature_one,
            feature_two,
            feature_three,
          } = accommodation;
          return (
            <AccommodationItem
              key={id}
              id={id}
              name={name}
              type={type}
              description={description}
              bathrooms={bathrooms}
              bedrooms={bedrooms}
              size={size}
              image={image}
              feature_one={feature_one}
              feature_two={feature_two}
              feature_three={feature_three}
            />
          );
        })}
      </div>
  );
}

export default AccommodationList;