import { MessageDetail, SENDER } from "@/constant"
import Styles from './text.module.scss'

interface Props {
    data: MessageDetail;
    sender: SENDER
}

export default (props: Props) => {

    const { data, sender } = props
    const isSender = sender === SENDER.Sender


    return <div className={` flex ${isSender ? 'justify-end' : 'justify-start'}`}>
        <div className={`${Styles.text_type} ${isSender ? Styles.text_type_sender : Styles.text_type_recipient}`} >
            {data.text}
        </div>
    </div>
}