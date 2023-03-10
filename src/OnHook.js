import PhotoCardInfo from "./PhotoCardsData";

const OnHook = (props) => {
    const {section} = props

    const sectionContent = PhotoCardInfo[section]
    const info = sectionContent.find(section => section.id === 'CurrentOnHook')

    return (
        <div className='current-section'>

                    <div className='current-on-hook' key={info.id}>

            <h1 style={{textAlign: 'center',}}>Currently On-Hook</h1>

            <div style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '0.75fr 1.25fr',
                paddingTop: '10px',
            }}>
                <div style={{gridColumn: 1, alignSelf: "flex-start",
                    textAlign: "center",}}>
                    <button><div className='PhotoCards-wrapper' style={{margin: 'auto'}}> {info.picture}</div></button>
                </div>
                <div style={{gridColumn: 2,}}>
                    <h2 style={{paddingBottom: '10px'}}>{info.title}</h2>
                    <p>{info.blurb}</p>
                    <p style={{margin: '5px 0'}}>Pattern: {info.$ref}</p>
            </div>
            </div>
                    </div>

    <div className='current-on-hook'>
        <h1 style={{textAlign: 'center',}}>Recently Completed</h1>

        <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.25fr',
            paddingTop: '10px',
        }}>
            <div style={{gridColumn: 1,
                alignSelf: "flex-start",
                textAlign: "center",
            }}>
                <img src='/Photos/Crochet/Blob monster blue with yellow horns.jpg' alt='Crochet Blob Monster' />
            </div> <div style={{gridColumn: 2,}}>
                <h2  style={{paddingBottom: '10px'}}>Blob Monster</h2>
            <p>A commission for a Blob Monster in team colors: Blue and Yellow </p>
            <p>This will be a thank you gift for a #BikeMS donation</p>
            <p>The pattern made by Megan Lapp from <a href="https://craftyintentions.com/">Crafty Intentions</a></p> <p>Purchased from here: <a href="https://www.ravelry.com/patterns/library/blob-monster/">Blob Monster</a></p>
    </div>
            </div>
        </div>
</div>
    );
}
export default OnHook;