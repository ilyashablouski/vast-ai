import { useState } from 'react';
import Header from '@components/Layout/components/Header';
import MainSection from '@components/Layout/components/MainSection';
import ModalWindow from '@components/ModalWindow';
import SignForm from '@components/SignForm';
import useGlobalContext from '@/store/context.tsx';
import { Stack, useTheme } from '@mui/material';
import HandsImage from '@assets/hands.svg';
import Typography from '@mui/material/Typography';
import useDarkMode from '@/hooks/useDarkMode.ts';

const Layout = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  const [isSuccessModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  const toggleSuccessModal = (payload: boolean) => {
    setSuccessModalOpen(payload);
  };

  return (
    <>
      <Header />
      <MainSection />
      <ModalWindow isOpen={isModalOpen} toggleModal={toggleModal} title="Sign up">
        <SignForm toggleSuccessModal={toggleSuccessModal} />
      </ModalWindow>

      <ModalWindow isOpen={isSuccessModalOpen} toggleModal={toggleSuccessModal}>
        <Stack alignItems="center">
          <img src={HandsImage} alt="hands" style={{ maxWidth: '180px' }} />
          <Typography variant="h1" component="span" fontSize={{ sm: '1.5rem' }} textAlign="center" mt={6}>
            Thank you!
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            fontSize={{ sm: '1.25rem' }}
            textAlign="center"
            mt={2}
            color={isDarkMode ? 'rgba(255, 255, 255, 0.75)' : theme.palette.text.primary}
          >
            We will be on touch shortly!
          </Typography>
        </Stack>
      </ModalWindow>
    </>
  );
};

export default Layout;
