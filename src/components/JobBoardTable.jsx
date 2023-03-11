import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const StickyHeadTable = ({ searchkeyval }) => {
  const columns = [
    { id: "jobtitle", label: "Job Title", minWidth: 170 },
    { id: "location", label: "Location", minWidth: 100 },
    {
      id: "jobtype",
      label: "Job Type",
      minWidth: 170,
      align: "right",
    },
    {
      id: "dateposted",
      label: "Date Posted",
      minWidth: 170,
      align: "right",
    },
  ];

  function createData(jobtitle, location, jobtype, dateposted) {
    return { jobtitle, location, jobtype, dateposted };
  }

  let rows = [
    createData(
      "Radiologic Technologist",
      "Sarasota, FL",
      "Full-Time Regular",
      "Posted 14 Hours ago"
    ),
    createData(
      "Radiologic Technologist",
      "Tampa, FL",
      "Full-Time Regular",
      "Posted 14 Hours ago"
    ),
    createData(
      "Radiologic Technologist",
      "Clearwater, FL",
      "Full-Time Regular",
      "Posted 3 Days ago"
    ),
    createData(
      "Radiologic Technologist",
      "Jacksonville, FL",
      "Full-Time Regular",
      "Posted 1 Week ago"
    ),
    createData(
      "Radiologic Technologist",
      "Savannah, GA ",
      "Full-Time Regular",
      "Posted 15 Hours ago"
    ),
    createData(
      "Registered Sonographer",
      "Asheville, NC",
      "Full-Time Regular",
      "Posted 20 Hours ago"
    ),
    createData(
      "Radiologic Technologist",
      "Atlanta, GA",
      "Full-Time Regular",
      "Posted 5 Week ago"
    ),
    createData(
      "Registered Sonographer",
      "Columbus, GA",
      "Full-Time Regular",
      "Posted 4 Hours ago"
    ),
    createData(
      "Pediatric Nurse Decatur",
      "Atlanta, GA",
      "Full-Time Regular",
      "Posted 14 Days ago"
    ),
    createData(
      "Personal Care Assistant	Traverse City",
      "Sarasota, FL",
      "Full-Time Regular",
      "Posted 1 Days ago"
    ),
    createData(
      "Medical Biller Decatur",
      "Sarasota, FL",
      "Full-Time Regular",
      "Posted 5 Days ago"
    ),
    createData(
      "Radiologic Technologist",
      "Sarasota, FL",
      "Full-Time Regular",
      "Posted 10 Week  ago"
    ),
    createData(
      "Executive Director Fayetteville",
      "Sarasota, FL",
      "Full-Time Regular",
      "Posted 10 Hours ago"
    ),
    createData(
      "Registered Nurse",
      "Fayetteville, NC",
      "Full-Time Regular",
      "Posted 7 Hours ago"
    ),
  ];

  const [rowdata, setRowData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    setRowData(rows);
    if (searchkeyval) {
      let searchkey = searchkeyval.toLowerCase();
      let data = rows.filter((item) =>
        item.jobtitle.toLowerCase().includes(searchkey)
      );
      setRowData(data);
    }
  }, [searchkeyval]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        marginTop: "2%",
        marginLeft: "10%",
      }}
    >
      <TableContainer sx={{ maxHeight: 660 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bolder" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowdata
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
