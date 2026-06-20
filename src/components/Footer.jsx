import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer-name">
        Shoes for The Homeless Youth Ambassadors Program
      </p>
      <p className="site-footer-meta">
        Youth-led shoe drives for communities in need · ©{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
