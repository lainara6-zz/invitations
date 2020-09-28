import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import data from "./data.json";

function App() {
  const history = useHistory();
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: '20px'
      }}
    >
      <Paper
        elevation={0}
        style={{
          width: '280px',
          padding: "20px",
          borderRadius: 4,
          border: "1px solid #d9d9d9",
        }}
      >
        <h3 style={{ color: "#0047ab", textAlign: "center" }}>
          Wedding Invitation
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((group) => {
            return (
              <button
                key={group.name}
                onClick={() => history.push(`/invitations/${group.name}`)}
                style={{
                  color: "#4f4f4f",
                  fontSize: '16px',
                  padding: "8px 16px",
                  margin: "8px 0px",
                  width: '260px',
                  backgroundColor: "#eaeaea",
                  borderRadius: 2,
                  border: "1px solid #e1e1e1",
                  cursor: 'pointer'
                }}
              >
                {group.name}
              </button>
            );
          })}
        </div>
      </Paper>
    </div>
  );
}

export default App;
