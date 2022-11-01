import React, {useState} from 'react'
import PhotoCardInfo from './PhotoCardsData.js'

const SearchBar = (props) => {
    const {section} = props;

    const [searchInput, setSearchInput] = useState("");
    const [links, setLinks] = useState(PhotoCardInfo[section])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let filteredPatterns
    if (searchInput.length > 0) {
        filteredPatterns = links.filter((pattern) => {
            return pattern.title.toLowerCase().includes(searchInput.toLowerCase().trim());
        });
    } else {
        filteredPatterns = [...links]
    }
    return <div>

        <input
            type="search"
            placeholder="Search patterns here"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Title</th>
                <th>Pattern Links</th>
            </tr>

            {filteredPatterns.map((links) => (
                <tr key={links.id}>
                <td>{links.title}</td>
                <td>{links.$ref}</td>
                </tr>
            ))}
        </table>

    </div>

};

export default SearchBar;
