import { useState, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Link } from 'react-router-dom';
import { ACCOMMODATION_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

const url = ACCOMMODATION_URL;

function DropdownSearchList() {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${url}?name_contains=${query}`)
        .then((resp) => resp.json())
        .then((accommodations) => {
            console.log(accommodations)
            
            const filteredSearch = accommodations.filter(accommodation => {
                return accommodation.name.toLowerCase().includes(query)
            })
            
            setOptions(filteredSearch);
            setIsLoading(false);
        });
    };

    const filterBy = () => true;

    return (
        <>
        <Form className="accommodations-search-form">
            <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                isLoading={isLoading}
                labelKey="name"
                minLength={2}
                onSearch={handleSearch}                
                options={options}
                onChange={(accommodations) => {
                    window.location = "/accommodations/" + accommodations[0].id
                }}
                placeholder="Search for accommodations"
                renderMenuItemChildren={(accommodation) => (
                    <Fragment>
                      <img
                      alt={accommodation.name}
                      src={accommodation.image[0].formats.thumbnail.url}
                      style={{
                        height: '24px',
                        marginRight: '10px',
                        width: '24px',
                        }}
                      />
                      <div>
                          <p>{accommodation.name}</p>
                      </div>
                    </Fragment>
                )}
                />
        </Form>
        </>
    );
};

export default DropdownSearchList;
