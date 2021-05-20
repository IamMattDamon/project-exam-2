import { useState, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { useHistory } from "react-router-dom";
import { ACCOMMODATION_URL } from "../../constants/api";
import Form from "react-bootstrap/Form";

const url = ACCOMMODATION_URL;

function DropdownSearchList() {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${url}?name_contains=${query}`)
        .then((resp) => resp.json())
        .then((options) => {
            console.log(options);
            
            const filteredSearch = options.filter(accommodation => {
                return accommodation.name.toLowerCase().includes(query)
            });
            
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
                    history.push("/accommodations/" + accommodations[0].id);
                }}
                placeholder="Search for accommodations"
                renderMenuItemChildren={(accommodation) => (
                    <Fragment>
                      <div className="d-flex flex-row align-content-center">
                      <img
                      alt={accommodation.name}
                      src={accommodation.image[0].formats.thumbnail.url}
                      style={{
                        height: '32px',
                        marginRight: '5px',
                        width: '32px',
                        }}
                      />
                      <div className="search-content ml-2">
                          <p className="mb-0">{accommodation.name}</p>
                      </div>
                      <div className="search-content search-price-tag ml-2">
                          <p className="mb-0">{accommodation.price} NOK</p>
                      </div>
                      </div>
                    </Fragment>
                )}
                />
        </Form>
        </>
    );
};

export default DropdownSearchList;
