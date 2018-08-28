import React from 'react';

export const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12 fbox">
                        <h4>ЈП УРБАНИЗАМ - КРАГУЈЕВАЦ</h4>
                        <p class="text">
                            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue lectus diam, sit amet cursus massa efficitur sed. */}
                        </p>
                        <ul class="list-inline">
                            {/* <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li> 
                            */}
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 fbox">
                        <h4>УСЛУГЕ</h4>
                        <ul class="big">
                            <li>
                                <a href="prostorni_planovi.html" title="">Просторни</a>
                            </li>
                            <li>
                                <a href="gup.html" title="">Генерални</a>
                            </li>
                            <li>
                                <a href="pgr.html" title="">ПГР</a>
                            </li>
                            <li>
                                <a href="pdr.html" title="">ПДР</a>
                            </li>
                            <li>
                                <a href="gradj.html" title="">Инжењерске</a>
                            </li>
                            <li>
                                <a href="ekologija.html" title="">Екологија</a>
                            </li>
                            {/* <li><a href="#" title="">Title Seven</a></li>
                            <li><a href="#" title="">Title Eight</a></li> */}
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 fbox">
                        <h4>САДРЖАЈ</h4>
                        <ul class="big">
                            <li>
                                <a href="nabavke.html" title="">Набавке</a>
                            </li>
                            <li>
                                <a href="onama.html" title="">О нама</a>
                            </li>
                            <li>
                                <a href="reference.html" title="">Референце</a>
                            </li>
                            <li>
                                <a href="delatnost.html" title="">Делатност</a>
                            </li>
                            <li>
                                <a href="dokumenti.html" title="">Јавност</a>
                            </li>
                            <li>
                                <a href="direktor.html" title="">Директор</a>
                            </li>

                            {/* <li><a href="#" title="">Title Seven</a></li>
                            <li><a href="#" title="">Title Eight</a></li> */}      
                    </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 fbox">
                        <h4>КОНТАКТ</h4>
                        <p class="text">Краља Петра I 23; 34000 Крагујевац</p>
                        <p>
                            <a href="tel:+38134306603">
                                <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> +381 (0) 34 306 603</a>
                        </p>
                        <p>
                            <a href="mailto:office@urbanizam.co.rs">
                                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> office@urbanizam.co.rs</a>
                        </p>
                        <p class="text"> Радно време: 7:30 - 15:30 (пон - пет)</p>
                    </div>
                </div>
            </div>
            <div id="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p>&copy;&nbsp;{new Date().getFullYear()} &nbsp;&nbsp;ЈП УРБАНИЗАМ КРАГУЈЕВАЦ</p>
                        </div>
                        {/*<div class="col-md-8">
                              <ul class="list-inline navbar-right">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">MENU ITEM</a></li>
                                <li><a href="#">MENU ITEM</a></li>
                                <li><a href="#">MENU ITEM</a></li>
                                <li><a href="#">MENU ITEM</a></li>
                                <li><a href="#">MENU ITEM</a></li>
                            </ul> 
                        </div>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
};

