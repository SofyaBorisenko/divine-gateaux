import flowers from "./assets/flowers-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left"></div>
      <div className="footer-text">
        <p>167 Horn Ln, London W3 6PP, Great Britain</p>
        <p>Copyright &copy; Divine Gateaux 2023</p>
      </div>
      <div>
        <img src={flowers} alt="My Image" className="footer-img" />
      </div>
    </footer>
  );
};
export default Footer;
