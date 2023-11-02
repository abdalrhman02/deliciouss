import ContactForm from '../Components/Contact';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ContactPage() {
    return (
        <>
            <Header style={{background: '#542209'}}/>
            <ContactForm />
            <Footer style={{background: '#542209'}}/>
        </>
    )
}

export default ContactPage;