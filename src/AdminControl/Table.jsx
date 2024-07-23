import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DisasterTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/disaster.json"); // Ensure the path is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const rawData = await response.json(); // Parse JSON data

        // Flatten the data
        const flattenedData = rawData.flatMap(state => 
          state.disasters.map(disaster => ({
            state: state.state,
            ...disaster
          }))
        );

        setData(flattenedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!data.length) return <p>No data available</p>;

  // Define table headers
  const headers = ['state', 'type', 'name', 'date', 'impact', 'description'];

  return (
    <div className='mt-[100px]'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="disaster table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <StyledTableCell key={header} align="center">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                {headers.map((header) => (
                  <StyledTableCell key={header} align="center">
                    {row[header]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
