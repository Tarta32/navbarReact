class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {ouvert : true} 
    }
cliqueBurger(){
    this.setState({ouvert : !this.state.ouvert})
}     

render(){
    let nomClass = ""
    if (this.state.ouvert == true){
        nomClass = "liens"
    }
    else {
        nomClass = "liens ferme"
    }

    return <nav className="navbar">
        <h1>Titre</h1>
        <div className={nomClass}>
            <a href="#">lien 1</a>
            <a href="#">lien 2</a>
            <a href="#">lien 3</a>
        </div>
        <div className="burger" onClick={this.cliqueBurger.bind(this)}>
            <p>&equiv;</p>
        </div>
    </nav>
}}

ReactDOM.render(<Navbar></Navbar>, document.getElementById("app"))

