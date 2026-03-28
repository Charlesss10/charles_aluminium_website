import ProductInfoData from '../products/ProductInfoData';
import {
    PageHeaderOuterContainer,
    PageHeader,
    BackgroundContainer,
    ProductPageContainer,
    Introduction,
    ProductGrid,
    ProductItem,
    ProductLink,
    CTASection,
    CTASectionLink
} from './pages-styles/ProductsStyles';

const ProductPage = () => {
    return (
        <><PageHeaderOuterContainer>
            <PageHeader>OUR PRODUCTS</PageHeader>
        </PageHeaderOuterContainer>
            <BackgroundContainer>
                <ProductPageContainer>
                    <Introduction>
                        At our company, we strive to provide the highest quality products to meet your needs.
                        Our commitment to excellence ensures you receive the best value for your investment.
                    </Introduction>

                    <ProductGrid>
                        {ProductInfoData.map(product => (
                            <ProductLink key={product.id} href={`/products/${product.name}`}>
                                <ProductItem>
                                    <img src={product.Image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                </ProductItem>
                            </ProductLink>
                        ))}
                    </ProductGrid>

                    <CTASection>
                        <h3>We don’t just provide you with quality products, but also quality services, including installation and post-installation support.</h3>
                        <CTASectionLink href="/services">Learn More About Our Services</CTASectionLink>
                    </CTASection>
                </ProductPageContainer>
            </BackgroundContainer>
        </>
    );
};

export default ProductPage;