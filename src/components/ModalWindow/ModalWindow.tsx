import React, { Dispatch } from 'react';
import { Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';

interface IModalWindowProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ isOpen, setOpen, title, children }: IModalWindowProps) => {
  const handleClose = () => setOpen(false);

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
