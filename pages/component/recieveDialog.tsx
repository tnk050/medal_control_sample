import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ModalProps } from '@mui/material/Modal';
import { Box, Typography, Button } from '@mui/material';

import ModalBox from './modalBox';
import ConfirmModal from './confirmModal';

const listItemCss = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const sampleMessages = [
  '片山(泰)さんから200kmメダルが30枚発送されています。',
  '後藤さんから200kmメダルが20枚発送されています。',
];

export default function RecieveDialog(props: Omit<ModalProps, 'children'>) {
  const [confirm, setConfirm] = useState(false);
  const showConfirm = () => setConfirm(true);
  const closeConfirm = () => {
    setConfirm(false);
    props.onClose!({}, 'backdropClick');
  };
  return (
    <ModalBox
      {...props}
      aria-labelledby="medal-recieve-dialog"
      aria-describedby="medal-recieve-dialog"
      width={660}
    >
      <>
        <Typography
          id="recieve-dialog-title"
          variant="h6"
          component="h2"
          textAlign="center"
        >
          メダル受取
        </Typography>
        <Box my={2}>
          <List>
            {sampleMessages.map((message) => (
              <ListItem key={message} sx={listItemCss}>
                <Typography>{message}</Typography>
                <Button variant="contained" onClick={showConfirm}>
                  受取完了
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
        <ConfirmModal
          open={confirm}
          closeFunc={closeConfirm}
          width={400}
          type="recieve"
          message="受取完了しました。"
          buttonMessage="OK"
        />
      </>
    </ModalBox>
  );
}
