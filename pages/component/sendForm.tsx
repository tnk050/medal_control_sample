import { useState } from 'react';

import { ModalProps } from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography, Button } from '@mui/material';

import ModalBox from './modalBox';
import ConfirmModal from './confirmModal';

const members = [
  { key: 'katayama_tai', name: '片山(泰)' },
  { key: 'katayama_hal', name: '片山(明)' },
  { key: 'yano', name: '矢野' },
  { key: 'goto', name: '後藤' },
  { key: 'hiramatsu', name: '平松' },
  { key: 'moriwaki', name: '森脇' },
  { key: 'tanaka', name: '田中' },
];

const distances = ['200', '300', '400', '600', '1000'];

export default function SendForm(props: Omit<ModalProps, 'children'>) {
  const [member, setMember] = useState<string>('');
  const handleMember = (e: SelectChangeEvent) =>
    setMember(e.target.value as string);
  const [dist, setDist] = useState<string>('');
  const handleDist = (e: SelectChangeEvent) =>
    setDist(e.target.value as string);

  const [confirm, setConfirm] = useState(false);
  const showConfirm = () => setConfirm(true);
  const closeConfirm = () => {
    setConfirm(false);
    props.onClose!({}, 'backdropClick');
  };

  return (
    <ModalBox
      {...props}
      aria-labelledby="medal-send-form"
      aria-describedby="medal-send-form"
      width={400}
    >
      <>
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
              {members.map(({ key, name }) => (
                <MenuItem key={key} value={key}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            さんに
          </Box>
          <Box my={1}>
            <Select value={dist} onChange={handleDist} sx={{ width: 120 }}>
              {distances.map((distance) => (
                <MenuItem key={distance} value={distance}>
                  {distance}
                </MenuItem>
              ))}
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
            <Button onClick={showConfirm} variant="contained">
              発送
            </Button>
          </Box>
        </Box>
        <ConfirmModal
          open={confirm}
          closeFunc={closeConfirm}
          width={400}
          type="send"
          message="発送を通知しました。"
          buttonMessage="OK"
        />
      </>
    </ModalBox>
  );
}
