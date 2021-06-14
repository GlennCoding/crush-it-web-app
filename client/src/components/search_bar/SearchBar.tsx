import React from "react";
import styles from "./SearchBar.module.scss";
import * as icons from "@material-ui/icons";

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input
                className={styles.searchInput}
                type="text"
                name="searchInput"
                id="searchInput"
            />
            <button className={styles.searchButton}>
                <icons.SearchRounded />
            </button>
        </div>
    );
};

export default SearchBar;
