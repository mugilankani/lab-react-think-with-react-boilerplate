const container = document.getElementById('react-container');

let Container = () => {
    return React.createElement('div',null,"Hey Kalvians! Welcome to React Learning",
    React.createElement('div',null," Let's rock and roll")
    
    )
}
ReactDOM.render(React.createElement(Container),container)
// class ReactContainer extends React.Component{
   
//       render(){
//           return React.createElement(`div`,null,`Hey Kalvians`,
//           React.createElement(`div`,null,`Let's rock and roll with classes`)
//           );
//       }
    
//   }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer),container);


