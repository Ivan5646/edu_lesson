Loading scripts did not work: ani,ation did not work

<script src="libs/jquery/jquery-1.11.1.min.js"></script>
<script src="libs/waypoints/waypoints.min.js"></script>
<script src="libs/animate/animate-css.js"></script>

<!-- Load Scripts -->
<script>var scr = {"scripts":[
  //{"src" : "libs/jquery/jquery-1.11.1.min.js", "async" : false},
  {"src" : "libs/stellar/jquery.stellar.min.js", "async" : false},
  {"src" : "libs/owl/owl.carousel.min.js", "async" : false},
  {"src" : "libs/magnific/jquery.magnific-popup.min.js", "async" : false},
  //{"src" : "libs/waypoints/waypoints.min.js", "async" : false},
  //{"src" : "libs/animate/animate-css.js", "async" : false},
  {"src" : "js/common.js", "async" : false}
  ]};!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);
</script>









the whole minified.css

.mfp-arrow:after,
.mfp-arrow:before,
.mfp-container:before,
.mfp-figure:after {
    content: ''
}

.mfp-arrow,
.owl-carousel,
.owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent
}

.mfp-wrap,
.owl-carousel .owl-item,
.owl-carousel .owl-video-play-icon {
    -webkit-backface-visibility: hidden
}

@media only screen and (max-width:768px) {
    .logo,
    .top_header,
    h1 {
        text-align: center
    }
    .logo {
        margin-bottom: 15px
    }
    .top_phone {
        font-size: 30px;
        text-align: center!important
    }
    .modal_content {
        width: 400px!important;
        max-width: 400px!important;
        padding: 6px
    }
    .modal_content p {
        font-size: 24px!important
    }
    .modal_steps .modal_header ul.questions {
        margin: 0 -8px
    }
    .modal_steps .modal_header ul.questions li {
        font-size: 22px;
        padding: 4px
    }
}

@media only screen and (max-width:480px) {
    .top_header {
        margin-top: 30px
    }
    .top_header h1 {
        font-size: 50px!important;
        line-height: 50px!important
    }
    .top_header h2 {
        font-size: 28px
    }
    .tabs_header .tabs .tab {
        font-size: 12px;
        padding-left: 10px 15px
    }
    .button_wrap {
        text-align: center
    }
    .s_contacts .tabs .tab {
        padding: 0 20px
    }
}

@media (min-height:780px) and (min-width:1400px) {
    .tabs_header {
        position: absolute;
        bottom: 80px;
        margin-top: 50px
    }
    .tabs_header>div {
        width: 100%;
        max-width: 660px
    }
}

footer,
section {
    padding: 58px 0 68px;
    color: #000
}

footer h2,
section h2 {
    color: #fff;
    font-size: 50px;
    line-height: 56px;
    margin-bottom: 50px;
    font-family: CleanvertisingLight;
    text-align: center;
    margin-top: 0;
    font-weight: 400
}

.button.btn_green {
    background-color: #67bc5c
}

.button.btn_white {
    background-color: #fff;
    color: #000
}

a.button {
    color: #fff;
    text-decoration: none!important
}

.button_wrap {
    text-align: right
}

