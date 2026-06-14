import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          ☕ Quản Lý Quán Cà Phê
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary" gutterBottom>
          Hệ thống quản lý bán hàng POS cho quán cà phê
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1">
            ✅ Frontend đang chạy tốt!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Các tính năng sẽ được thêm vào tiếp theo...
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default App;