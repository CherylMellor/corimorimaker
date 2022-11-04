import {useState} from "react";
import PhotoCardInfo from './PhotoCardsData.js'

const PhotoCards = (props) => {
    const { section } = props
    const [cards, setCards] = useState(PhotoCardInfo[section])
    return (

        <div className='photo-card-section'>
            {cards.map((info) => (
        <div className='photo-cards' key={info.id}>
            <div style={{margin: 'auto'}}> {info.picture}</div>
            <div>
            <h2 style={{borderTop: 'solid 2px #708c82',
            paddingTop: '12px', textAlign: 'center', color: '#275263'
            }}>{info.title}</h2>
            </div>
                <div style={{padding: '0 10px', }}>
            <p style={{ textAlign: 'center'}}>{info.blurb}</p>
                    <p style={{margin: '5px 0'}}>Pattern: {info.$ref}</p>
                </div>
        </div>
                ))}
            </div>
    );
}
export default PhotoCards;

