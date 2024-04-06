"use strict";
"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import * as XLSX from "xlsx";
import { updateFirebaseTable } from "@/Components/FirebaseUtils/UpdateTable";
import { getFirebaseTableData } from "@/Components/FirebaseUtils/GetTable";

const ExcelUploader = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const extractColumns = (columns) => {
    return columns.map((column) => ({
      field: column.field,
      headerName: column.headerName,
    }));
  };
  const extractData = (rows) => {
    return rows.map((row) => Object.values(row));
  };

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const data = await getFirebaseTableData("testinTable");
        const columnDefs = extractColumns(data[0]);
        const rowData = extractData(data[1]);
        setData(data[1]);
        setColumns(columnDefs);
        console.log("data: " + JSON.stringify(rowData));
        // setData(data.data);
        // setColumns(data.columns);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTableData();
  }, []);
  const handleFileUpload = (event: any) => {
    // data
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target?.result, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Add a unique id to each row
      const dataWithIds = jsonData.map((row, index) => ({
        id: index + 1,
        ...row,
      }));

      setData(dataWithIds);
      var cols = Object.keys(jsonData[0]).map((key) => ({
        field: key,
        headerName: key,
      }));
      setColumns(cols);
      updateFirebaseTable({
        tableName: "testinTable",
        tableData: { data: dataWithIds, columns: cols },
      });
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
            <div style={{ height: 300, width: "100%" }} >
              <DataGrid
                className="bg-white text-black rounded-lg m-12 mb-12 border-2 border-black/20 divide-y-2 "
                editMode="row"
                rows={data}
                columns={columns}
                pageSize={10}
              />
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export default ExcelUploader;
