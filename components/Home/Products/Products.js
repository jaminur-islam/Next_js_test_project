import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import React from "react";
import { MyBox } from "../Style_component/style";

const Products = ({ data, data2 }) => {
  const router = useRouter();
  const HandleDetails = (id) => {
    router.push(`/${id}`);
  };

  const arr = [];
  const addToCart = (id) => {
    arr.push(id);
    console.log(arr);
  };

  return (
    <Box>
      <Grid container>
        {data?.length > 0 ? (
          data.map((dat) => {
            return (
              <Grid
                key={dat._id}
                item
                md={4}
                onClick={() => HandleDetails(dat._id)}
              >
                <MyBox>
                  <img src={dat.url} alt="" />
                  <h4> {dat.title}</h4>
                  <button onClick={() => HandleDetails(dat._id)}>
                    Details
                  </button>
                  <button
                    onClick={() => addToCart(dat._id)}
                    style={{ marginLeft: "50px" }}
                  >
                    Add to cart
                  </button>
                </MyBox>
              </Grid>
            );
          })
        ) : (
          <Grid key={data2._id} item md={4}>
            <MyBox>
              <img src={data2.url} alt="" />
              <h4> {data2.title}</h4>
              <button onClick={() => HandleDetails(dat._id)}>Details</button>
              <button
                onClick={() => addToCart(data2._id)}
                style={{ marginLeft: "50px" }}
              >
                Add to cart
              </button>
            </MyBox>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Products;
