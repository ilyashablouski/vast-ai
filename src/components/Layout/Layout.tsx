import Header from '@components/Layout/components/Header';
import MainSection from '@components/Layout/components/MainSection';
import ModalWindow from '@components/ModalWindow';
import SignForm from '@components/SignForm';
import useGlobalContext from '@/store/context.tsx';

const Layout = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();

  return (
    <>
      <Header />
      <MainSection />
      <ModalWindow isOpen={isModalOpen} toggleModal={toggleModal} title="Sign up">
        <SignForm />
      </ModalWindow>
    </>
  );
};

export default Layout;
