import Header from '@components/Layout/components/Header';
import MainSection from '@components/Layout/components/MainSection';
import ModalWindow from '@components/ModalWindow';
import useGlobalContext from '@/store/context.tsx';

const Layout = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();

  return (
    <>
      <Header />
      <MainSection />
      <ModalWindow isOpen={isModalOpen} toggleModal={toggleModal} title="Sign up">
        <form action="">
          <input type="text" />
        </form>
      </ModalWindow>
    </>
  );
};

export default Layout;
