import { ModalProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalBox from './modalBox';

type ConfirmProps = Omit<ModalProps, 'children'> & {
  closeFunc: () => void;
  message: string;
  buttonMessage: string;
  type: string;
  width: number;
};

export default function ConfirmModal(props: ConfirmProps) {
  const { closeFunc, message, buttonMessage, type, width, ...modalProps } =
    props;
  return (
    <ModalBox
      {...modalProps}
      aria-labelledby={type + '-confirm'}
      aria-describedby={type + '-confirm'}
      width={width}
    >
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Typography>{message}</Typography>
        <Button variant="contained" onClick={closeFunc}>
          {buttonMessage}
        </Button>
      </Box>
    </ModalBox>
  );
}
