const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          These shoes often feature advanced technologies for comfort,
          performance, and durability, catering to various activities like
          running, basketball, or casual wear. Additionally, brand shoes are a
          statement of style and status, often seen as a reflection of one's
          personal taste and lifestyle.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Categories</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
        </div>

        <div className="brand-icons">
          <img src="/images/amazon_logo.png" alt="Amazon-logo" />
          <img src="/images/flipcart_logo.png" alt="Flipcart-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img className="shoe-image" src="/images/shoe.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default HeroSection;
