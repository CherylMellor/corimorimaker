import SearchBar from "./SearchBar";

const PatternLinks = (props) => {
    const {section} = props
    return (
        <div id='Pattern_Links'>

            <h2 style={{borderTop: 'solid 2px #708c82',
                paddingTop: '15px', textAlign: 'center', color: '#275263', width: '80%', margin: '0 auto',
            }}>Links to the patterns used can be found here:</h2>
            <SearchBar section={section} />
            </div>
    );
}
export default PatternLinks;

