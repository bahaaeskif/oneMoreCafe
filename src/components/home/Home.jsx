import Category from "../../common/category";
import CardsSection from "./cardssection/CardSection";
import OrderFixed from "./orderfixed/OrderFixed";
import ProductDatile from "./productDatile/ProductDatile";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/ui";
import { useState } from "react";
import { addToProductDatile } from "../../store/productDatiles";

function Home() {
    const dispatch = useDispatch();

    const { category, listItems, loading } = useSelector((state) => state.products);

    const { datileShow } = useSelector((state) => state.ui.ui)

    const { productDatile } = useSelector((state) => state.productDatile);


    const showHundel = (product = {}) => {

        dispatch(actions.showHundel());

        dispatch(addToProductDatile(product));

    }

    return (
        <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto pt-14 pb-[70px] px-3">
            <Category />
            <div className="pt-[80px]"> {category.map((kind, index) => {
                return <CardsSection kind={kind} key={index} showHundel={showHundel} />
            })}</div>
            <OrderFixed />
            {<ProductDatile datileShow={datileShow} showHundel={showHundel} darkMode={false} productDatiles={productDatile} />}
        </div>
    );
}

export default Home;