var Tile = React.createClass({
    render: function () {
        return (
            <div className="item-tile">
                {this.props.value}
            </div>
        );
    }
});

var GameTile = React.createClass({

    getInitialState: function () {
        return {
            tile: ''
        }
    },

    onTileClick: function (evt) {
        this.setState({
            tile: 'x'
        });
    },

    render: function () {
        return (
            <div onClick={this.onTileClick} className="col-xs-3 grid-item">
                <Tile value={this.state.tile}/>
            </div>
        );
    }
});


var GameGrid = React.createClass({

    render: function () {

        return (
            <div id="game-grid" className="container grid">
                <h1>Tic Tac Toe Game in React</h1>
                <div className="row">
                    <GameTile/>
                    <GameTile/>
                    <GameTile/>
                </div>
                <div className="row">
                    <GameTile/>
                    <GameTile/>
                    <GameTile/>
                </div>
                <div className="row">
                    <GameTile/>
                    <GameTile/>
                    <GameTile/>
                </div>
            </div>
        );

    }

});


ReactDOM.render(
    <GameGrid/>,
    document.getElementById('app')
);