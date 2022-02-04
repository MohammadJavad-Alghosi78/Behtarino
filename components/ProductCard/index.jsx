// * node_modules
import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

// * UI Components
import { Typography, Button } from "theme/UI";

// * Styles
import {
  Card,
  ImageWRapper,
  DetailsWrapper,
  Header,
  DescriptionWrapper,
  Footer,
} from "./style";
import colors from "theme/assets/colors";

// * Component
const ProductCard = ({ title, rate, category, description, image, price }) => {
  return (
    <Card>
      <ImageWRapper>
        <Image src={image} alt={title} width={200} height={200} />
      </ImageWRapper>
      <DetailsWrapper>
        <Header>
          <Typography variant="title" color="black">
            {title}
          </Typography>
          <StarRatings
            numberOfStars={5}
            rating={rate.rate}
            starDimension="16px"
            starSpacing="0"
            starRatedColor={colors.redPurple}
          />
        </Header>
        <Typography
          variant="large"
          color={colors.red}
          display="block"
          className="mt-16"
        >
          ${price}
        </Typography>
        <DescriptionWrapper>
          <Typography variant="large" color="black">
            DESCRIPTION
          </Typography>
          <Typography variant="medium" color="gray" className="mt-16">
            {description}
          </Typography>
        </DescriptionWrapper>
        <Footer>
          <Button variant="primary" textColor="white">
            <Image
              src="/svg/shopping_cart_black_24dp.svg"
              alt="basket icon"
              width={16}
              height={16}
            />
            <Typography variant="medium" color="white" className="ml-8">
              ADD TO BASKET
            </Typography>
          </Button>
        </Footer>
      </DetailsWrapper>
    </Card>
  );
};

// * Export Component
export default ProductCard;
