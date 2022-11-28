import Modal, { ModalProps } from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, Typography, Button } from '@mui/material';

export default function Recieve(props: Omit<ModalProps, 'children'>) {
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
          width: 660,
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
          メダル受取
        </Typography>
        <Box my={2}>
          <List>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>
                片山(泰)さんから200kmメダルが30枚発送されています。
              </Typography>
              <Button variant="contained">受取完了</Button>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>
                後藤さんから200kmメダルが20枚発送されています。
              </Typography>
              <Button variant="contained">受取完了</Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Modal>
  );
}
