import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard';
import Payment from './Payment';
import PaymentRequest from './paymentrequest';
import EmptyCart from './emptyCart';



function Cart() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { cartItems } = useSelector((state) => state.cart)
    return (
        <div className='mt-14 px-3 py-8 sm: max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto flex items-start flex-col md:flex-row lg:flex-row gap-6'>
            {cartItems.length > 0 ? <>
                <div className='basis-[55%] w-full'>
                    {cartItems.map((item) => {
                        return <CartCard darkMode={darkMode} item={item} key={item.id} />
                    })}
                </div>
                <div className='flex-1 w-full'>
                    <Payment darkMode={darkMode} />
                    <PaymentRequest darkMode={darkMode} />
                </div>
            </> : <EmptyCart />}
        </div>

    );
}

export default Cart;