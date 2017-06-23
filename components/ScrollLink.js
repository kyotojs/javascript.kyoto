import smoothScroll from 'smoothscroll'

const handleClick = (e, selector) => {
  const dst = document.querySelector(selector);
  if (!dst) { return; }

  smoothScroll(dst);
  e.preventDefault();
  e.stopPropagation();
};

const ScrollLink = ({ href, children }) => (
  <a style={{color: 'white'}} href={href} onClick={(e) => handleClick(e, href)}>{children}</a>
);

export default ScrollLink;
