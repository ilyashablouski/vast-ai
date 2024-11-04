import React, { FC } from 'react';
import { Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';

interface IModalWindowProps {
  isOpen: boolean;
  toggleModal: (payload: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '328px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const ModalWindow: FC<IModalWindowProps> = ({ isOpen, toggleModal, title, children }) => {
  const handleClose = () => toggleModal(false);

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        {children}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