.s_tizers {
    background-color: #c7d9ee;
    background-image: linear-gradient(#c7d9ee, #e7eff7);
    color: #003469;
    font-family: CleanvertisingLight, sans-serif;
    text-transform: uppercase;
    padding-bottom: 15px
}

.s_tizers span {
    font-size: 14px;
    display: block
}

.s_tizers strong {
    font-weight: 400;
    font-size: 23px;
    display: block
}

.s_tizers .row>div {
    margin-bottom: 35px
}

.tiz_descr,
.tiz_img {
    display: inline-block;
    vertical-align: bottom
}

.tiz_img i {
    font-size: 70px;
    line-height: 48px;
    margin-right: 5px;
    margin-top: -91px
}

.s_tizers .row>div:nth-child(1) i {
    font-family: RobotoRegular, sans-serif;
    letter-spacing: -12px;
    margin-right: 15px;
    line-height: 24px;
    margin-top: 12px
}

.s_tizers .row>div:nth-child(1) strong {
    font-size: 25px;
    line-height: 35px
}

.s_tizers .row>div:nth-child(1) span {
    font-size: 20px;
    line-height: 24px
}

.s_tizers .row>div:nth-child(2) strong {
    font-size: 25px
}

.s_tizers .row>div:nth-child(2) span {
    font-size: 16px;
    line-height: 24px
}

.s_tizers .row>div:nth-child(2) i {
    position: relative;
    bottom: -3px
}

.s_tizers .row i.my {
    text-transform: none!important
}

.s_back h3,
form h2 {
    text-transform: uppercase
}

.s_tizers .row>div:nth-child(3) strong {
    line-height: 28px
}

.s_tizers .row>div:nth-child(3) span {
    line-height: 20px
}

.s_tizers .row>div:nth-child(3) i {
    line-height: 55px
}

.s_tizers .row>div:nth-child(4) strong {
    line-height: 28px
}

.s_tizers .row>div:nth-child(4) span {
    line-height: 20px;
    font-size: 13px
}

.profi_left {
    color: #9b1818
}

.profi_left i {
    font-size: 100px;
    line-height: 110px;
    margin-top: -115px
}

.profi_right h3 {
    display: inline-block;
    margin: 0;
    color: #9b1818;
    font-size: 28px
}

.profi_right p {
    margin-top: 5px
}

form {
    background-color: #f7f7f7;
    padding: 25px 30px;
    border: 5px solid #67bc5c;
    border-radius: 5px
}

form h2 {
    margin-top: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 22px;
    color: #333;
    line-height: 22px;
    margin-bottom: 30px
}

form label {
    display: block;
    margin-bottom: 15px;
    color: #666;
    font-size: 14px
}

.review_item,
.s_back h3 {
    color: #fff;
    text-align: center
}

form input,
form select {
    display: block;
    line-height: 40px;
    height: 40px;
    border: 1px solid #dfdfdf;
    box-shadow: 0 0 20px rgba(0, 0, 0, .06) inset;
    width: 100%;
    text-indent: 10px;
    font-size: 20px;
    margin-top: 3px
}

.my,
.review_item p {
    display: inline-block
}

form input:focus,
form select:focus {
    box-shadow: #67bc5c 0 0 0 2px;
    border-radius: 3px;
    border-color: #67bc5c
}

form select {
    background-image: url(../../img/arrow.svg);
    background-position: right center;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

form .button_wrap {
    text-align: center;
    margin: 30px 0 10px
}

.my {
    font-family: myFonts;
    font-size: 16px;
    font-style: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiaset;
    -moz-font-smoothing: grayscale
}

.tabs_header .tab_content ul li .sprite {
    width: 31px;
    height: 26px;
    display: inline-block;
    background-image: url(../images/header-icons.png);
    margin-right: 5px;
    margin-top: 3px;
    position: absolute;
    left: 0;
    top: -2px
}

.tabs_header .tab_content ul li .sprite-a {
    background-position: 67px 0
}

.tabs_header .tab_content ul li .sprite-b {
    background-position: -3px 0
}

.tabs_header .tab_content ul li .sprite-c {
    background-position: 33px 0
}

.s_review {
    background-image: url(../images/middle_bg.jpg);
    background-attachment: fixed;
    min-height: 500px;
    background-position: center top;
    background-size: cover;
    background-color: #412521
}

.review_item h4 {
    font-family: "Times New Roman", serif;
    font-style: italic;
    font-size: 22px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px
}

.review_item p {
    margin: 30px auto 0;
    float: none;
    font-size: 15px
}

.review_item .image_wrap {
    text-align: center
}

.review_item .image_wrap img {
    width: 165px!important;
    height: 165px;
    display: inline-block!important;
    border-radius: 50%;
    border: 10px solid #585a5b
}

.hr {
    width: 80px;
    height: 1px;
    background-color: #cea380;
    margin: auto
}

.owl-nav div {
    width: 34px;
    height: 140px;
    background-image: url(../images/s_arrow.png);
    top: 20px;
    position: absolute;
    opacity: .6
}

.owl-nav div:hover {
    opacity: 1
}

.owl-nav div.owl-next {
    right: 0;
    background-position: top right
}

.owl-dots {
    width: 100%;
    margin-top: 20px;
    text-align: center
}

.owl-dots .owl-dot {
    width: 14px;
    height: 14px;
    background-color: #FFF;
    display: inline-block;
    margin: 0 4px;
    border-radius: 50%;
    opacity: .5
}

.s_contacts .tabs,
.s_contacts h2 {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    vertical-align: middle
}

.mfp-bg,
.owl-dots .owl-dot.active {
    opacity: .8
}

.s_back {
    background-image: url(../images/red_bg.jpg);
    background-position: top center;
    text-align: center;
    padding: 40px 0
}

.s_back h3 {
    margin-top: 0;
    font-weight: 400;
    font-size: 26px;
    background-color: rgba(255, 255, 255, .13);
    padding: 10px 0
}

.s_back .button {
    display: inline-block;
    margin: auto
}

.s_contacts {
    padding-bottom: 0;
    text-align: center
}

.s_contacts .wrapper {
    margin-top: 15px;
    font-size: 18px
}

.s_contacts .wrapper .tab_content {
    color: #000;
    text-transform: none;
    font-family: RobotoRegular, sans-serif;
    font-weight: 400
}

.s_contacts h2 {
    color: #000;
    margin-bottom: 0
}

.s_contacts .tabs {
    margin-left: 20px
}

.s_contacts .tabs .tab {
    float: left;
    padding: 0 60px;
    border: 5px solid #9b1818;
    line-height: 38px;
    color: #9b1818
}

.s_contacts .tabs .tab:first-child {
    border-radius: 3px 0 0 3px
}

.s_contacts .tabs .tab:last-child {
    border-radius: 0 3px 3px 0
}

.s_contacts .tabs .tab.active {
    background-color: #9b1818;
    color: #fff
}

.map {
    margin-top: 20px;
    min-height: 480px;
    background-color: #e1d6b0
}

footer .button_wrap {
    text-align: center;
    margin-top: 30px
}

footer h2 {
    color: #000;
    margin-bottom: 30px
}

footer p {
    font-size: 18px;
    text-align: center;
    margin-top: 0
}

footer .bottom_phone {
    font-family: RobotoBold;
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
    color: #9b1818
}

footer .bottom_phone .wrapper .tab {
    text-transform: uppercase;
    cursor: pointer
}

footer .bottom_phone .wrapper .tab.active {
    text-decoration: underline
}

footer .tab_content {
    color: #9b1818
}

footer .tab_content .tab_item {
    dispay: none;
    font-size: 35px
}

#form_back,
#hidden_form {
    max-width: 420px;
    margin: auto;
    position: relative
}

#form_back h2,
#hidden_form h2 {
    text-align: center;
    font-weight: 400
}

