export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} Indikids Preschool &amp; Daycare · Created by
          Ariyan Rout
        </span>
        <div className="footer-links">
          <a href="#about">Programs</a>
          <a href="#activities">Activities</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
