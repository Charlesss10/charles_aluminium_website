import { useParams } from 'react-router-dom';
import ProductInfoData from '../products/ProductInfoData';
// @ts-ignore
import feltVideo from '../assets/feltVideo.mp4';
import feltVideoPoster from '../assets/feltVideoPoster.png';
import {
  PageHeaderOuterContainer,
  PageHeader,
  BackgroundContainer,
  ProductPageContainer,
  ProductInfo,
  ProductDescription,
  ProductImageContainer,
  ProductImage,
  OtherProductsGrid,
  OtherProductsItem,
  CTASection,
  CTASectionLink,
  OtherProductLink,
  CharlesFeltVideo
} from './pages-styles/ProductDataStyles';

const ProductData = () => {
  const { productName } = useParams();
  const product = ProductInfoData.find((product) => product.name === productName); // Find the specific product

  if (!product) {
    return (
      <><PageHeaderOuterContainer>
        <a href={`/products`} style={{ textDecoration: 'none' }}>
          <PageHeader>OUR PRODUCTS</PageHeader>
        </a>
      </PageHeaderOuterContainer><p>Product not found!</p></>
    );
  }

  const otherProducts = ProductInfoData.filter((p) => p.name !== product.name); // Filter out the current product from the "Other Products" list

  return (
    <><PageHeaderOuterContainer>
      <PageHeader>{product.name}</PageHeader>
    </PageHeaderOuterContainer>
      <BackgroundContainer>
        <ProductPageContainer>
          <ProductInfo>
            <ProductDescription>
              <h2>DESCRIPTION</h2>
              <p>{product.description}</p>
            </ProductDescription>

            <ProductImageContainer>
              <ProductImage src={product.Image} alt={product.name} />
            </ProductImageContainer>

            {product.name === 'Charles Roof Felt Membrane' && (
              <CharlesFeltVideo>
                <video controls width="100%" poster={feltVideoPoster}>
                  <source src={feltVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CharlesFeltVideo>
            )}
          </ProductInfo>

          <h2>OTHER PRODUCTS</h2>
          <OtherProductsGrid>
            {otherProducts.map(otherProduct => (
              <OtherProductLink key={otherProduct.id} href={`/products/${otherProduct.name}`}>
                <OtherProductsItem>
                  <img src={otherProduct.Image} alt={otherProduct.name} />
                  <h3>{otherProduct.name}</h3>
                </OtherProductsItem>
              </OtherProductLink>
            ))}
          </OtherProductsGrid>

          <CTASection>
            <h3>For more information on how we can serve you, feel free to get in touch with us.</h3>
            <CTASectionLink href="/contact">Contact Us</CTASectionLink>
          </CTASection>

        </ProductPageContainer >
      </BackgroundContainer>
    </>
  );
};

export default ProductData;
