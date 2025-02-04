import React from 'react';
import './Stock.css';

function Stock() {
  return (
    <div className="stock-container">
      <h1 className="stock-title">Car Collection</h1>
      <div className="scroll-container">
        <div className="card-grid">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h2>Audi A4</h2>
                {/* Placeholder for car image */}
              </div>
              <div className="card-back">
                <p>Discover the elegance and power of the Audi A4. Perfectly designed for luxury.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h2>Audi Q7</h2>
                {/* Placeholder for car image */}
              </div>
              <div className="card-back">
                <p>The Audi Q7 combines spaciousness with dynamic performance for all terrains.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h2>Audi R8</h2>
                {/* Placeholder for car image */}
              </div>
              <div className="card-back">
                <p>Experience the thrill of the Audi R8—built for speed and precision.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h2>Audi TT</h2>
                {/* Placeholder for car image */}
              </div>
              <div className="card-back">
                <p>The Audi TT is a symbol of sporty design and innovative technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;
