import PhotoCardInfo from "./PhotoCardsData";

const OnHook = (props) => {
    const {section} = props

    const sectionContent = PhotoCardInfo[section]
    const currentInfo = sectionContent.find(section => section.id === 'CurrentOnHook')
    const recentInfo = sectionContent.find(section => section.id === 'RecentlyCompleted')


        return (
        <div className='current-section'>

                    <div className='current-on-hook' key={currentInfo.id}>

            <h1 style={{textAlign: 'center',}}>Currently On-Hook</h1>

            <div style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '0.75fr 1.25fr',
                paddingTop: '10px',
            }}>
                <div style={{gridColumn: 1, alignSelf: "flex-start",
                    textAlign: "center",}}>
                    <button><div className='PhotoCards-wrapper' style={{margin: 'auto'}}> {currentInfo.picture}</div></button>
                </div>
                <div style={{gridColumn: 2,}}>
                    <h2 style={{paddingBottom: '10px'}}>{currentInfo.title}</h2>
                    <p>{currentInfo.blurb}</p>
                    <p style={{margin: '5px 0'}}>Pattern: {currentInfo.$ref}</p>
            </div>
            </div>
                    </div>

    <div className='current-on-hook' key={recentInfo.id}>
        <h1 style={{textAlign: 'center',}}>Recently Completed</h1>

        <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.25fr',
            paddingTop: '10px',
        }}>
            <div style={{gridColumn: 1, alignSelf: "flex-start",
                textAlign: "center",}}>
                <button><div className='PhotoCards-wrapper' style={{margin: 'auto'}}> {recentInfo.picture}</div></button>
            </div>
            <div style={{gridColumn: 2,}}>
                <h2 style={{paddingBottom: '10px'}}>{recentInfo.title}</h2>
                <p>{recentInfo.blurb}</p>
                <p style={{margin: '5px 0'}}>Pattern: {recentInfo.$ref}</p>
            </div>
        </div>
        </div>
</div>
    );
}
export default OnHook;