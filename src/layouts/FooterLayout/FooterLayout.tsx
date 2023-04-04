import { useMediaQuery } from 'react-responsive';
import Footer from '../../components/Footer/Footer';
import FooterMobile from '../../components/FooterMobile/FooterMobile';

function FooterLayout() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isDesktop && <Footer />}
      {isTablet && <Footer />}
      {isMobile && <FooterMobile />}
    </>
  );
}
export default FooterLayout;
