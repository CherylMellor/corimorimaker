import React, {useState} from 'react'


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const countries = [

        { name: "Belgium", continent: "Europe", },
        { name: "India", continent: "Asia",  },
        { name: "Bolivia", continent: "South America", },
        { name: "Ghana", continent: "Africa", },
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let filteredCountries
    if (searchInput.length > 0) {
        filteredCountries = countries.filter((country) => {
            return country.name.toLowerCase().includes(searchInput.toLowerCase().trim());
        });
    } else {
        filteredCountries = [...countries]
    }

    return <div>

        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Country</th>
                <th>Continent</th>
            </tr>

            {filteredCountries.map((country) => (
                <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.continent}</td>
                </tr>
            ))}
        </table>

    </div>

};

export default SearchBar;
