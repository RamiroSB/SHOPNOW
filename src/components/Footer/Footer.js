import React from 'react'
import "./FooterTestStyle.css"
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer_2">

            <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <img src='https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/logo/logo.webp' alt="Logo ShopNow"></img> 
                <p>BETTER EXPERIENCE</p>
                </div>


            <div className=" col-sm-4 col-md  col-6 col">

                <ul className="footer_ul_amrc">
                <li><a href="https://www.solutionboxusa.com/" target='_blank' rel="noreferrer">HOME</a></li>
                <li><a href="https://www.solutionbox.com.uy/" target='_blank' rel="noreferrer">ACERCA DE</a></li>
                <li><a href="https://www.solutionbox.com.do/" target='_blank' rel="noreferrer">SERVICIO AL CLIENTE</a></li>
                </ul>
            </div>
            


            <div className=" col-sm-4 col-md  col-6 col">

                <ul className="footer_ul_amrc">
                <li><Link to="nuestraempresa">TÉRMINOS Y CONDICIONES</Link></li>
                <li><Link to="trabajaconnosotros">PREGUNTAS FRECUENTES</Link></li>
                <li><Link to="rma">POLÍTICAS DE PRIVACIDAD</Link></li>
                <li><a href="https://www.solutionbox.com.ar/info-impositiva">LEGALES</a></li>
                </ul>
            </div>


                <div className=" col-sm-4 col-md  col-12 col">

                <ul className="footer_ul_amrc">
                <li><a href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf">MI CUENTA</a></li>
                <li><Link to="capacitaciones">INFORMACIÓN PERSONAL</Link></li>
                <li><Link to="contacto">COMPRAS</Link></li>
                <li><Link to="contacto">SEGUIR ENVÍO</Link></li>
                <li><Link to="contacto"><span className='cancelacionCompra'>SOLICITAR CANCELACION DE COMPRA</span></Link></li>
                </ul>

                </div>
            </div>
            </div>

    </footer>
  )
}
