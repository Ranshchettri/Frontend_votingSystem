import React from "react";

const Dashboard = () => {
  const user = {
    name: "Ransh Thapa",
    voterId: "VTR2025NEP001",
    hasVoted: false,
  };

  const candidates = [
    { id: 1, name: "Alice Sharma", party: "Democratic Nepal Party" },
    { id: 2, name: "Ramesh Koirala", party: "Future Vision Party" },
    { id: 3, name: "Bikash Lama", party: "People’s Choice Party" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        🗳️ Welcome, {user.name}
      </h2>

      <div className="card p-4 mb-4 shadow">
        <h5>
          <strong>Voter ID:</strong> {user.voterId}
        </h5>
        <h5>
          <strong>Status:</strong>{" "}
          {user.hasVoted ? (
            <span className="text-success">You have already voted ✅</span>
          ) : (
            <span className="text-danger">You haven’t voted yet ❌</span>
          )}
        </h5>
      </div>

      <h4 className="mb-3">Available Candidates</h4>
      <div className="row">
        {candidates.map((candidate) => (
          <div className="col-md-4 mb-3" key={candidate.id}>
            <div className="card p-3 shadow-sm h-100">
              <h5>{candidate.name}</h5>
              <p className="text-muted">{candidate.party}</p>
              <button
                className="btn btn-primary w-100"
                disabled={user.hasVoted}
              >
                {user.hasVoted ? "Vote Casted" : "Vote Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
