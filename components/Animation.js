import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animation = ({ children }) => {
  useEffect(() => {
    AOS.init({      
      duration: 1000, 
      offset: 150,
      easing: 'ease', 
      once: true, 
    });
  }, []);

  return <div>{children}</div>;
};

export default Animation;
