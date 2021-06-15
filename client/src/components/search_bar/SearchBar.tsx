import React from "react";
import styles from "./SearchBar.module.scss";
import * as icons from "@material-ui/icons";

interface SearchBarProps {
  value?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          name="searchInput"
          id="searchInput"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.searchButton}>
          <icons.SearchRounded />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
