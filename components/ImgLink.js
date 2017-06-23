export default ({ href, alt, src }) => (
  <a href={href} style={{ display: 'block', maxWidth: '100%' }}>
    <img src={src} alt={alt} style={{ width: '100%' }}/>
  </a>
);
