import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import { ACCOMMODATION_URL } from "./../../constants/api";
import Container from "react-bootstrap/Container";

function FeaturedList() {
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
              setError("An error has occurred");
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
        return <div className="container font-color-white font-family-secondary">Loading...</div>;
      }
    
      if (error) {
        return <div className="container font-color-white font-family-secondary">An error has occurred: {error}</div>;
      }

      return (
        <>
        <Container>
          <div className="featured-list d-flex flex-wrap justify-content-center">
            {accommodations.map(function (accommodation) {
              if (accommodation.featured) {
              const {
                id,
                name,
                type,
                description,
                bathrooms,
                bedrooms,
                size,
                image,
                featured,
                feature_one,
                feature_two,
                feature_three,
              } = accommodation;
              return (
                <FeaturedItem
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  description={description}
                  bathrooms={bathrooms}
                  bedrooms={bedrooms}
                  size={size}
                  image={image}
                  featured={featured}
                  feature_one={feature_one}
                  feature_two={feature_two}
                  feature_three={feature_three}
                />
              )};
            })}
        
          </div>
          </Container>
          </>
      );
}

export default FeaturedList;