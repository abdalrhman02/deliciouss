
import Button from './Button';

function Footer({ style }) {
    return (
        <footer style={style}>
            <div className="container">
                <div className='Fabout'>
                    <h3>About</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dignissimos maiores id labore rem asperiores, explicabo iure provident.</p>
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>

                <div className='address'>
                    <h3>Address</h3>
                    <ul>
                        <li>Healing Center, oo W Street</li>
                        <li>(+71) 8522369417</li>
                        <li>demo@gmail.com</li>
                    </ul>
                </div>

                <div className='links'>
                    <h3>Links</h3>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/deliciouss/src/Pages/About.js"><li>About</li></a>
                        <a href="/deliciouss/src/Pages/Shop.js"><li>Shop</li></a>
                        <a href="/deliciouss/src/Pages/Contact.js"><li>Contact us</li></a>
                    </ul>
                </div>

                <div className='newsletter'>
                    <h3>Newsletter</h3>
                    <form>
                        <input type="text" placeholder='Your Name'></input>
                        <input type="text" placeholder='Your Email'></input>
                        <input type="submit" className='mainBtn' />
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;