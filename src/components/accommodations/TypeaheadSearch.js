import { useState, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { ACCOMMODATION_URL } from "./../../constants/api";

const url = ACCOMMODATION_URL;

const TypeaheadSearch = () => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${url}${query}`)
            .then((resp) => resp.json())
            .then(({ accommodations }) => {
                const options = accommodations.map((accommodation) => ({
                    image: accommodation.image[0].formats.thumbnail.url,
                    id: accommodation.id,
                    name: accommodation.name,
                }));

                setOptions(options);
                setIsLoading(false);
            });
    };

    const filterBy = () => true;

    return(
        <AsyncTypeahead
        filterBy={filterBy}
        id="async-search"
        isLoading={isLoading}
        labelKey="name"
        minLength={2}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for accommodations..."
        renderMenuItemChildren={(option, props) => (
            <Fragment>
                <img
                alt={option.name}
                src={option.image}
                style={{
                    height: "20px",
                    marginRight: "10px",
                    width: "20px",
                }}
                />
            </Fragment>
        )}
        />
    );
};

export default TypeaheadSearch;