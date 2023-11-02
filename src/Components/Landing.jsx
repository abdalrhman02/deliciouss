
import Button from './Button';

function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="info">
                    <h1>You Can Get Pure Honey Here!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, odio ab commodi amet veniam quidem distinctio quod voluptates.</p>
                    <a href="/deliciouss/src/Pages/Contact.js">
                        <Button text="Contact Us"/>
                    </a>
                </div>

                <div className="imgContainer">
                    <img src="/images/honey1.png" alt="!!!pic!!!" />
                </div>
            </div>
        </div>
    )
}

export default Landing;