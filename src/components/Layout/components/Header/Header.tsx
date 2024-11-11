import AppBar from '@mui/material/AppBar';
import { Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Logo as LogoIcon } from '@components/icons';
import useGlobalContext from '@/store/context.tsx';
import useDarkMode from '@/hooks/useDarkMode.tsx';

const Header = () => {
  const { toggleModal } = useGlobalContext();
  const { isDarkMode } = useDarkMode();

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg" sx={{ boxSizing: 'content-box' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" height="64px">
          <Stack direction="row" alignItems="center" color={isDarkMode ? '#E0D0FA' : '#C8B3E9'}>
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

          <Stack direction="row" alignItems="center">
            <Stack mr={3}>
              <Typography variant="body2">Credits:</Typography>
              <Typography variant="h3" textAlign="right">
                $ 0
              </Typography>
            </Stack>

            <Button variant="contained" color="secondary" onClick={() => toggleModal(true)}>
              LOGIN
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
