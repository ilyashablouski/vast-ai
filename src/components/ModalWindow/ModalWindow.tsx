import React, { FC } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { Cross as CrossIcon } from '@components/icons';

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
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: { timeout: 300 },
      }}
      aria-labelledby="modal-modal-title"
    >
      <Fade in={isOpen} timeout={300}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>

          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 20, right: 18 }}>
            <CrossIcon />
          </IconButton>

          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
