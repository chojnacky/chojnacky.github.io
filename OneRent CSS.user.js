// ==UserScript==
// @name     OneRent CSS
// @match  https://prod.onerent.zone/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==
// @updateURL https://raw.githubusercontent.com/chojnacky/chojnacky.github.io/main/OneRent%20CSS.user.js

GM_addStyle(`
   .side-buttons .side-buttons-sticky {
     width: 120px;
     position: sticky;
     top: calc(15px + 50px);
     align-self: flex-start;
     transition-duration: .3s;
     transition-timing-function: cubic-bezier(.25,.8,.25,1);
     transition-property: margin-left,opacity,transform,visibility,margin-top;
     visibility: initial;
     flex-grow: 0;
     transform: translateX(0);
   }
   .btn:not(.inside-input-group) {
     font-size: 12px;
     padding: 8px 15px;
   }
   mat-sidenav-container*, mat-sidenav-content*  {
     overflow: initial;
     background-color: #94EFF7;
     z-index: initial;
  }

  .panel-with-side-buttons.panel-with-side-buttons--outside-of-view .side-buttons:not(.side-buttons--hidden) {
    margin-top: 16px;
    width: 170px;
  }
  :root {
    --login-logo: url(/assets/img/sorent_logo.png);
    /* --primary1: #ea2f74; */
    --highlight-color: #ea2f74 !important;
    --primary2: var(--highlight-color);
    --graphic-default-border-color: #efefef;
    --core-default-components-rent-reservations-graphic-border-color: #efefef;
    --core-default-components-rent-reservations-graphic-side-menu-background-color: #3c3c3c;
    --core-default-components-rent-reservations-graphic-color: #ea2f74;
    --core-default-components-rent-workers-availability-schedule-graphic-border-color: #efefef;
    --core-default-components-rent-workers-availability-schedule-side-menu-background-color: #3c3c3c;
    --core-default-components-rent-workers-schedule-graphic-border-color: #efefef;
    --core-default-components-rent-workers-schedule-side-menu-background-color: #3c3c3c;
}

ul.timeline > li:before {
    border: 3px solid #ea2f74 !important;
}
.modal-xl {
    max-width: 1600px !important;
}
`);