.modal_steps {
    width: 100%;
    height: 100%;
    display: none;
    padding-top: 100px;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: #000;
    background-color: rgba(0, 0, 0, .4)
}

.modal_steps .modal_header .close {
    position: relative;
    top: -24px;
    right: -8px
}

.mfp-bg,
.mfp-wrap {
    position: fixed;
    left: 0
}

.modal_steps .modal_header ul.questions {
    margin: 0 4%
}

.modal_steps .modal_header li {
    float: left;
    list-style-type: none;
    color: #67bc5c;
    font-size: 24px;
    border-radius: 30px;
    display: inline-block;
    padding: 4px 30px
}

.modal_steps .modal_header li.highlight {
    background-color: #67bc5c;
    color: #fff
}

.modal_steps .modal_content {
    font-family: RobotoRegular, sans-serif;
    margin: auto;
    padding: 20px;
    background-color: #f7f7f7;
    border: 5px solid #67bc5c;
    border-radius: 5px;
    width: 700px;
    height: 350px;
    max-width: 800px
}

.modal_steps .modal_content .question_text {
    display: block;
    margin: 14px 0 20px
}

.modal_steps .modal_content #step1 input,
.modal_steps .modal_content #step1 select {
    display: block;
    line-height: 36px;
    height: 36px;
    border: 1px solid #dfdfdf;
    box-shadow: 0 0 20px rgba(0, 0, 0, .06) inset;
    width: 80%;
    text-indent: 10px;
    font-size: 20px;
    margin-top: 36px
}

