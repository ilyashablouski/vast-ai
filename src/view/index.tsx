import { Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Logo as LogoIcon } from '../components/icons';

const BaseView = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" alignItems="center">
              <LogoIcon />

              <Typography
                ml={1}
                component="span"
                fontFamily='"Source Code Pro", monospace;'
                fontWeight="600"
                fontSize="16px"
              >
                Dataxide AI
              </Typography>
            </Stack>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default BaseView;
