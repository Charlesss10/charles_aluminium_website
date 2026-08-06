import { useParams } from 'react-router-dom';
import ProductInfoData from '../products/ProductInfoData';

// Imports specific to Charles Felt Membrane
// @ts-ignore
import feltVideo from '../assets/feltVideo.mp4';
import feltVideo_2 from '../assets/feltVideo_2.mp4';
import feltVideoPoster from '../assets/feltVideoPoster.png';
import feltPosterImage from '../assets/feltPoster.png';

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
  CharlesFeltVideo,
  FeltCustomLayout // New styled component for this specific layout
} from './pages-styles/ProductDataStyles';

const ProductData = () => {
  const { productName } = useParams();
  const product = ProductInfoData.find((p) => p.name === productName);

  if (!product) {
    return (
      <>
        <PageHeaderOuterContainer>
          <a href="/products" style={{ textDecoration: 'none' }}>
            <PageHeader>OUR PRODUCTS</PageHeader>
          </a>
        </PageHeaderOuterContainer>
        <p>Product not found!</p>
      </>
    );
  }

  const otherProducts = ProductInfoData.filter((p) => p.name !== product.name);
  const isFeltMembrane = product.name === 'Charles Felt Membrane';

  return (
    <>
      <PageHeaderOuterContainer>
        <PageHeader>{product.name}</PageHeader>
      </PageHeaderOuterContainer>

      <BackgroundContainer>
        <ProductPageContainer>

          {/* CUSTOM LAYOUT FOR FELT MEMBRANE */}
          {isFeltMembrane ? (
            <FeltCustomLayout>
              {/* LEFT COLUMN: DESCRIPTION & BOTH VIDEOS */}
              <div className="left-column">
                <ProductDescription>
                  <h2>DESCRIPTION</h2>
                  <p>{product.description}</p>
                </ProductDescription>

                {/* Video 1 with Caption */}
                <div className="video-card">
                  <CharlesFeltVideo className="felt-video">
                    <video controls width="100%" poster={feltVideoPoster}>
                      <source src={feltVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </CharlesFeltVideo>
                  <p className="video-caption">Charlestech Bituminious felt for roofs</p>
                </div>

                {/* Video 2 with Caption (Swapped here) */}
                <div className="video-card">
                  <CharlesFeltVideo className="felt-video">
                    <video controls width="100%" poster={feltVideoPoster}>
                      <source src={feltVideo_2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </CharlesFeltVideo>
                  <p className="video-caption">Charlestech Bituminious felt for floors/decks/pathways</p>
                </div>
              </div>

              {/* RIGHT COLUMN: TALL POSTER */}
              <div className="right-column">
                <img
                  src={feltPosterImage}
                  alt="Charles Felt Poster"
                  className="tall-poster"
                />
              </div>

              {/* FULL-WIDTH FELT PICTURE (Swapped to bottom) */}
              <div className="full-width-image-container">
                <ProductImage src={product.Image} alt={product.name} />
              </div>
            </FeltCustomLayout>
          ) : (
            /* DEFAULT LAYOUT FOR ALL OTHER PRODUCTS */
            <ProductInfo>
              <ProductDescription>
                <h2>DESCRIPTION</h2>
                <p>{product.description}</p>
              </ProductDescription>

              <ProductImageContainer>
                <ProductImage src={product.Image} alt={product.name} />
              </ProductImageContainer>
            </ProductInfo>
          )}

          {/* OTHER PRODUCTS SECTION */}
          <h2>OTHER PRODUCTS</h2>
          <OtherProductsGrid>
            {otherProducts.map((otherProduct) => (
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

        </ProductPageContainer>
      </BackgroundContainer>
    </>
  );
};

export default ProductData;