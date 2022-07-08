import {useState} from "react";

const PhotoCardQuilts = () => {

const [quilts, setQuilts] = useState([
    {picture: <img src='/Photos/Baby MS quilt.jpg' alt='Quilt' height={"auto"} width={"250px"} />, title: "Baby MS Quilt", blurb: 'Baby MS Quilt Info', id: 1},
    {picture: <img src='/Photos/GIlls wedding quilt.jpg' alt='Quilt' height={"auto"} width={"250px"} />, title: "Gills Quilt", blurb: 'Gills Quilt Info', id: 2},
    {picture: <img src='/Photos/Andys quilt 6.jpg' alt='Quilt' height={'auto'} width={"250px"} />, title: "Andys Quilt", blurb: 'Andys quilt Quilt Info', id: 3},
    {picture: <img src='/Photos/Living with MS quilt.jpg' alt='Quilt' height={"auto"} width={"250px"} />, title: "Living with MS Quilt", blurb: 'Living with MS Quilt Info', id: 4},
    {picture: <img src='/Photos/MS quilt.jpg' alt='Quilt' height={"250px"} width={"auto"} />, title: "MS Quilt", blurb: 'MS Quilt Info', id: 5},
    {picture: <img src='/Photos/Yellow baby quilt.jpg' alt='Quilt' height={"auto"} width={"250px"} />, title: "Yellow baby Quilt", blurb: 'Yellow baby Quilt Info', id: 6},
    {picture: <img src='/Photos/Kids scraps quilt.jpg' alt='Quilt' height={"auto"} width={"250px"} />, title: "Kids scraps Quilt", blurb: 'Kids scraps Quilt Info', id: 7},
    {picture: <img src='/Photos/Table runner.jpg' alt='Table runner' height={"auto"} width={"250px"} />, title: "Table Runner", blurb: 'Table runner Info', id: 8},
    {picture: <img src='/Photos/Coasters.jpg' alt='Coasters' height={"auto"} width={"250px"} />, title: "Coasters", blurb: 'Coasters Info', id: 9},

]);

    return (
        <div className='photo-card-section'>
            {quilts.map((quilt) => (
        <div className='photo-cards' key={quilt.id}>
            <div> {quilt.picture}</div>
            <div>
            <h2>{quilt.title}</h2>
            </div>
                <div>
            <p>{quilt.blurb}</p>
                </div>
        </div>
                ))}
            </div>
    );
}
export default PhotoCardQuilts;