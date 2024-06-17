import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const MailboxDetails =(props) => {

    const [box, setBox] = useState('')

    let { id } = useParams()

    useEffect(() => {
        let selectedBox = props.mailboxes.find((mailbox)=> mailbox.id === parseInt(id))
        setBox(selectedBox)
    },[props.mailboxes, id])


    return box ? (
        <div className="MailboxDetails">
            <div className="detail-header">
                <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>{mailbox.boxHolder}</h1>
                </div>
            </div>
            <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Size: {mailbox.boxSize}</h3>
        </div>
           </div> 
        </div>
    ) : null;
}

export default MailboxDetails