.modal_steps .modal_content #step1 input:focus {
    box-shadow: #67bc5c 0 0 0 2px;
    border-radius: 3px;
    border-color: #67bc5c
}

.modal_steps .modal_content #step1 .step_btns1 {
    margin-top: 96px
}

.modal_steps .modal_content #step2 ul {
    margin-top: 40px
}

.modal_steps .modal_content #step2 ul li {
    list-style-type: none;
    font-size: 18px
}

.modal_steps .modal_content #step2 ul li input[type=radio] {
    margin-right: 10px
}

.modal_steps .modal_content #step2 .step_btns2 {
    margin-top: 42px
}

.modal_steps .modal_content .step_btns3 {
    margin-top: 17px
}

.modal_steps .modal_content form {
    padding: 0;
    border: none
}

.modal_steps .modal_content form input {
    line-height: 36px;
    height: 36px;
    width: 80%;
    text-indent: 10px;
    font-size: 20px;
    margin-top: 0
}

.mfp-bg,
.mfp-container,
.mfp-wrap {
    height: 100%;
    width: 100%
}

.modal_steps .modal_content p {
    font-size: 30px;
    color: #000
}

.modal_steps .modal_content .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: 700
}

.modal_steps .modal_content .close:focus,
.modal_steps .modal_content .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer
}

.hideMe {
    display: none
}

.mfp-bg {
    top: 0;
    z-index: 1042;
    overflow: hidden;
    background: #0b0b0b
}

.mfp-wrap {
    top: 0;
    z-index: 1043;
    outline: 0!important
}

.mfp-container {
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 8px;
    box-sizing: border-box
}

.mfp-container:before {
    display: inline-block;
    height: 100%;
    vertical-align: middle
}

.mfp-align-top .mfp-container:before {
    display: none
}

.mfp-content {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: left;
    z-index: 1045
}

.mfp-ajax-holder .mfp-content,
.mfp-inline-holder .mfp-content {
    width: 100%;
    cursor: auto
}

.mfp-ajax-cur {
    cursor: progress
}

.mfp-zoom-out-cur,
.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
    cursor: -moz-zoom-out;
    cursor: -webkit-zoom-out;
    cursor: zoom-out
}

.mfp-zoom {
    cursor: pointer;
    cursor: -webkit-zoom-in;
    cursor: -moz-zoom-in;
    cursor: zoom-in
}

.mfp-auto-cursor .mfp-content {
    cursor: auto
}

