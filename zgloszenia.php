    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>SoRentDocs - wszystko w pigułce</title>

        <!-- Meta -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="SoRentDocs - wszystko w pigułce">
        <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
        <link rel="shortcut icon" href="favicon.ico">

        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet">

        <!-- FontAwesome JS-->
        <script defer src="assets/fontawesome/js/all.min.js"></script>

        <!-- Theme CSS -->
        <link id="theme-style" rel="stylesheet" href="assets/css/theme.css">

    </head>

    <body>
        <header class="header fixed-top">

            <div class="branding docs-branding">
                <div class="container-fluid position-relative py-2">
                    <div class="docs-logo-wrapper">
                        <div class="site-logo"><a class="navbar-brand" href="index.html"><img class="logo-icon me-2" src="assets/images/coderdocs-logo.svg" alt="logo"><span class="logo-text">SoRent<span class="text-alt">Docs</span></span></a></div>
                    </div>
                    <!--//docs-logo-wrapper-->
                    <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                    </div>
                    <!--//docs-top-utilities-->
                </div>
                <!--//container-->
            </div>
            <!--//branding-->
        </header>
        <!--//header-->
        <?php
$servername = "sql11.freemysqlhosting.net";
$username = "sql11483032";
$password = "3VtfEucMUs";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>


        <!--//page-header-->
        <div class="page-content">
            <div class="container">
                <br>
                <div class="alert alert-warning" role="alert">
                    <form action="/cgi-bin/hello_get.cgi" method="get">
                        <label for="fname">Imie: </label>
                        <input type="text" id="fname" name="fname"><br>
                        <br>
                        Moduł:
                        <select class="alert alert-light">
                            <option value="rzr" selected>Rezerwacje</option>
                            <option value="fv">Faktury</option>
                            <option value="org">Organizacja</option>
                            <option value="cenn">Cenniki, kontrakty i kontrahenci</option>
                            <option value="cars">Samochody</option>
                            <option value="ser">Serwisy</option>
                            <option value="mob">Aplikacja moblina</option>
                        </select><br>
                        Typ:
                        <select class="alert alert-light">
                            <option value="new">Nowy poradnik</option>
                            <option value="bug" selected>Błąd</option>
                            <option value="hmm">Uwaga</option>
                            <option value="other">Inne</option>
                        </select>
                        <br>Opis:
                        <br>
                        <textarea rows="5" cols="87" name="description">
         </textarea><br>

                        <input class="btn btn-secondary" type="submit" value="Wyślij" />
                    </form>
                </div>
                <div class="docs-overview py-5">
                    <div class="alert alert-info" role="alert">
                        <p>[01.04.2022] Karol Chojnacki - Organizacja - dodanie </p>
                        <p>LOREM IPSUM DASDAS DASHDHASDGHASGHDGHASDGHASGHDHGASGHDGHASHGDAGHSDGHASGHDGHASGHDGHA SGHDHSGADHGSAGHDGHAGHSDGHASHGDGHSAGHDGHASGHDHGASGHDSAGHDGHASHGDHGA SGHDAGHSDHGASHGDGHASGHDASGHDGHAS.</p>

                        <button type="button" class="btn btn-secondary">Dodaj komentarz</button>
                    </div>

                </div>
                <!--//container-->
            </div>
            <!--//container-->
        </div>
        <!--//page-content-->
        <footer class="footer">

            <div class="footer-bottom text-center py-5">
                <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
                <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a class="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>


            </div>

        </footer>

        <!-- Javascript -->
        <script src="assets/plugins/popper.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

        <!-- Page Specific JS -->
        <script src="assets/plugins/smoothscroll.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"></script>
        <script src="assets/js/highlight-custom.js"></script>
        <script src="assets/plugins/simplelightbox/simple-lightbox.min.js"></script>
        <script src="assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
        <script src="assets/js/docs.js"></script>

    </body>

    </html>
