
const OnHook = () => {

    return (
        <div className='current-section'>
        <div className='current-on-hook'>
            <h1>Currently On-Hook</h1>

            <div style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '0.75fr 1.25fr',
                paddingTop: '10px',
            }}>
                <div style={{gridColumn: 1, alignSelf: "flex-start",
                    textAlign: "center",}}>
                    <img src='/Photos/Crochet/Schnauser.jpg' alt='Crochet Schnauser'/>
                </div>
                <div style={{gridColumn: 2,}}>
            <h2>Crochet Schnauser</h2>
                <br></br>
            <p>I thought this was so cute and had to give it a go.</p>
                <p>This will be a thank you gift for a #BikeMS donation</p>
            <p>The free pattern I found on the <a href="https://www.projectarian.com/" >Projectarian</a> website here: <a href="https://www.projectarian.com/2017/01/09/amigurumi-dog-fur-free-crochet/">Schnauser Pattern</a></p>
            </div>
            </div>
        </div>

    <div className='current-on-hook'>
        <h1>Recently Completed</h1>

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
                <h2>Blob Monster</h2>
                <br></br>
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