.mfp-arrow,
.mfp-close,
.mfp-counter,
.mfp-preloader {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.mfp-loading.mfp-figure {
    display: none
}

.mfp-hide {
    display: none!important
}

.mfp-preloader {
    color: #CCC;
    position: absolute;
    top: 50%;
    width: auto;
    text-align: center;
    margin-top: -.8em;
    left: 8px;
    right: 8px;
    z-index: 1044
}

.mfp-preloader a {
    color: #CCC
}

.mfp-close,
.mfp-preloader a:hover {
    color: #FFF
}

.mfp-s-error .mfp-content,
.mfp-s-ready .mfp-preloader {
    display: none
}

button.mfp-arrow,
button.mfp-close {
    overflow: visible;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
    display: block;
    outline: 0;
    padding: 0;
    z-index: 1046;
    box-shadow: none;
    touch-action: manipulation
}

.mfp-figure:after,
.mfp-iframe-scaler iframe {
    box-shadow: 0 0 8px rgba(0, 0, 0, .6);
    position: absolute;
    left: 0
}

button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.mfp-close {
    width: 44px;
    height: 44px;
    line-height: 44px;
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: none;
    text-align: center;
    opacity: .65;
    padding: 0 0 18px 10px;
    font-style: normal;
    font-size: 28px;
    font-family: Arial, Baskerville, monospace
}

.mfp-close:focus,
.mfp-close:hover {
    opacity: 1
}

.mfp-close:active {
    top: 1px
}

.mfp-close-btn-in .mfp-close {
    color: #333
}

.mfp-iframe-holder .mfp-close,
.mfp-image-holder .mfp-close {
    color: #FFF;
    right: -6px;
    text-align: right;
    padding-right: 6px;
    width: 100%
}

.mfp-counter {
    position: absolute;
    top: 0;
    right: 0;
    color: #CCC;
    font-size: 12px;
    line-height: 18px;
    white-space: nowrap
}

.mfp-figure,
img.mfp-img {
    line-height: 0
}

.mfp-arrow {
    position: absolute;
    opacity: .65;
    margin: -55px 0 0;
    top: 50%;
    padding: 0;
    width: 90px;
    height: 110px
}

.mfp-arrow:active {
    margin-top: -54px
}

.mfp-arrow:focus,
.mfp-arrow:hover {
    opacity: 1
}

.mfp-arrow:after,
.mfp-arrow:before {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 35px;
    margin-left: 35px;
    border: inset transparent
}

.mfp-arrow:after {
    border-top-width: 13px;
    border-bottom-width: 13px;
    top: 8px
}

.mfp-arrow:before {
    border-top-width: 21px;
    border-bottom-width: 21px;
    opacity: .7
}

.mfp-arrow-left {
    left: 0
}

.mfp-arrow-left:after {
    border-right: 17px solid #FFF;
    margin-left: 31px
}

.mfp-arrow-left:before {
    margin-left: 25px;
    border-right: 27px solid #3F3F3F
}

.mfp-arrow-right {
    right: 0
}

.mfp-arrow-right:after {
    border-left: 17px solid #FFF;
    margin-left: 39px
}

.mfp-arrow-right:before {
    border-left: 27px solid #3F3F3F
}

.mfp-iframe-holder {
    padding-top: 40px;
    padding-bottom: 40px
}

.mfp-iframe-holder .mfp-content {
    line-height: 0;
    width: 100%;
    max-width: 900px
}

.mfp-image-holder .mfp-content,
img.mfp-img {
    max-width: 100%
}

.mfp-iframe-holder .mfp-close {
    top: -40px
}

.mfp-iframe-scaler {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-top: 56.25%
}

.mfp-iframe-scaler iframe {
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000
}

.mfp-figure:after,
img.mfp-img {
    width: auto;
    height: auto;
    display: block
}

img.mfp-img {
    box-sizing: border-box;
    padding: 40px 0;
    margin: 0 auto
}

.mfp-figure:after {
    top: 40px;
    bottom: 40px;
    right: 0;
    z-index: -1;
    background: #444
}

.mfp-figure small {
    color: #BDBDBD;
    display: block;
    font-size: 12px;
    line-height: 14px
}

.mfp-figure figure {
    margin: 0
}

.mfp-bottom-bar {
    margin-top: -36px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    cursor: auto
}

.mfp-title {
    text-align: left;
    line-height: 18px;
    color: #F3F3F3;
    word-wrap: break-word;
    padding-right: 36px
}

.mfp-gallery .mfp-image-holder .mfp-figure {
    cursor: pointer
}

@media screen and (max-width:800px) and (orientation:landscape),
screen and (max-height:300px) {
    .mfp-img-mobile .mfp-image-holder {
        padding-left: 0;
        padding-right: 0
    }
    .mfp-img-mobile img.mfp-img {
        padding: 0
    }
    .mfp-img-mobile .mfp-figure:after {
        top: 0;
        bottom: 0
    }
    .mfp-img-mobile .mfp-figure small {
        display: inline;
        margin-left: 5px
    }
    .mfp-img-mobile .mfp-bottom-bar {
        background: rgba(0, 0, 0, .6);
        bottom: 0;
        margin: 0;
        top: auto;
        padding: 3px 5px;
        position: fixed;
        box-sizing: border-box
    }
    .mfp-img-mobile .mfp-bottom-bar:empty {
        padding: 0
    }
    .mfp-img-mobile .mfp-counter {
        right: 5px;
        top: 3px
    }
    .mfp-img-mobile .mfp-close {
        top: 0;
        right: 0;
        width: 35px;
        height: 35px;
        line-height: 35px;
        background: rgba(0, 0, 0, .6);
        position: fixed;
        text-align: center;
        padding: 0
    }
}

@media all and (max-width:900px) {
    .mfp-arrow {
        -webkit-transform: scale(.75);
        transform: scale(.75)
    }
    .mfp-arrow-left {
        -webkit-transform-origin: 0;
        transform-origin: 0
    }
    .mfp-arrow-right {
        -webkit-transform-origin: 100%;
        transform-origin: 100%
    }
    .mfp-container {
        padding-left: 6px;
        padding-right: 6px
    }
}

.owl-carousel .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.owl-carousel .owl-animated-in {
    z-index: 0
}

.owl-carousel .owl-animated-out {
    z-index: 1
}

.owl-carousel .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

.owl-height {
    -webkit-transition: height .5s ease-in-out;
    -moz-transition: height .5s ease-in-out;
    -ms-transition: height .5s ease-in-out;
    -o-transition: height .5s ease-in-out;
    transition: height .5s ease-in-out
}

.owl-carousel {
    display: none;
    width: 100%;
    position: relative;
    z-index: 1
}

.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y
}

.owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0
}

.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0)
}

.owl-carousel .owl-controls .owl-dot,
.owl-carousel .owl-controls .owl-nav .owl-next,
.owl-carousel .owl-controls .owl-nav .owl-prev {
    cursor: pointer;
    cursor: hand;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.owl-carousel.owl-loaded {
    display: block
}

.owl-carousel.owl-loading {
    opacity: 0;
    display: block
}

.owl-carousel.owl-hidden {
    opacity: 0
}

.owl-carousel .owl-refresh .owl-item {
    display: none
}

.owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.owl-carousel .owl-item img {
    display: block;
    width: 100%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.owl-carousel.owl-text-select-on .owl-item {
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto
}

.owl-carousel .owl-grab {
    cursor: move;
    cursor: -webkit-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
}

.owl-carousel.owl-rtl {
    direction: rtl
}

.owl-carousel.owl-rtl .owl-item {
    float: right
}

.no-js .owl-carousel {
    display: block
}

.owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    -webkit-transition: opacity .4s ease;
    -moz-transition: opacity .4s ease;
    -ms-transition: opacity .4s ease;
    -o-transition: opacity .4s ease;
    transition: opacity .4s ease
}

.owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000
}

.owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    background: url(owl.video.play.png) no-repeat;
    cursor: pointer;
    z-index: 1;
    -webkit-transition: scale .1s ease;
    -moz-transition: scale .1s ease;
    -ms-transition: scale .1s ease;
    -o-transition: scale .1s ease;
    transition: scale .1s ease
}

.owl-carousel .owl-video-play-icon:hover {
    -webkit-transition: scale(1.3, 1.3);
    -moz-transition: scale(1.3, 1.3);
    -ms-transition: scale(1.3, 1.3);
    -o-transition: scale(1.3, 1.3);
    transition: scale(1.3, 1.3)
}

.owl-carousel .owl-video-playing .owl-video-play-icon,
.owl-carousel .owl-video-playing .owl-video-tn {
    display: none
}

.owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    -webkit-transition: opacity .4s ease;
    -moz-transition: opacity .4s ease;
    -ms-transition: opacity .4s ease;
    -o-transition: opacity .4s ease;
    transition: opacity .4s ease
}

.owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

.animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s
}

@-webkit-keyframes bounce {
    0%,
    100%,
    20%,
    53%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    40%,
    43% {
        -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0)
    }
    70% {
        -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0)
    }
}

