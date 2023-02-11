import SearchBar from "./SearchBar";

const PatternLinks = (props) => {
    const {section} = props
    return (
        <div id='Pattern_Links'>

            <h1 style={{borderTop: 'solid 2px #708c82',
                padding: '20px 0', textAlign: 'center', width: '80%', margin: '0 auto',
            }}>Links to the patterns used can be found here:</h1>
            <SearchBar section={section} />
            </div>
    );
}
export default PatternLinks;

