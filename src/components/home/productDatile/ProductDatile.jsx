import QuantityController from "../../../common/QuantityController";
import close from '../../../assets/close.png'
import { useSelector, useDispatch } from 'react-redux';
import { minusQuantity, addQuantity } from '../../../store/products';
import { addToCart, removeItem } from '../../../store/cart';
import { addQuantityDatile, minusQuantityDatile } from "../../../store/productDatiles";


function ProductDatile({ datileShow, showHundel, darkMode, productDatiles }) {
    const dispatch = useDispatch();


    const hundelIncrement = (productDatiles) => {
        dispatch(addQuantity(productDatiles));
        dispatch(addToCart(productDatiles));
        dispatch(addQuantityDatile());
    }

    const hundelDecrement = (productDatiles) => {
        dispatch(minusQuantity(productDatiles))
        dispatch(removeItem(productDatiles))
        dispatch(minusQuantityDatile());
    }



    const totalPrice = productDatiles?.price * productDatiles?.quantity


    return (
        <div className={`${datileShow ? `flex` : `hidden`}  fixed top-0 left-0 w-full s bg-[#00000080] z-[99999]  items-center justify-center font-body h-full transition-all  `}>
            <div className={` scale-up-center p-6 bg-tertiaryLight rounded-lg w-[345px] sm:w-[560px] md:w-[720px] lg:w-[1100px]  relative transition-all`}>
                <div className={`flex flex-col md:flex-row lg:flex-row`}>
                    <div className={`lg:max-h-[310px] md:max-h-[370px] w-full rounded overflow-hidden basis-[47.7%] `}>
                        <img src={productDatiles?.thumbnail} alt="" className={` lg:h-full h-[150px] md:h-full  w-full  object-cover`} />
                    </div>
                    <div className={`basis-[53.3%] p-4 `}>
                        <div className={``}>
                            <div>
                                <div className={`text-textLight text-base md:text-2xl lg:text-2xl mb-4`}>{productDatiles?.title}</div>
                                <div className={` text-subTextLight font-bold uppercase
                                text-sm
                               md:text-xl
                               lg:text-xl
                            `}>{productDatiles?.price} sp</div>

                            </div>
                            <div className={`lg:py-4 md:py-4 py-2 mt-4 md:mt-16 lg:mt-16 border-y-2 border-x-borderLight border-dashed flex items-center`}>
                                <div className={` ml-3`}>الكمية</div>
                                <QuantityController darkMode={darkMode} quantity={productDatiles?.quantity}
                                    hundelIncrement={() => { hundelIncrement(productDatiles) }}
                                    hundelDecrement={() => { hundelDecrement(productDatiles) }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <span className={` absolute top-[9px] right-[7px] cursor-pointer`} onClick={() => showHundel()}>
                    <img src={close} alt="" className={`w-full`} />
                </span>
                <div className={` border-[#ddd] mt-4 md:mt-6 lg:mt-6 
                 border-solid border-2 overflow-hidden w-fit rounded-lg bg-[#ddd] max-w-[275px]`}>
                    <div className={`flex m-3 `}>
                        <div className="font-bold">{productDatiles?.title}</div>
                        <div className={` fon bold flex text-center flex-col items-center justify-center`}>
                            <span className={`text-[13px] font-bold text-subTextLight w-[67px]`}>
                                السعر الأجمالي
                            </span>
                            {totalPrice} SP
                        </div>
                    </div>
                    <div className={` bg-tertiaryLight p-3`}>
                        <span className={`ml-2`}>الكمية</span>
                        <span>{productDatiles?.quantity}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDatile;