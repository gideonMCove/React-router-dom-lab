import { useNavigate } from 'react-router-dom'

const MailboxList =(props) => {
    let navigate = useNavigate()

    const showBox = (mailbox) => {
        navigate(`${mailbox.id}`)
    }
    return(
        <div className="MailboxList">
            <div>
                {
                    props.mailboxes.map((mailbox) => (
                        <div className="mailbox-card" onClick={()=> showBox(mailbox)} key = {mailbox.id}>
                        <h3>{mailbox.boxsize}</h3>
                        <h3>{mailbox.boxHolder}</h3>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default MailboxList