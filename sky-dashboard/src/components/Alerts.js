import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const alerts = [
  { id: 1, type: 'Error', message: 'Server down' },
  { id: 2, type: 'Warning', message: 'High memory usage' },
];

function Alerts() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Alerts
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell>{alert.id}</TableCell>
              <TableCell>{alert.type}</TableCell>
              <TableCell>{alert.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Alerts;