@keyframes bounce {
    0%,
    100%,
    20%,
    53%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    40%,
    43% {
        -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0)
    }
    70% {
        -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0)
    }
}

.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom
}

@-webkit-keyframes flash {
    0%,
    100%,
    50% {
        opacity: 1
    }
    25%,
    75% {
        opacity: 0
    }
}

@keyframes flash {
    0%,
    100%,
    50% {
        opacity: 1
    }
    25%,
    75% {
        opacity: 0
    }
}

.flash {
    -webkit-animation-name: flash;
    animation-name: flash
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse
}

@-webkit-keyframes rubberBand {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    30% {
        -webkit-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1)
    }
    50% {
        -webkit-transform: scale3d(1.15, .85, 1);
        transform: scale3d(1.15, .85, 1)
    }
    65% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }
    75% {
        -webkit-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes rubberBand {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    30% {
        -webkit-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1)
    }
    50% {
        -webkit-transform: scale3d(1.15, .85, 1);
        transform: scale3d(1.15, .85, 1)
    }
    65% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }
    75% {
        -webkit-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand
}

@-webkit-keyframes shake {
    0%,
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

@keyframes shake {
    0%,
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

.shake {
    -webkit-animation-name: shake;
    animation-name: shake
}

@-webkit-keyframes swing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg)
    }
    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg)
    }
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg)
    }
    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg)
    }
    100% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg)
    }
}

@keyframes swing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg)
    }
    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg)
    }
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg)
    }
    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg)
    }
    100% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg)
    }
}

.swing {
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing
}

@-webkit-keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    10%,
    20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }
    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
    10%,
    20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }
    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.tada {
    -webkit-animation-name: tada;
    animation-name: tada
}

@-webkit-keyframes wobble {
    0% {
        -webkit-transform: none;
        transform: none
    }
    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
    }
    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
    }
    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
    }
    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
    }
    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wobble {
    0% {
        -webkit-transform: none;
        transform: none
    }
    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
    }
    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
    }
    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
    }
    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
    }
    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

.wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble
}

@-webkit-keyframes bounceIn {
    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }
    80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes bounceIn {
    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }
    80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes bounceInDown {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0)
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInDown {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0)
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown
}

@-webkit-keyframes bounceInLeft {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInLeft {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft
}

@-webkit-keyframes bounceInRight {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInRight {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }
    100% {
        -webkit-transform: none;
        transform: none
    }
}

.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight
}

@-webkit-keyframes bounceInUp {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0)
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes bounceInUp {
    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0)
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0)
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp
}

@-webkit-keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
}

@keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
}

.bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

@keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

.bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown
}

@-webkit-keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

@keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

.bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft
}

@-webkit-keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

@keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

.bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight
}

@-webkit-keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

@keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

.bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
}

@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}

@-webkit-keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig
}

@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}

@-webkit-keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig
}

@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
}

@-webkit-keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig
}

@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

@-webkit-keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut
}

@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

@keyframes fadeOutDown {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown
}

@-webkit-keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

@keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

.fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig
}

@-webkit-keyframes fadeOutLeft {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}

@keyframes fadeOutLeft {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}

.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft
}

@-webkit-keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

@keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

.fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig
}

@-webkit-keyframes fadeOutRight {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}

.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight
}

@-webkit-keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

@keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

.fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig
}

@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

.fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp
}

@-webkit-keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

@keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

.fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig
}

@-webkit-keyframes flip {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    40% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    50% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
        transform: perspective(400px) scale3d(.95, .95, .95);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}

@keyframes flip {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    40% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    50% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
        transform: perspective(400px) scale3d(.95, .95, .95);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}

.animated.flip {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-animation-name: flip;
    animation-name: flip
}

@-webkit-keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }
    60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1
    }
    80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }
    60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1
    }
    80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInX {
    -webkit-backface-visibility: visible!important;
    backface-visibility: visible!important;
    -webkit-animation-name: flipInX;
    animation-name: flipInX
}

