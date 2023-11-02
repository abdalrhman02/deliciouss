import Button from './Button';

function ContactForm() {
    return (
        <div className='contact'>
            <div className="container">
                <div className="title">
                    <h2>Contact Us</h2>
                    <p>We Will Be Happy To Hear Your Opinion About Our Products!</p>
                </div>

                <form>
                    <input type='text' placeholder="Full Name"></input>
                    <input type='text' placeholder="Email"></input>
                    <input type='text' placeholder="Phone Number"></input>
                    <input type='text' placeholder="Your Message"></input>

                    <Button text='Send'/>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;