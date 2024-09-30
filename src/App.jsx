import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import End from './End';

function App() {
  // Example product data
  const products = [
    {
      title: 'Fancy Product',
      price: '40.00 - 80.00',
      oldPrice: null,
      isSale: false,
      rating: null,
    },
    {
      title: 'Special Item',
      price: '18.00',
      oldPrice: '20.00',
      isSale: true,
      rating: 5,
    },
    {
      title: 'Sale Item',
      price: '25.00',
      oldPrice: '50.00',
      isSale: true,
      rating: null,
    },
    {
      title: 'Popular Item',
      price: '40.00',
      oldPrice: null,
      isSale: false,
      rating: 5,
    },
    {
      title: 'Sale Item',
      price: '25.00',
      oldPrice: '50.00',
      isSale: false,
      rating: 4,
    },
    {
      title: 'Fancy Product',
      price: '120.00 - 280.00',
      oldPrice: null,
      isSale: false,
      rating: 4,
    },
    {
      title: 'Special Item',
      price: '18.00',
      oldPrice: '20.00',
      isSale: true,
      rating: 5,
    },
    {
      title: 'Popular Item',
      price: '40.00',
      oldPrice: null,
      isSale: false,
      rating: 5,
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      <End/>
    </>
  );
}

export default App;

