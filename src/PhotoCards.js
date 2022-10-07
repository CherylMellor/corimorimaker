import {useState} from "react";
import PhotoCardInfo from './PhotoCardsData.js'

const PhotoCards = () => {
    const [cards, setCards] = useState(PhotoCardInfo.Amigurumi);

    return (

        <div className='photo-card-section'>
            {cards.map((info) => (
        <div className='photo-cards' key={info.id}>
            <div style={{margin: 'auto'}}> {info.picture}</div>
            <div>
            <h2 style={{borderTop: 'solid 2px #708c82',
            paddingTop: '15px', textAlign: 'center', color: '#275263'
            }}>{info.title}</h2>
            </div>
                <div style={{padding: '0 20px', }}>
            <p style={{marginTop: '10px', textAlign: 'center'}}>{info.blurb}</p>
                    <p style={{margin: '7px'}}>{info.link}</p>
                </div>
        </div>
                ))}
            </div>
    );
}
export default PhotoCards;

