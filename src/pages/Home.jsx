export default function Home() {
  return (
    <div className="bg-light">
      {/* HERO SECTION */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center text-light"
        style={{
          background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
          minHeight: "90vh",
        }}
      >
        <h1 className="fw-bold display-5 mb-3">
          Secure Online <span className="text-warning">Voting System</span>
        </h1>
        <p className="lead mb-4 w-75">
          Experience a modern, transparent, and tamper-proof way to vote online.
          Every vote is verified and stored securely.
        </p>
        <div>
          <a href="/login" className="btn btn-light rounded-pill px-4 py-2 me-3 fw-semibold">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </a>
          <a href="/register" className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold">
            <i className="bi bi-person-plus"></i> Register
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4 text-primary">About Our Platform</h2>
        <p className="text-center w-75 mx-auto text-secondary">
          Our Online Voting System ensures fairness, privacy, and transparency by using secure technology.
          From voter registration to final result counting, every step is verified and protected from tampering.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">Key Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 text-center p-4">
                <i className="bi bi-shield-lock-fill fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Secure Voting</h5>
                <p className="text-secondary">
                  Every vote is stored securely using advanced encryption & unique voter verification.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 text-center p-4">
                <i className="bi bi-graph-up-arrow fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Transparent Results</h5>
                <p className="text-secondary">
                  Votes are counted automatically, and results can be verified in real time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 text-center p-4">
                <i className="bi bi-person-check-fill fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">One Voter, One Vote</h5>
                <p className="text-secondary">
                  Smart verification ensures no voter can vote twice, keeping elections fair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5 text-primary">How It Works</h2>
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <i className="bi bi-person-plus-fill fs-1 text-success mb-2"></i>
              <h6 className="fw-bold">1. Register</h6>
              <p className="small text-secondary">Create an account with your voter ID and 2FA verification.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <i className="bi bi-box-arrow-in-right fs-1 text-primary mb-2"></i>
              <h6 className="fw-bold">2. Login</h6>
              <p className="small text-secondary">Securely login to access your voter dashboard.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <i className="bi bi-ui-checks-grid fs-1 text-warning mb-2"></i>
              <h6 className="fw-bold">3. Vote</h6>
              <p className="small text-secondary">Select your preferred candidate and cast your vote safely.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <i className="bi bi-bar-chart-line-fill fs-1 text-danger mb-2"></i>
              <h6 className="fw-bold">4. View Results</h6>
              <p className="small text-secondary">Watch the results live as votes are verified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <p className="mb-1">
          © {new Date().getFullYear()} SecureVote Nepal. All rights reserved.
        </p>
        <p className="small mb-0">
          Contact us: support@securevote.com | +977-9800000000
        </p>
      </footer>
    </div>
  );
}
