import Modal, { ModalProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function ModalBox(props: ModalProps & { width: number }) {
  const { width, children, ...others } = props;
  return (
    <Modal {...others}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { width },
          bgcolor: 'background.paper',
          border: '2px solid #333',
          borderRadius: '16px',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
