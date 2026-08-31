import "./App.css";

function App() {
const downloadUrl =
  "https://github.com/Rogith01/invoice/releases/latest/download/BILLQORA-POS-Setup.exe";

const appUrl = "https://billqora.netlify.app";

return ( <div className="website"> <header className="navbar"> <div className="logo">BILLQORA</div>

    <nav>
      <a href="#features">Features</a>
      <a href="#why-billqora">Why BILLQORA</a>
      <a href="#download">Download</a>
    </nav>
  </header>

  <main>
    <section className="hero">
      <div className="hero-content">
        <p className="badge">SMART POS FOR RETAIL</p>

        <h1>
          Simple & Powerful
          <span> Supermarket POS</span>
        </h1>

        <p className="hero-text">
          Manage billing, cash registers, inventory, customers,
          loyalty points and daily store operations from one simple
          POS system.
        </p>

        <div className="hero-buttons">
<a
  className="primary-button"
  href={downloadUrl}
  download
>
  Download BILLQORA
</a>

          <a
            className="secondary-button"
            href={appUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open BILLQORA
          </a>
        </div>

        <p className="windows-text">
          Windows desktop application • Automatic updates
        </p>
      </div>
    </section>

    <section id="features" className="section">
      <div className="section-heading">
        <p className="small-title">FEATURES</p>

        <h2>Everything your store needs</h2>

        <p>
          BILLQORA brings the essential tools for supermarket and
          retail store management into one easy-to-use system.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🧾</div>
          <h3>Fast Billing</h3>
          <p>
            Create bills quickly with a simple and efficient POS
            billing interface.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📦</div>
          <h3>Inventory</h3>
          <p>
            Manage your products and keep track of your store
            inventory.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Customers</h3>
          <p>
            Maintain customer information and easily find customer
            billing history.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Loyalty Points</h3>
          <p>
            Reward customers with loyalty points based on their
            purchases.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Reports</h3>
          <p>
            Understand your store performance with useful sales
            and business reports.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Automatic Updates</h3>
          <p>
            Receive new BILLQORA features and improvements without
            manually installing every update.
          </p>
        </div>
      </div>
    </section>

    <section id="why-billqora" className="section dark-section">
      <div className="section-heading">
        <p className="small-title">WHY BILLQORA</p>

        <h2>Built for everyday retail billing</h2>

        <p>
          BILLQORA is designed to keep supermarket billing simple,
          fast and easy to manage.
        </p>
      </div>

      <div className="benefits">
        <div>✓ Simple POS interface</div>
        <div>✓ Fast billing workflow</div>
        <div>✓ Customer & loyalty management</div>
        <div>✓ Inventory management</div>
        <div>✓ Sales reports</div>
        <div>✓ Automatic software updates</div>
      </div>
    </section>

    <section id="download" className="download-section">
      <p className="small-title">GET BILLQORA</p>

      <h2>Ready to simplify your store?</h2>

      <p>
        Download BILLQORA for Windows and start managing your
        supermarket with a modern POS system.
      </p>

<a
  className="primary-button"
  href={downloadUrl}
  download
>
  Download BILLQORA for Windows
</a>
    </section>
  </main>

  <footer>
    <div className="logo">BILLQORA</div>

    <p>
      Supermarket POS & Billing Software
    </p>

    <p className="copyright">
      © {new Date().getFullYear()} BILLQORA. All rights reserved.
    </p>
  </footer>
</div>

);
}

export default App;
