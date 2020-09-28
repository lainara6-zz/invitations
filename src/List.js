import React from "react";
import { useParams } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import data from "./data.json";

function App() {
  const { path } = useParams();
  const group = data.find((obj) => obj.path === path);
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <h3 style={{ color: "#0047ab", textAlign: "center" }}>{group.name}</h3>
      {group ? (
        <Table
          size="small"
          style={{ maxWidth: "400px" }}
          aria-label="invitation list"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#0047ab" }}>លេខរៀង</TableCell>
              <TableCell style={{ color: "#0047ab" }}>ឈ្មោះភ្ញៀវ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.guests.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell style={{ color: "#4f4f4f" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell style={{ color: "#4f4f4f" }}>{item}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <span style={{ color: "#4f4f4f", textAlign: "center" }}>
          គ្មានទិន្នន័យ!
        </span>
      )}
    </div>
  );
}

export default App;
