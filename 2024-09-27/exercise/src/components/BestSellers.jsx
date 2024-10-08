import { CircularProgress, Box } from '@mui/material';

import useBestSellers from "../hooks/useBestSellers";
import BestSellerProduct from "./BestSellerProduct";

export default function BestSellers() {
  const { bestSellers, isLoading } = useBestSellers();

  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        bestSellers.map((bestSeller) => (
          <BestSellerProduct 
            key={bestSeller.asin}
            productTitle={bestSeller.product_title}
            productPrice={bestSeller.product_price}
            productPhoto={bestSeller.product_photo}
          />
        ))
      )}
    </div>
  )

}
