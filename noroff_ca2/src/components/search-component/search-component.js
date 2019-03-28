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
            <input className={ styles.search_field } type="text" placeholder="Looking for a specific card?" ref={ input } onChange={ handleSearch }/>
           
        </div>
    )
}

export default SearchBar