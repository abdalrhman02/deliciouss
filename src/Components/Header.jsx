
function Header({ style }) {
    return (
        <div className="header" style={style}>
            <div className="container">
                <div className="logo">
                    <h1>Deliciousss</h1>
                </div>

                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/deliciouss/src/Pages/About.js "><li>About</li></a>
                    <a href="/deliciouss/src/Pages/Shop.js"><li>Shop</li></a>
                    <a href="/deliciouss/src/Pages/Contact.js"><li>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Header;