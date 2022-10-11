import {useState} from "react";
import PhotoCardInfo from './PhotoCardsData.js'

const PatternLinks = (props) => {
    const {sections} = props
    const [links, setLinks] = useState(PhotoCardInfo [sections])
    return (
        <div>
            <h2 style={{borderTop: 'solid 2px #708c82',
                paddingTop: '15px', textAlign: 'center', color: '#275263'
            }}>Links for the patterns I have used can be found here:</h2>

            {links.map((links) => (
        <div className='pattern-links' key={links.id}>
                <div>
                <ul>
                <li> {links.title} : {links.$ref}</li>
                </ul>
        </div>
                </div>
                ))}
            </div>
    );
}
export default PatternLinks;

