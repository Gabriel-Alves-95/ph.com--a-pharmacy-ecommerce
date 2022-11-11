import './home.css';
import productList from '../../products';
import ProductCard from '../../components/product-card/product-card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Home() {

    return (
        <>
            <Header/>

            <div className="container catalog-container">

                <ProductCard product={productList[1]}/>
                <ProductCard product={productList[2]}/>
                <ProductCard product={productList[3]}/>
                <ProductCard product={productList[4]}/>
                <ProductCard product={productList[5]}/>
                {/* <ProductCard product={productList[3]}/>  
                <ProductCard product={productList[1]}/>
                <ProductCard product={productList[2]}/>
                <ProductCard product={productList[3]}/>
                <ProductCard product={productList[1]}/>
                <ProductCard product={productList[2]}/>
                <ProductCard product={productList[3]}/>
                <ProductCard product={productList[1]}/>
                <ProductCard product={productList[2]}/>
                <ProductCard product={productList[3]}/> */}

            </div>                     

            <Footer/>                     

        </>
    );

};

export default Home;