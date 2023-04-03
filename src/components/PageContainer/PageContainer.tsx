import { useMediaQuery } from 'react-responsive';

function MyComponent() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <h1>Desktop layout</h1>}
      {isTablet && <h1>Tablet layout</h1>}
      {isMobile && <h1>Mobile layout</h1>}
    </div>
  );
}