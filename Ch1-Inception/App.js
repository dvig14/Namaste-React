const parent = [
 React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
      [
        React.createElement('h1',{},"I am h1 tag"),
        React.createElement('h2',{},'I am h2 tag')
      ]
    )
 ),
 React.createElement(
    'div',
    {id:'child'},
    [
        React.createElement('h1',{},'I am h1'),
        React.createElement('h2',{},'I am h2')
    ]
 )
]
  console.log(parent)
const heading = React.createElement(
    'h1',
    {id:'heading'},
    'Hello World diksha'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);