import CarouselPage from "./carousel-slide";
import FooterPage from "../footer/footer";
import  {HomePageProducts}  from "../../containers/products/product-data";


export const Home = () => {
    
    return (
        <div className='home-body page-container'>
            <CarouselPage />
            <HomePageProducts />
            <FooterPage/>
        </div>
    )
    
}
