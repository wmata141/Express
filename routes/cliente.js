var express = require('express');
var router = express.Router();
async = require('async');

router.get('/', function(req, res, next) {
  var con = req.con;
  async.parallel(
    [
      function(callback) {
        con.query('select * from cliente', function(errors, clientes){
          callback(errors, clientes);
        });
      }
    ],
    function(err,results) {
      var data = {clientes: results[0]};
      res.render('cliente/index', data);
    }
  );
});
// -----------------------------------------------------------------
router.get('/add', function(req, res, next) {
  res.render('cliente/add');
});

router.post('/add', function(req, res, next) {
  var con = req.con;
  async.parallel(
    [
      function(callback) {
        con.query('insert into cliente(cedula, nombre, apellido, edad) values (?,?,?,?)',
        [req.body.cedula, req.body.nombre, req.body.apellido, req.body.edad],
        function(errors, clientes){
          callback(errors);
        });
      }
    ],
    function(err,results) {
      res.redirect('/cliente');
    }
  );
});
// -----------------------------------------------------------------
router.get('/delete/:id_cliente', function(req, res, next) {
  var con = req.con;
  async.parallel(
    [
      function(callback) {
        con.query('delete from cliente where id_cliente = ?',
        [req.params.id_cliente],
        function(errors, clientes){
          callback(errors);
        });
      }
    ],
    function(err,results) {
      res.redirect('/cliente');
    }
  );
});
// -----------------------------------------------------------------
router.get('/edit/:id_cliente', function(req, res, next) {
  var con = req.con;
  async.parallel(
    [
      function(callback) {
        con.query('select *from cliente where id_cliente = ?',
        [req.params.id_cliente],
        function(errors, clientes){
          callback(errors, clientes[0]);
        });
      }
    ],
    function(err, results) {
      var data = {cliente: results[0]};
      res.render('cliente/edit', data);
    }
  );
});

router.post('/edit', function(req, res, next) {
  var con = req.con;
  async.parallel(
    [
      function(callback) {
        // console.log(req);
        con.query('select *from cliente where id_cliente = ?',
        [req.body.id_cliente],
        function(errors, clientes){
          con.query('update cliente set cedula = ?, nombre = ?, apellido = ?, edad = ? where id_cliente = ?',
          [req.body.cedula, req.body.nombre, req.body.apellido, req.body.edad, req.body.id_cliente],


          function(errors, clientes){
            
            console.log(errors);
            console.log(clientes);
            callback(errors);
          });
        });
      }
    ],
    function(err, results) {
      res.redirect('/cliente');
    }
  );
});

module.exports = router;
