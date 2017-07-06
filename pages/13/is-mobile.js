import MobileDetect from 'mobile-detect';

let isMobile = false;
if (typeof window !== 'undefined') {
  isMobile = new MobileDetect(window.navigator.userAgent).mobile();
}

export default isMobile;
