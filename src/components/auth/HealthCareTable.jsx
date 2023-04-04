import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const HealthCareTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Registered Nurse</TableCell>
            <TableCell align="right">Personal Support Worker</TableCell>
            <TableCell align="right">House Keeper</TableCell>
            <TableCell align="right">Licensed Practical Nurses</TableCell>
            <TableCell align="right">Registered Health Care Aide</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "td, th": { border: 0 } }}>
            <TableCell>
              Registered Nurse provides care for patients utilizing the nursing
              process of assessment, planning, intervention, implementation, and
              evaluation.
            </TableCell>
            <TableCell>
              Provide support for people who are ill, elderly or need help with
              daily tasks. You make sure your clients are comfortable, safe and
              enjoy emotional and physical well-being.
            </TableCell>
            <TableCell>
              Perform custodial and housekeeping tasks. Maintain the facility in
              a clean, safe, and sanitary manner. Perform all tasks to assure
              that the facility reflects a high quality of care and appearance.
            </TableCell>
            <TableCell>
              Travel nursing is a popular career path that LPNs may consider
              going into once they have gained some experience and are ready to
              travel.
            </TableCell>
            <TableCell>
              Travel nurses are RNs from various clinical backgrounds who work
              for independent staffing agencies.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { HealthCareTable };
