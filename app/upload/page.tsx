"use strict";
"use client";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleFileUpload = (event) => {
    // data
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Add a unique id to each row
      const dataWithIds = jsonData.map((row, index) => ({
        id: index + 1,
        ...row,
      }));

      setData(dataWithIds);
      setColumns(
        Object.keys(jsonData[0]).map((key) => ({ field: key, headerName: key }))
      );
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="w-fit">
        <Box>
          <Box mb={2}>
            <Typography variant="h5">Upload XLSX File</Typography>
            <input type="file" accept=".xlsx" onChange={handleFileUpload} />
          </Box>
          {data.length > 0 && (
            <DataGrid
              style={{backgroundColor: "white"}}
              rows={data}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              autoHeight
            />
          )}
        </Box>
      </div>
    </>
  );
};

export default ExcelUploader;
