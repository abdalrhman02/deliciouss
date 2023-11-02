
import Button from './Button';

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="text">
                    <div className="title">
                        <h2>About Our Honey</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur iste repellendus eligendi atque, similique aut illum error nostrum, soluta sed fugiat veritatis facilis architecto ea molestias in delectus sit!</p>
                    <a href="#">
                        <Button text="Read More" />
                    </a>
                </div>

                <div className='imageContainer'>
                    <img src="/images/honey2.png" alt="!!!pic!!!" />
                </div>
            </div>
        </div>
    )
}

export default About;