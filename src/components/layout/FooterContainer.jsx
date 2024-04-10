function FooterContainer () {

  const year = new Date().getFullYear()

  return (

    <footer id="footer-container">

      <p className="sm"><span className="brand">livingthe<em>OK</em>life</span></p>
      <p className="copyright">Copyright &copy; {year} All Rights Reserved</p>

    </footer>
    
  )

}

export default FooterContainer