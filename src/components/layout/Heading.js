import { PropTypes } from "prop-types";

export default function Heading({ title }) {
  return <h1 className="main-heading">{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};
