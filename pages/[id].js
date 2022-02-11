import React from "react";
import Products from "../components/Home/Products/Products";
export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/fakedata");
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { id: post._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/fakedata/${params.id}`);
  const post = await res.json();
  return { props: { post } };
}

const Details = ({ post }) => {
  return (
    <div>
      <h1> this is delete page </h1>
      <Products data2={post}></Products>
    </div>
  );
};

export default Details;
