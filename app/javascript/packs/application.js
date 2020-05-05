// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("select2")

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery'
window.$ = $

// select2
// import "select2"
import "select2/dist/css/select2.min.css"
import "select2/dist/js/select2.full.min.js"

// sweetalert2
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
window.Swal = Swal

import 'tempusdominus-bootstrap-4'
// window.$ = window.jQuery.$

// import 'font-awesome'
import 'font-awesome/css/font-awesome.min.css'