import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header class="site-header">
            <div class="top">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p>Добро дошли! </p>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-inline pull-right">
                                { /*
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            */}
                                <li>
                                    <a href="mailto:office@urbanizam.co.rs">
                                        <i class="fa fa-envelope-o"></i>
                                    </a>
                                </li>
                                <li>
                                    <i class="fa fa-phone"></i> +381 (0)34 306 603</li>
                                <li>
                                    <i class="fa fa-phone"></i> +381 (0)34 306 600</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-default">
                <div class="container">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <i class="fa fa-bars"></i>
                    </button>
                    <a href="index.html" class="navbar-brand">
                        <img src="img/logo_urbanizam.png" alt="Post" />
                    </a>
                    {/*Collect the nav links, forms, and other content for toggling*/}
                    <div class="collapse navbar-collapse" id="bs-navbar-collapse">
                        <ul class="nav navbar-nav main-navbar-nav">
                            <li class="active">
                                <a href="index.html" title="">ПОЧЕТНА</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" title="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ЈП УРБАНИЗАМ
                                <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="onama.html" title="О НАМА">О НАМА</a>
                                    </li>
                                    <li>
                                        <a href="nadzorni_odbor.html" title="">НАДЗОРНИ ОДБОР</a>
                                    </li>
                                    <li>
                                        <a href="direktor.html" title="">ДИРЕКТОР</a>
                                    </li>
                                    <li>
                                        <a href="delatnost.html" title="">ДЕЛАТНОСТ</a>
                                    </li>
                                    <li>
                                        <a href="struktura.html" title="">СТРУКТУРА</a>
                                    </li>
                                    <li>
                                        <a href="kadrovi.html" title="">КАДРОВИ</a>
                                    </li>
                                    <li>
                                        <a href="opremljenost.html" title="">ОПРЕМЉЕНОСТ</a>
                                    </li>
                                    <li>
                                        <a href="reference.html" title="">РЕФЕРЕНЦЕ</a>
                                    </li>
                                    <li>
                                        <a href="nagrade.html" title="">НАГРАДЕ</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="planovi.html" title="ПЛАНОВИ" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">ПЛАНИРАЊЕ
                                <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="prostorni_planovi.html" title="О НАМА">ПРОСТОРНИ ПЛАНОВИ</a>
                                    </li>
                                    <li>
                                        <a href="gup.html" title="">ГЕНЕРАЛНИ УРБАНИСТИЧКИ ПЛАНОВИ</a>
                                    </li>
                                    <li>
                                        <a href="pgr.html" title="">ПЛАНОВИ ГЕНЕРАЛНЕ РЕГУЛАЦИЈЕ</a>
                                    </li>
                                    <li>
                                        <a href="pdr.html" title="">ПЛАНОВИ ДЕТАЉНЕ РЕГУЛАЦИЈЕ</a>
                                    </li>
                                    <li>
                                        <a href="ekologija.html" title="">СТРАТЕШКЕ ПРОЦЕНЕ УТИЦАЈА</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li><a href="gradj.html" title="">ИНЖЕЊЕРСКЕ ДЕЛАТНОСТИ</a></li> */}
                            <li>
                                <a href="novosti.html" title="">НОВОСТИ</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" title="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ЈАВНЕ НАБАВКЕ
                                <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="planovi_jn.html" title="">ПЛАНОВИ ЈАВНИХ НАБАВКИ</a>
                                    </li>
                                    <li>
                                        <a href="nabavke.html" title="">ЈАВНЕ НАБАВКЕ</a>
                                    </li>
                                    <li>
                                        <a href="nabavke_arhiva.html" title="">АРХИВА ЈАВНИХ НАБАВКИ</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="javnost.html" title="ИНФОРМАТОР" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">ЈАВНОСТ У РАДУ
                                <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="dokumenti.html" title="">ДОКУМЕНТИ И ИЗВЕШТАЈИ</a>
                                    </li>
                                    <li>
                                        <a href="program2017.html" title="">ПРОГРАМ 2017</a>
                                    </li>
                                    <li>
                                        <a href="program2016.html" title="">ПРОГРАМ 2016</a>
                                    </li>
                                    <li>
                                        <a href="program2015.html" title="">ПРОГРАМ 2015</a>
                                    </li>
                                    <li>
                                        <a href="program_arhiva.html" title="">АРХИВА</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                {/* END MAIN NAVIGATION */}
            </div>
            </nav>
        </header>
    );
};

