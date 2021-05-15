import { useState, useContext, useEffect } from "react";
import AuthContext from "./../../context/AuthContext";
import MessageItem from "./MessageItem";
import { CONTACT_URL } from "../../constants/api";
import Container from "react-bootstrap/Container";

const url = CONTACT_URL;

function MessageList() {
    const [contactforms, setContactforms] = useState([]);
    const [loading, setLoading] = useState(true);
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
    }, [])

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
                        <MessageItem
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

export default MessageList;
