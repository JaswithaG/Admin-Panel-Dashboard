import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <div className="breadcrumb">

      <Link to="/">Dashboard</Link>

      {pathnames.map((value, index) => {
        const to =
          "/" + pathnames.slice(0, index + 1).join("/");

        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            <span className="separator">/</span>

            {isLast ? (
              <span className="current">
                {value.charAt(0).toUpperCase() +
                  value.slice(1)}
              </span>
            ) : (
              <Link to={to}>
                {value.charAt(0).toUpperCase() +
                  value.slice(1)}
              </Link>
            )}
          </span>
        );
      })}

    </div>
  );
};

export default Breadcrumb;