@-webkit-keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }
    60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1
    }
    80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg)
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }
    40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }
    60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1
    }
    80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg)
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInY {
    -webkit-backface-visibility: visible!important;
    backface-visibility: visible!important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY
}

@-webkit-keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1
    }
    100% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0
    }
}

@keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1
    }
    100% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0
    }
}

.flipOutX {
    -webkit-animation-name: flipOutX;
    animation-name: flipOutX;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-backface-visibility: visible!important;
    backface-visibility: visible!important
}

@-webkit-keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1
    }
    100% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0
    }
}

@keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1
    }
    100% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0
    }
}

.flipOutY {
    -webkit-backface-visibility: visible!important;
    backface-visibility: visible!important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0
    }
    60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1
    }
    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
        opacity: 1
    }
    100% {
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0
    }
    60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1
    }
    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
        opacity: 1
    }
    100% {
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out
}

@-webkit-keyframes lightSpeedOut {
    0% {
        opacity: 1
    }
    100% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0
    }
}

@keyframes lightSpeedOut {
    0% {
        opacity: 1
    }
    100% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0
    }
}

.lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in
}

@-webkit-keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn
}

@-webkit-keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft
}

@-webkit-keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight
}

@-webkit-keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft
}

@-webkit-keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight
}

@-webkit-keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0
    }
}

@keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0
    }
}

.rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut
}

@-webkit-keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
}

@keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }
}

.rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft
}

@-webkit-keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

@keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

.rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight
}

@-webkit-keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

@keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

.rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft
}

@-webkit-keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0
    }
}

@keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }
    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0
    }
}

.rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight
}

@-webkit-keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }
    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }
    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }
    100% {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0
    }
}

@keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }
    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }
    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }
    100% {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0
    }
}

.hinge {
    -webkit-animation-name: hinge;
    animation-name: hinge
}

@-webkit-keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn
}

@-webkit-keyframes rollOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)
    }
}

@keyframes rollOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)
    }
}

.rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut
}

@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    50% {
        opacity: 1
    }
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    50% {
        opacity: 1
    }
}

.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn
}

@-webkit-keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown
}

@-webkit-keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft
}

@-webkit-keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight
}

@-webkit-keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp
}

@-webkit-keyframes zoomOut {
    0% {
        opacity: 1
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    100% {
        opacity: 0
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    100% {
        opacity: 0
    }
}

.zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut
}

@-webkit-keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown
}

@-webkit-keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
        transform: scale(.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center
    }
}

@keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
        transform: scale(.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center
    }
}

.zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft
}

@-webkit-keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
        transform: scale(.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center
    }
}

@keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
        transform: scale(.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center
    }
}

.zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight
}

@-webkit-keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

@keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
    }
    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
    }
}

.zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp
}

@-webkit-keyframes slideInDown {
    0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes slideInDown {
    0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

.slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown
}

@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes slideInLeft {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

.slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft
}

@-webkit-keyframes slideInRight {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes slideInRight {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

.slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight
}

@-webkit-keyframes slideInUp {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes slideInUp {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

.slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp
}

@-webkit-keyframes slideOutDown {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateY(100%);
        transform: translateY(100%)
    }
}

@keyframes slideOutDown {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateY(100%);
        transform: translateY(100%)
    }
}

.slideOutDown {
    -webkit-animation-name: slideOutDown;
    animation-name: slideOutDown
}

@-webkit-keyframes slideOutLeft {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }
}

@keyframes slideOutLeft {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }
}

.slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft
}

@-webkit-keyframes slideOutRight {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@keyframes slideOutRight {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}

.slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight
}

@-webkit-keyframes slideOutUp {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }
}

@keyframes slideOutUp {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    100% {
        visibility: hidden;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }
}

.slideOutUp {
    -webkit-animation-name: slideOutUp;
    animation-name: slideOutUp
}