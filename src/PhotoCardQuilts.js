import {useState} from "react";

const PhotoCardQuilts = () => {

const [quilts, setQuilts] = useState([
    {picture: <img src='/Photos/Baby MS quilt.jpg' alt='Quilt' />, title: "Baby MS Quilt", blurb: 'Baby MS Quilt Info', id: 1},
    {picture: <img src='/Photos/Gills wedding quilt.jpg' alt='Quilt' />, title: "Gills Quilt", blurb: 'Gills Quilt Info', id: 2},
    {picture: <img src='/Photos/Andys quilt.jpg' alt='Quilt' />, title: "Andys Quilt", blurb: 'Andys quilt Quilt Info', id: 3},
    {picture: <img src='/Photos/Living with MS quilt.jpg' alt='Quilt' />, title: "Living with MS Quilt", blurb: 'Living with MS Quilt Info', id: 4},
    {picture: <img src='/Photos/MS quilt.jpg' alt='Quilt'  />, title: "MS Quilt", blurb: 'MS Quilt Info', id: 5},
    {picture: <img src='/Photos/Yellow baby quilt.jpg' alt='Quilt' />, title: "Yellow baby Quilt", blurb: 'Yellow baby Quilt Info', id: 6},
    {picture: <img src='/Photos/Kids scraps quilt.jpg' alt='Quilt' />, title: "Kids scraps Quilt", blurb: 'Kids scraps Quilt Info', id: 7},
    {picture: <img src='/Photos/Judith quilt.jpg' alt='Quilt' />, title: "Judith Quilt", blurb: 'JudithQuilt Info', id: 8},
    {picture: <img src='/Photos/Mum and Dad quilt.jpg' alt='Quilt' />, title: "Mum and Dad Quilt", blurb: 'Mum and Dad Quilt Info', id: 9},
    {picture: <img src='/Photos/Valencia quilt 4.jpg' alt='Quilt' />, title: "Valencia Quilt", blurb: 'Valencia Quilt Info', id: 10},
    {picture: <img src='/Photos/Table runner.jpg' alt='Table runner' />, title: "Table Runner", blurb: 'Table runner Info', id: 11},
    {picture: <img src='/Photos/Coasters.jpg' alt='Coasters' />, title: "Coasters", blurb: 'Coasters Info', id: 12},

]);

    return (
        <div className='photo-card-section'>
            {quilts.map((quilt) => (
        <div className='photo-cards' key={quilt.id}>
            <div style={{margin: 'auto',}} > {quilt.picture}</div>
            <div>
            <h2 style={{borderTop: 'solid 2px #708c82',
                paddingTop: '15px', textAlign: 'center', color: '#275263'
            }}>{quilt.title}</h2>
            </div>
                <div>
            <p style={{marginTop: '10px', textAlign: 'center'}}>{quilt.blurb}</p>
                </div>
        </div>
                ))}
            </div>
    );
}
export default PhotoCardQuilts;