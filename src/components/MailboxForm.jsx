import { useNavigate} from 'react-router-dom'



const MailboxForm =(props) => {
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        props.addBox(e)
        navigate('/mailboxes')
    }

    const newBox = props.newBox
    return(
        <div className="MailboxForm">
            <h1>Add a new Mail Box</h1>
            <form onSubmit={handleSubmit}>
                <select
                id="boxSize"
                name ="boxSize"
                required
                onChange={props.handleChange}>
                <option value ="" disabled defaultValue>Select your size</option>
                <option value ="small">Small</option>
                <option value ="medium">Medium</option>
                <option value ="large">Large</option>
                </select>

                <input type="text" value ={newBox.boxHolder} onChange={props.handleChange} name={'boxHolder'} placeholder ={'Box Owner'} />

                <button>Submit</button>

            </form>
            
        </div>
    )
}

export default MailboxForm