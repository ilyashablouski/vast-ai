import AppBar from '@mui/material/AppBar';
import { Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Logo as LogoIcon } from '@components/icons';
import useGlobalContext from '@/store/context.tsx';

const Header = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg" sx={{ boxSizing: 'content-box' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" height="64px">
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
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
