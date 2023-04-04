import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

function HeaderContainer() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isDesktop && <Header />}
      {isTablet && <HeaderMobile />}
      {isMobile && <HeaderMobile />}
    </>
  );
}
export default HeaderContainer;
