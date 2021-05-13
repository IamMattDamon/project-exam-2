import { useState, useEffect } from "react";
import ContactPostItem from "./ContactPostItem";
import { CONTACT_URL } from "./../../constants/api";
import Container from "react-bootstrap/Container";

function ContactPostList() {
    const [contactforms, setContactforms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(CONTACT_URL);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setContactforms(json);
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
              <div className="contactpost-list">
                {contactforms.map(function (contactform) {
                    const {
                        id,
                        full_name,
                        email,
                        subject,
                        created_at,
                        message,
                    } = contactform;
                    return (
                        <ContactPostItem
                        key={id}
                        id={id}
                        full_name={full_name}
                        email={email}
                        subject={subject}
                        created_at={created_at}
                        message={message}
                        />
                    );
                })}
              </div> 
          </Container>
          </>
      );
}

export default ContactPostList;
