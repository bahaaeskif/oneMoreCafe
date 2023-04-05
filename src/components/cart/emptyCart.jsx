import noProducts from '../../assets/noProduct.svg'

import { useSelector } from 'react-redux';

function EmptyCart() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;
    return (

        <div className={`w-full flex items-center justify-center flex-col width-full`}>
            <div>
                <img src={noProducts} alt="emptyCart pic" className='w-[450px] mb-10' />
            </div>
            <div className={`font-body text-2xl ${darkMode ? 'text-textDark' : 'text-textLight'} `}>
                لم تتم اضافة منتجات الى السلة حتى الان
            </div>
        </div>
    );
}

export default EmptyCart;