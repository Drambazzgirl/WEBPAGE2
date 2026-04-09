import "./Product.css";
import book from "../assets/Book.jpg";
import psalms from "../assets/psalms.png";
import thinking from "../assets/thinking.png";

const products = [
  {
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet magna. Vestibulum ante ipsum.",
    image: book,
  },
  {
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet magna. Vestibulum ante ipsum.",
    image: psalms,
  },
  {
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet magna. Vestibulum ante ipsum.",
    image: thinking,
  },
];

export default function Product() {
  return (
    <section className="products">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-text">
            <span>Description</span>
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </section>
  );
}