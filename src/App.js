
import "./App.css";

function App() {
  const downloadUrl =
    "https://github.com/Rogith01/invoice/releases/latest/download/BILLQORA-POS-Setup.exe";

  const email = "akrogith777@gmail.com";
  const whatsappNumber = "9629314051";

  return (
    <div className="website">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="logo">
          BILLQORA
        </div>

        <nav>
          <a href="#features">
            Features
          </a>

          <a href="#demo">
            Demo
          </a>

          <a href="#why-billqora">
            Why BILLQORA
          </a>

          <a href="#contact">
            Contact
          </a>

          <a
            href="#download"
            className="nav-download"
          >
            Download
          </a>
        </nav>

      </header>


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          {/* Ambient background glows */}

          <div
            className="hero-glow hero-glow-one"
          />

          <div
            className="hero-glow hero-glow-two"
          />


          <div className="hero-content">

            {/* =================================================
                STATUS
            ================================================= */}

            <div className="status-badge">

              <span className="status-dot" />

              SMART POS FOR RETAIL

            </div>


            {/* =================================================
                SEO HERO TITLE
            ================================================= */}

            <h1>
              BILLQORA
              <span>
                Supermarket POS & Billing Software
              </span>
            </h1>


            {/* =================================================
                SEO HERO DESCRIPTION
            ================================================= */}

            <p className="hero-text">
              BILLQORA is a supermarket POS and billing software
              designed for retail stores. Manage billing, inventory,
              customers, loyalty points, cash registers, invoices
              and sales reports from one simple and powerful POS system.
            </p>


            {/* =================================================
                HERO BUTTONS
            ================================================= */}

            <div className="hero-buttons">

              <a
                className="primary-button"
                href={downloadUrl}
                download
              >
                Download BILLQORA

                <span>
                  ↓
                </span>

              </a>


              <a
                className="primary-button"
                href={`mailto:${email}?subject=BILLQORA%20Store%20Activation`}
              >
                Request Store ID

                <span>
                  ?
                </span>

              </a>

            </div>


            {/* =================================================
                WINDOWS INFORMATION
            ================================================= */}

            <p className="windows-text">
              Windows desktop application • Automatic updates
            </p>


            {/* =================================================
                PRODUCT PREVIEW
            ================================================= */}

            <div className="product-preview">

              <div className="product-preview-glow" />

              <div className="product-preview-frame">

                {/* Fake application window header */}

                <div className="preview-topbar">

                  <div className="preview-dots">

                    <span />
                    <span />
                    <span />

                  </div>

                  <span className="preview-label">
                    BILLQORA POS
                  </span>

                </div>


                {/* =================================================
                    BILLQORA SCREENSHOT
                ================================================= */}

                <img
                  src="/image1.png"
                  alt="BILLQORA supermarket POS billing software dashboard"
                  className="product-preview-image"
                />

              </div>

            </div>


            {/* =================================================
                ACCESS / ACTIVATION CARD
            ================================================= */}

            <div className="access-card">

              <div className="access-icon">
                🔐
              </div>


              <div className="access-content">

                <div className="access-title-row">

                  <h3>
                    Need a Store ID?
                  </h3>

                  <span className="activation-badge">
                    Activation Required
                  </span>

                </div>


                <p>
                  Downloading BILLQORA is free, but a valid
                  <strong>
                    {" "}Store ID and account activation
                  </strong>
                  {" "}are required to use the POS system.
                </p>


                <p className="access-subtext">
                  Contact us to create your store account,
                  receive your Store ID and get started.
                </p>


                <div className="contact-mini">

                  <a
                    href={`mailto:${email}`}
                  >
                    ✉ Email Us
                  </a>


                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp
                  </a>


                  <a href="#contact">
                    Get Store Access →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            PRODUCT DEMO
        ===================================================== */}

        <section
          id="demo"
          className="demo-section"
        >

          <div className="demo-container">

            {/* =================================================
                DEMO HEADING
            ================================================= */}

            <div className="section-heading demo-heading">

              <p className="small-title">
                BILLQORA IN ACTION
              </p>


              <h2>
                See BILLQORA Supermarket POS in action
              </h2>


              <p>
                From fast billing to inventory management,
                customer management, cash registers and sales
                reports — BILLQORA provides the essential tools
                your retail store needs in one simple POS system.
              </p>

            </div>


            {/* =================================================
                DEMO VIDEO
            ================================================= */}

            <div className="demo-video-card">

              {/* Video browser-style top bar */}

              <div className="demo-video-topbar">

                <div className="demo-video-dots">

                  <span />
                  <span />
                  <span />

                </div>


                <span>
                  BILLQORA POS • PRODUCT DEMO
                </span>

              </div>


              {/* =================================================
                  BILLQORA DEMO VIDEO
              ================================================= */}

              <video
                className="demo-video"
                controls
                playsInline
                preload="metadata"
              >

                <source
                  src="/videos/billqora-demo.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.

              </video>

            </div>


            {/* =================================================
                DEMO FEATURES
            ================================================= */}

            <div className="demo-features">

              <span>
                ⚡ Fast Billing
              </span>

              <span>
                📊 Sales & Reports
              </span>

              <span>
                📦 Inventory Management
              </span>

              <span>
                👥 Customer Management
              </span>

              <span>
                💰 Cash Register
              </span>

              <span>
                ⭐ Loyalty Points
              </span>

            </div>

          </div>

        </section>



        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section
          id="features"
          className="section"
        >

          <div className="section-heading">

            <p className="small-title">
              FEATURES
            </p>


            <h2>
              Complete Supermarket POS & Billing Features
            </h2>


            <p>
              BILLQORA brings the essential tools for supermarket
              and retail store management into one easy-to-use
              billing and POS system.
            </p>

          </div>


          <div className="feature-grid">

            {/* =================================================
                FEATURE 1
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                🧾
              </div>

              <h3>
                Fast Billing
              </h3>

              <p>
                Create bills quickly with a simple and efficient
                POS billing interface designed for everyday
                supermarket and retail transactions.
              </p>

            </div>


            {/* =================================================
                FEATURE 2
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                📦
              </div>

              <h3>
                Inventory Management
              </h3>

              <p>
                Manage products and keep track of your store
                inventory with an easy-to-use inventory management
                system.
              </p>

            </div>


            {/* =================================================
                FEATURE 3
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                👥
              </div>

              <h3>
                Customer Management
              </h3>

              <p>
                Maintain customer information and easily access
                customer billing history from your supermarket
                POS system.
              </p>

            </div>


            {/* =================================================
                FEATURE 4
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                ⭐
              </div>

              <h3>
                Loyalty Points
              </h3>

              <p>
                Reward customers with loyalty points based on
                their purchases and encourage repeat business.
              </p>

            </div>


            {/* =================================================
                FEATURE 5
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>
                Sales & Business Reports
              </h3>

              <p>
                Understand store performance with useful sales,
                billing and business reports for your retail store.
              </p>

            </div>


            {/* =================================================
                FEATURE 6
            ================================================= */}

            <div className="feature-card">

              <div className="feature-icon">
                🔄
              </div>

              <h3>
                Automatic Updates
              </h3>

              <p>
                Receive new BILLQORA features and improvements
                without manually reinstalling the software.
              </p>

            </div>

          </div>

        </section>



        {/* =====================================================
            SEO INFORMATION SECTION
        ===================================================== */}

        <section className="section">

          <div className="section-heading">

            <p className="small-title">
              BILLQORA SOFTWARE
            </p>


            <h2>
              Supermarket Billing Software for Retail Stores
            </h2>


            <p>
              BILLQORA is a modern supermarket POS and retail
              billing software designed to simplify everyday
              store operations. It helps businesses manage
              sales billing, products, inventory, customers,
              invoices, loyalty points, cash registers and
              business reports from one centralized system.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                🛒
              </div>

              <h3>
                Retail POS Software
              </h3>

              <p>
                BILLQORA provides a simple point-of-sale system
                for supermarkets and retail businesses that need
                fast and reliable billing.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🧾
              </div>

              <h3>
                Retail Billing Software
              </h3>

              <p>
                Create invoices and process customer purchases
                efficiently with an easy-to-use retail billing
                system.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                📦
              </div>

              <h3>
                Store Management
              </h3>

              <p>
                Manage products, inventory, customers, sales and
                daily supermarket operations from BILLQORA.
              </p>

            </div>

          </div>

        </section>



        {/* =====================================================
            WHY BILLQORA
        ===================================================== */}

        <section
          id="why-billqora"
          className="section dark-section"
        >

          <div className="section-heading">

            <p className="small-title">
              WHY BILLQORA
            </p>


            <h2>
              Built for Everyday Supermarket & Retail Billing
            </h2>


            <p>
              Designed to keep supermarket and retail store
              billing simple, fast and easy to manage.
            </p>

          </div>


          <div className="benefits">

            <div>
              ✓ Simple POS interface
            </div>

            <div>
              ✓ Fast billing workflow
            </div>

            <div>
              ✓ Customer & loyalty management
            </div>

            <div>
              ✓ Inventory management
            </div>

            <div>
              ✓ Sales reports
            </div>

            <div>
              ✓ Automatic software updates
            </div>

          </div>

        </section>



        {/* =====================================================
            DOWNLOAD
        ===================================================== */}

        <section
          id="download"
          className="download-section"
        >

          <div className="download-box">

            <p className="small-title">
              GET BILLQORA
            </p>


            <h2>
              Ready to simplify your store?
            </h2>


            <p>
              Download BILLQORA for Windows and get started
              with a modern supermarket POS and billing system
              for retail stores.
            </p>


            <a
              className="primary-button download-main-button"
              href={downloadUrl}
              download
            >

              Download BILLQORA for Windows

              <span>
                ↓
              </span>

            </a>


            <p className="download-note">
              Windows desktop application • Store activation required
            </p>

          </div>

        </section>



        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-container">


            {/* =================================================
                CONTACT CONTENT
            ================================================= */}

            <div className="contact-content">

              <p className="small-title">
                GET STARTED
              </p>


              <h2>
                Need BILLQORA for your store?
              </h2>


              <p>
                Contact us to create your store account and
                get your Store ID. We'll help you get BILLQORA
                ready for your supermarket or retail business.
              </p>

            </div>


            {/* =================================================
                CONTACT CARD
            ================================================= */}

            <div className="contact-card">


              {/* EMAIL */}

              <div className="contact-item">

                <div className="contact-item-icon">
                  ✉
                </div>


                <div>

                  <span>
                    Email
                  </span>


                  <a
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>

                </div>

              </div>


              {/* WHATSAPP */}

              <div className="contact-item">

                <div className="contact-item-icon">
                  💬
                </div>


                <div>

                  <span>
                    WhatsApp
                  </span>


                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us on WhatsApp
                  </a>

                </div>

              </div>


              {/* CONTACT ACTIONS */}

              <div className="contact-actions">

                <a
                  className="contact-primary"
                  href={`mailto:${email}?subject=BILLQORA%20Store%20Activation`}
                >
                  Request Store ID
                </a>


                <a
                  className="contact-secondary"
                  href={downloadUrl}
                  download
                >
                  Download First
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-top">


          {/* =================================================
              FOOTER BRAND
          ================================================= */}

          <div>

            <div className="logo">
              BILLQORA
            </div>


            <p>
              Supermarket POS & Billing Software
            </p>

          </div>


          {/* =================================================
              FOOTER LINKS
          ================================================= */}

          <div className="footer-links">

            <a href="#features">
              Features
            </a>


            <a href="#demo">
              Demo
            </a>


            <a href="#why-billqora">
              Why BILLQORA
            </a>


            <a href="#contact">
              Contact
            </a>


            <a href="#download">
              Download
            </a>

          </div>

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} BILLQORA.
            All rights reserved.
          </p>


          <p>
            Windows POS • Supermarket Billing Software • Automatic Updates
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
