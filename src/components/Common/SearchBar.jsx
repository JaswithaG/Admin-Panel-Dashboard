import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search..."
}) => {
  return (
    <div className="searchbar-container">
      <FaSearch className="searchbar-icon" />

      <input
        type="text"
        className="searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;