import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import Nav from "./nav";
const Header = ({ header, headerMenus, footer, slug }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  return (
    <header>
      <Nav
        header={header}
        footer={footer}
        headerMenus={headerMenus}
        slug={slug}
      />
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string,
};

Header.defaultProps = {
  header: {},
  headerMenus: [],
  slug: "",
};

export default Header;
