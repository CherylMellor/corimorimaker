import {useState} from "react";

const PhotoCards = () => {
    const [cards, setCards] = useState([
        {picture: <img src='/Photos/Crochet/Blob monster blue.jpg' alt='Blob Monster' />, title: "Blob Monster", blurb: 'Blob Monster Info Blob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster InfoBlob Monster Info', id: 1},
        {picture: <img src='/Photos/Crochet/Blob monster blue ears.jpg' alt='Blob monster' />, title: "Blob Monster", blurb: 'Blob Monster Info', id: 2},
        {picture: <img src='/Photos/Crochet/Blob monster purple.jpg' alt='Blob monster' />, title: "Blob Monster", blurb: 'Blob Monster Info', id: 3},
        {picture: <img src='/Photos/Crochet/Monster.jpg' alt='Monster' />, title: "Monster", blurb: 'Monster Info', id: 4},
        {picture: <img src='/Photos/Crochet/Phoenix 6.jpg' alt='Phoenix' />, title: "Phoenix", blurb: 'PhoenixInfo', id: 5},
        {picture: <img src='/Photos/Crochet/Giraffe 7.jpg' alt='Giraffe' />, title: "Giraffe", blurb: 'Giraffe Info', id: 6},
        {picture: <img src='/Photos/Crochet/Owl blue.jpg' alt='Blue Owl' />, title: "Blue owl", blurb: 'Blue owl Info', id: 7},
        {picture: <img src='/Photos/Crochet/Owl purple.jpg' alt='Purple Owl' />, title: "Purple Owl", blurb: 'Purple owl Info', id: 8},
        {picture: <img src='/Photos/Crochet/Squid.jpg' alt='Squid' height={"200px"} />, title: "Squid", blurb: 'Squid Info', id: 9},
        {picture: <img src='/Photos/Crochet/Red dragon 5.jpg' alt='Red dragon' />, title: "Red dragon", blurb: 'Red dragon Info', id: 10},
        {picture: <img src='/Photos/Crochet/Purple dragon.jpg' alt='Purple dragon' />, title: "Purple dragon", blurb: 'Purple dragon Info', id: 11},
        {picture: <img src='/Photos/Crochet/Green and white hat.jpg' alt='Green and white hat' />, title: "Green and white hat", blurb: 'Green and white hat Info', id: 12},
        {picture: <img src='/Photos/Crochet/Blue and white hat.jpg' alt='Blue and white hat' />, title: "Blue and white hat", blurb: 'Blue and white hat Info', id: 13},
        {picture: <img src='/Photos/Crochet/Striped scarf.jpg' alt='Striped scarf' />, title: "Striped Scarf", blurb: 'Striped scarf Info', id: 14},
        {picture: <img src='/Photos/Crochet/Fox cushion.jpg' alt='Fox cushion' />, title: "Fox Cushion", blurb: 'Fox cushion Info', id: 15},
        {picture: <img src='/Photos/Crochet/Deer cushion.jpg' alt='Deer cushion' />, title: "Deer Cushion", blurb: 'Deer Cushion Info', id: 16},
        {picture: <img src='/Photos/Crochet/Baby Yoda.jpg' alt='Baby Yoda' />, title: "Baby Yoda", blurb: 'Baby Yoda Info', link: <a href={"https://sarahmaker.com/crochet-baby-yoda/"}>Link to pattern</a>, id: 17},
        {picture: <img src='/Photos/Crochet/Elephant.jpg' alt='Elephant' />, title: "Elephant", blurb: 'ElephantInfo', id: 18},
        {picture: <img src='/Photos/Crochet/Teddy bear green.jpg' alt='Green Teddy Bear' />, title: "Green Teddy Bear", blurb: 'Green Teddy Bear Info', link: <a href={"https://www.knitpaintsew.com/blog/classic-crochet-teddy-bear"} target={"_blank"}>Teddy Bear Pattern Link</a>, id: 19},
        {picture: <img src='/Photos/Crochet/Viking helmet and beard.jpg' alt='Viking helmet and beard' />, title: "Viking Helmet and Beard", blurb: 'Viking Helmet and Beard Info', id: 20}

    ]);

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

