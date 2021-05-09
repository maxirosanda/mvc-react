import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='bg-light text-center text-lg-start mt-3'>
        <div className='container p-4'>
          <div className='row'>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Informacion De contactos</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Medios de pago Habilitados</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            {" "}
            Maxicomputer.com
          </a>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
