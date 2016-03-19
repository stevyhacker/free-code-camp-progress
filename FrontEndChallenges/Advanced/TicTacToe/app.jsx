var GameGrid = React.createClass({

    render: function () {

        return (
            <div id="game-grid" className="container grid">
                <h1>Tic  Tac Toe Game in React</h1>
                <div className="row">
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                </div>
                <div className="row">
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                </div>
                <div className="row">
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                    <div className="col-xs-3 grid-item"></div>
                </div>
            </div>
        );

    }

});


ReactDOM.render(
    <GameGrid/>,
    document.getElementById('app')
);