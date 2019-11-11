import React, { Component } from "react";
import Routes from "./routes";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}

// import React, { Component } from "react";
// import Header from "./components/header/Header";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       santri: [
//         {
//           nama: "Rafif"
//         },
//         {
//           nama: "Usamah"
//         },
//         {
//           nama: "Ahkam"
//         },
//         {
//           nama: "Udin"
//         }
//       ]
//     };
//     this.onKlik = this.onKlik.bind(this);
//   }

//   // cara membuat fungsi
//   onKlik() {
//     //fungsi menyimpan data
//     localStorage.setItem("data", JSON.stringify(this.state.santri));
//   }

//   render() {
//     const data = JSON.parse(localStorage.getItem("data"));
//     return (
//       <div style={{ paddingLeft: 20 }}>
//         <Header />
//         <h1>Hello Pondok IT, divisi : {this.state.divisi}</h1>
//         {this.state.santri.map((item, index) => {
//           return (
//             <h2 key={index}>
//               {index + 1}. {item.nama}
//             </h2>
//           );
//         })}
//         <Button angka={1} warna="darksalmon" onClick={this.onKlik} />
//         <Card>
//           <h1>Card</h1>
//         </Card>
//       </div>
//     );
//   }
// }

// export default App;
