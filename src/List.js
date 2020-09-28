import React from "react";
import { useLocation } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function App() {
  const location = useLocation();
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: '20px'
      }}
    >
      <h3 style={{ color: "#0047ab", textAlign: "center" }}>
        {location.state.group.name}
      </h3>
      <Table size="small" style={{ maxWidth: "340px" }} aria-label="invitation list">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#0047ab" }}>លេខរៀង</TableCell>
            <TableCell style={{ color: "#0047ab" }}>ឈ្មោះភ្ញៀវ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {location.state.group.guests.map((name, index) => {
            return (
              <TableRow key={index}>
                <TableCell style={{ color: "#4f4f4f" }}>{index + 1}</TableCell>
                <TableCell style={{ color: "#4f4f4f" }}>{name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </div>
  );
}

export default App;
