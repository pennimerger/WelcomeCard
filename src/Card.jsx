import welcome from './assets/react.svg'

function Card() {
    return (
        <div className="card">
            <img src={welcome} alt="Welcome" className="card-image"></img>
            <h2 className='card-title'>Welcome</h2>
            <p className='card-text'>The react community is happy to have you with us.</p>
        </div>
    );
}

export default Card