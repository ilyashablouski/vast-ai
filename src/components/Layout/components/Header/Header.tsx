import AppBar from '@mui/material/AppBar';
import { Container, Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Logo as LogoIcon } from '@components/icons';
import useGlobalContext from '@/store/context.tsx';

const Header = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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

          <Button variant="contained" color="secondary" onClick={() => toggleModal(true)}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
