import './CartWidget.css';
import beer_005 from './assets/Whiskey-icon.png'

const CartWidget = ()=>{
    return(
        <div className='CartWidget'>
            <div className='CartWidget--cont-img'>
                <img src={beer_005} className='CartWidget--img' />
            </div>
            <p className='CartWidget--p'>0</p>
        </div>
    );
};

export default CartWidget;