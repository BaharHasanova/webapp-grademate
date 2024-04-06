"use strict";
"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import * as XLSX from "xlsx";
import { updateFirebaseTable } from "@/Components/FirebaseUtils/UpdateTable";
import { getFirebaseTableData } from "@/Components/FirebaseUtils/GetTable";
import { makeStyles } from "@mui/styles";

const AdminTable = () => {
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
  useEffect(() => {
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
      fetchTableData();
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="w-[140%] sm:w-[120%] lg:w-full ml-[-60px] lg:ml-2 mt-24">
        <div className="flex flex-row space-x-2 md:space-x-[50%] items-center space-between">
          <h2 className="w-full text-white/75">
            Click the Button to Upload the Records
          </h2>

          <input
            type="file"
            className="block w-full text-sm text-gray-500  
      file:me-4 file:py-4 file:px-8 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-gradient-to-r file:text-white
      file:from-[#9C3FE4]
      file:to-[#C65647]
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400
      file:hover:cursor-pointer
    "
            accept=".xlsx"
            onChange={handleFileUpload}
            style={{ color: "transparent", width: "90%" }}
            title="Upload"
          />
        </div>
        <Box>
          {data.length > 0 && (
            <div style={{ height: "fit" }}>
              <DataGrid
                className="bg-[#363636] text-white rounded-xl mt-12 mb-12  p-4 rounded-lg rounded-red-200"
                style={{ borderColor: "#5B5B5B" }}
                editMode="row"
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                showCellRightBorder={true}
                showCellVerticalBorder={true}
                showColumnVerticalBorder={true}
                // getCellClassName={(params) => {
                //   return `border border-[#5B5B5B] text-center`;
                // }}
              />
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export default AdminTable;
