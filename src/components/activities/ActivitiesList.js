import { useState, useEffect } from "react";
import ActivitiesItem from "./ActivitiesItem";
import { ACTIVITIES_URL } from "./../../constants/api";
import Container from "react-bootstrap/Container";

function ActivitiesList() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(ACTIVITIES_URL);

                if (response.ok) {
                    const json = await response.json();
                    setActivities(json);
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
            <div className="accommodations-list d-flex flex-wrap justify-content-center">
            {activities.map(function (activities) {
            const {
            id,
            name,
            description,
            image,
          } = activities;
          return (
            <ActivitiesItem
              key={id}
              id={id}
              name={name}
              description={description}
              image={image}
            />
          );
        })}
      </div>
          </Container>
          </>
      );
}

export default ActivitiesList;