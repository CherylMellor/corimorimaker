
const OnHook = () => {

    return (
        <div className='current-section'>
        <div className='current-on-hook'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                paddingRight: '10px',
            }}>
                <h1>Currently On-Hook</h1>
                <br></br>
            <h2>Crochet Schnauser</h2>
                <br></br>
            <p>I thought this was so cute and had to give it a go.</p>
                <p>This will be a thank you gift for a #BikeMS donation</p>
            <p>The free pattern I found on the <a href="https://www.projectarian.com/" >Projectarian</a> website here: <a href="https://www.projectarian.com/2017/01/09/amigurumi-dog-fur-free-crochet/">Schnauser Pattern</a></p>
            </div>
                <img src='/Photos/Crochet/Schnauser.jpg' alt='Crochet Schnauser' />
        </div>

    <div className='current-on-hook'>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '10px',
        }}>
            <h1>Recently Completed</h1>
            <br></br>
            <h2>Blob Monster</h2>
            <br></br>
            <p>I had a comission to make a Blob Monster in team colors: Blue and Yellow </p>
            <p>This will be a thank you gift for a #BikeMS donation</p>
            <p>The pattern made by <a href="https://craftyintentions.com/">Crafty Intentions</a>, I purchased from here: <a href="https://www.ravelry.com/patterns/library/blob-monster/">Blob Monster</a></p>
        </div>
        <img src='/Photos/Crochet/Blob monster blue with yellow horns.jpg' alt='Crochet Blob Monster' />
    </div>
</div>
    );
}
export default OnHook;