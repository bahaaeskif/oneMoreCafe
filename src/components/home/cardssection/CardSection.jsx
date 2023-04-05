import test from '../../../assets/plates.jpg'
import { useSelector, useDispatch } from 'react-redux';
import QuantityController from '../../../common/QuantityController';
import CardsSkeleton from '../../../skeleton/CardsSkeleton';
import { minusQuantity, addQuantity } from '../../../store/products';
import { addToCart, removeItem } from '../../../store/cart';



function CardsSection({ kind, showHundel }) {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { category, loading, listItems } = useSelector((state) => state.products);

    const products = listItems.filter((x) => {
        return x.category === kind;
    })
    const dispatch = useDispatch();



    const hundelIncrement = (product) => {
        dispatch(addQuantity(product));
        dispatch(addToCart(product))
    }

    const hundelDecrement = (product) => {
        dispatch(minusQuantity(product))

        dispatch(removeItem(product))
    }



    return (
        <div className=''>
            {loading ? null : <div className={`flex justify-between items-center p-3 border-b-[2px] ${darkMode ? 'border-borderDark text-textDark' : 'border-borderLight text-textLight'} border-dashed  font-body mb-3`}>
                <div className="font-[500]">{kind}</div>
                <div className={`${darkMode ? 'text-subTextDark' : 'text-subTextLight'} capitalize flex items-center `}>
                    <div className="flex justify-center items-center  ml-1 pb-[3px]">عرض المزيد</div>
                    <div><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width=".75em" height=".75em" fill="currentColor" aria-hidden="true" className="flex items-center"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></div>
                </div>
            </div>}

            <div className="body flex flex-wrap items-center">
                {loading ? <CardsSkeleton /> : products.map((product) => {
                    return <div className="cols px-2 basis-1/2 md:basis-1/3 lg:basis-1/6 cursor-pointer" key={product.id}>
                        <div className="card w-full relative">
                            <div className="rounded-lg overflow-hidden mb-7 ">
                                <img onClick={() => showHundel(product)} src={product.thumbnail} alt="" className="object-cover object-center h-[140px] w-full" />
                                <div className={`absolute left-[50%] 
                                 rounded-lg 
                                 translate-x-[-50%] translate-y-[-50%] shadow-xl
                                 ${darkMode ? 'text-subTextDark bg-tertiaryDark' : 'text-subTextLight bg-white'}
                                 `}>
                                    <QuantityController darkMode={darkMode} quantity={product.quantity} hundelIncrement={() => { hundelIncrement(product) }} hundelDecrement={() => { hundelDecrement(product) }} />
                                </div>
                            </div>

                            <div className={`${darkMode ? 'text-subTextDark' : 'text-subTextLight'} mb-8 px-4 `}>
                                <div className="capitalize text-sm mb-1">{product.title}</div>
                                <div className="flex">
                                    <span className="font-bold uppercase text-xs flex flex-row-reverse">
                                        <span className='mr-1'>{product.price}</span><span>sp</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>

        </div >
    );
}

export default CardsSection;