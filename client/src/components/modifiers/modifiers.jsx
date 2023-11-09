import Filters from "./filters/filters";
import ResetButton from "./resetButton/resetButton";
import SearchBar from "./searchBar/searchBar";
import style from "./modifiers.module.css"

const Modifiers = () => {
    return(
        <nav className={style.nav}>
        <Filters />
        <SearchBar />
        <ResetButton />
        </nav>
    )
};

export default Modifiers;