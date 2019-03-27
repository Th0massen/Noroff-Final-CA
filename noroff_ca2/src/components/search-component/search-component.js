import React from 'react'
import styles from './search-component.module.scss'

const SearchBar = (props) => {

    const input = React.createRef();

    const handleSearch = () => {
        const searchValue = input.current;
        props.onSearch( searchValue.value )
    }

    return(
        <div className={ styles.search }>
            <input className={ styles.search_field } type="text" placeholder="Search for a card" ref={ input } onChange={ handleSearch }/>
            <input className={ styles.search_button } type="button" value="&#128269;" onClick={ handleSearch } />
        </div>
    )
}

export default SearchBar