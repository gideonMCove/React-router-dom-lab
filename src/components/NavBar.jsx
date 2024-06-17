import {Link} from 'react-router-dom'

const NavBar =() => {
    return(
        <div className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/new">New Mailbox</Link>
        </div>
    )
}

export default NavBar