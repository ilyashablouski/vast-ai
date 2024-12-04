import React, { FC } from 'react';
import { Box, IconButton, Modal, Stack, Theme } from '@mui/material';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { Cross as CrossIcon } from '@components/icons';

interface IModalWindowProps {
  isOpen: boolean;
  toggleModal?: (payload: boolean) => void;
  title?: string;
  withCloseButton?: boolean;
  children: React.ReactNode;
}

const style = {
  p: 3,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: {
    xs: '377px',
    sm: '330px',
  },
  bgcolor: 'background.paper',
  border: (theme: Theme) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: theme.palette.mode === 'dark' ? '#251D2E' : '#EFE6F9',
  }),
};

const ModalWindow: FC<IModalWindowProps> = ({
  isOpen,
  toggleModal,
  title,
  withCloseButton = true,
  children,
}) => {
  const handleClose = () => !!toggleModal && toggleModal(false);

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
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {!!title && (
              <Typography id="modal-modal-title" variant="h1" component="span" fontSize={{ sm: '1.5rem' }}>
                {title}
              </Typography>
            )}

            {withCloseButton && (
              <IconButton onClick={handleClose} sx={{ position: 'relative', left: '8px', ml: 'auto' }}>
                <CrossIcon />
              </IconButton>
            )}
          </Stack>

          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
