import { useState } from 'react';

import Modal, { ModalProps } from '@mui/material/Modal';
import {
  Box,
  Typography,
  Button,
  Select,
  TextField,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export default function SendForm(props: Omit<ModalProps, 'children'>) {
  const [member, setMember] = useState<string>('');
  const handleMember = (e: SelectChangeEvent) =>
    setMember(e.target.value as string);
  const [dist, setDist] = useState<string>('');
  const handleDist = (e: SelectChangeEvent) =>
    setDist(e.target.value as string);
  return (
    <Modal
      {...props}
      aria-labelledby="medal-send-form"
      aria-describedby="medal-send-form"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: '16px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="send-form-title"
          variant="h6"
          component="h2"
          textAlign="center"
        >
          メダル発送
        </Typography>
        <Box my={2}>
          <Box my={1}>
            <Select value={member} onChange={handleMember} sx={{ width: 160 }}>
              <MenuItem value="katayama_tai">片山(泰)</MenuItem>
              <MenuItem value="katayama_hal">片山(明)</MenuItem>
              <MenuItem value="yano">矢野</MenuItem>
              <MenuItem value="goto">後藤</MenuItem>
              <MenuItem value="hiramatsu">平松</MenuItem>
              <MenuItem value="moriwaki">森脇</MenuItem>
              <MenuItem value="tanaka">田中</MenuItem>
            </Select>
            さんに
          </Box>
          <Box my={1}>
            <Select value={dist} onChange={handleDist} sx={{ width: 120 }}>
              <MenuItem value="200">200</MenuItem>
              <MenuItem value="300">300</MenuItem>
              <MenuItem value="400">400</MenuItem>
              <MenuItem value="600">600</MenuItem>
              <MenuItem value="1000">1000</MenuItem>
            </Select>
            kmメダルを
          </Box>
          <Box
            my={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <TextField variant="outlined" sx={{ width: 120 }} />
              枚送る。
            </Box>
            <Button variant="contained">発送</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
