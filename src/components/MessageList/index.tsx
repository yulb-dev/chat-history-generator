import { MessageDetail, SENDER } from '@/constant'
import { useModel } from 'umi'

import MessageInfoCom from '@/components/MessageInfo'
import Options from '@/components/MessageInfo'

interface Props {
  messageData?: MessageDetail[]
}

export default (props: Props) => {
  const { recipient: recipientUser, sender: senderUser } = useModel('userModel')

  const list = props.messageData?.map((item, i) => {
    if (!item.type) return null
    const Com = Options[item.type]
    const sender = item.sender
    const imgSrc =
      sender === SENDER.Recipient ? recipientUser?.avatar : senderUser?.avatar
    return (
      <div
        className={`flex ${sender === SENDER.Recipient ? 'flex-row-reverse' : ''} px-6 pt-6`}
        key={item.id}
      >
        <div className="flex-1">
          <Com data={item} sender={sender} />
        </div>
        <div className="w-8 h-8 overflow-hidden ">
          <img src={imgSrc} className="w-8 h-8 bg-white rounded" />
        </div>
      </div>
    )
  })

  return (
    <div
      style={{ backgroundColor: '#ededed', width: '390px', height: '844px' }}
    >
      {list}
    </div>
  )
}
