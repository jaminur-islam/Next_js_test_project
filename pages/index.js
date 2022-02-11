import Nav from "../components/Home/Nav/Nav";
import Products from "../components/Home/Products/Products";

export default function Home({ data }) {
  return (
    <div>
      <Nav> </Nav>
      <Products data={data}> </Products>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/fakedata");
  const data = await res.json();
  return {
    props: { data },
  };
}
