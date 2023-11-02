
import Button from './Button';

function ShopSection() {
    return (
        <div className="ShopSection">
            <div className="container">
                <div>
                    <h2 className='title'>Quality Of Honey For Sale</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae alias necessitatibus ipsam similique. Facilis atque deserunt laborum obcaecati a minus cum perspiciatis illum praesentium. Sed perspiciatis aperiam voluptatum distinctio officiis?</p>
                </div>

                <div className="productsImages">
                    <div className="productImg">
                        <img src="/images/honey2.png" alt="pr" style={{width: '6em'}}/>
                    </div>

                    <div className="productImg">
                        <img src="/images/honey3.png" alt="pr" />
                    </div>
                    
                    <div className="productImg">
                        <img src="/images/honey4.png" alt="pr" />
                    </div>

                    <div className="productImg">
                        <img src="/images/honey5.png" alt="pr" />
                    </div>

                    <div className="productImg">
                        <img src="/images/honey6.png" alt="pr" />
                    </div>
                </div>

                <Button text="SEE MORE"/>
            </div>
        </div>
    )
}

export default ShopSection;