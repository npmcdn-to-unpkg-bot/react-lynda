var Note = React.createClass({
    edit: function() {
	alert('editando a nota');
    },
    remove: function() {
	alert('removendo a nota');
    },
    render: function() {
	return(
		<div className="note">
		<p>{this.props.children}</p>
		<span>
		<button onClick={this.edit}
	    className="btn btn-primary glyphicon glyphicon-pencil"/>
		<button onClick={this.remove}
	    className="btn btn-danger glyphicon glyphicon-trash"/>
		</span>
	    </div>
	);
    }
});

ReactDOM.render(<Note>Oi mundo</Note>,
	       document.getElementById('content'));
