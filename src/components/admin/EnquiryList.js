import { useState, useContext, useEffect } from "react";
import AuthContext from "./../../context/AuthContext";
import EnquiryItem from "./EnquiryItem";
import { ENQUIRY_URL } from "./../../constants/api";

const url = ENQUIRY_URL;

function EnquiryList() {
  const [enquiryforms, setEnquiryforms] = useState([]);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);

  useEffect(function () {
    async function fetchData() {
      const token = auth.jwt;

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setEnquiryforms(json);
        } else {
          setError("An error has occurred");
        }
      } catch (error) {
        setError(error.toString());
      }
    }
    fetchData();
    setInterval(fetchData, 60000);
  }, []);

  if (error) {
    return (
      <div className="container font-color-white font-family-secondary">
        An error has occurred: {error}
      </div>
    );
  }

  return (
    <>
      <div className="enquirypost-list">
        {enquiryforms.map(function (enquiryform) {
          const {
            id,
            full_name,
            email,
            accommodations,
            date_of_arrival,
            days,
            people,
            created_at,
          } = enquiryform;
          return (
            <EnquiryItem
              key={id}
              id={id}
              full_name={full_name}
              email={email}
              accommodations={accommodations}
              date_of_arrival={date_of_arrival}
              days={days}
              people={people}
              created_at={created_at}
            />
          );
        })}
      </div>
    </>
  );
}

export default EnquiryList;
