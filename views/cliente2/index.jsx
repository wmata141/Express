// html
//   head
//     title Express
//   body
//     h1 Account List
//     span
//       a(href="/cliente/add") Add 
     
//     table(border="1")
//       tr
//         th Id
//         th Cedula
//         th Nombre
//         th Apellido
//         th Edad
//         th
//       each c in clientes 
//         tr
//           td #{c.id_cliente}
//           td #{c.cedula}
//           td #{c.nombre}
//           td #{c.apellido}
//           td #{c.edad}
//           td 
//             a(href="/cliente/edit/" + c.id_cliente) Edit            
//             a(href="/cliente/delete/" + c.id_cliente,
//               onclick="return confirm('Are you sure?')") Delete

const React = require('react');

class Home extends React.Component {
  render() {
    return 
        <div> 
            <h1>Hola index</h1> 
        </div>;
  }
}

module.exports = Home;
          
        
