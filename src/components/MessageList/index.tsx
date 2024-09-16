import { MessageDetail, SENDER } from '@/constant'
import MessageInfoCom from '@/components/MessageInfo'
import Options from '@/components/MessageInfo'

interface Props {
  messageData?: MessageDetail[]
}

export default (props: Props) => {
  const list = props.messageData?.map((item, i) => {
    if (!item.type) return null
    const Com = Options[item.type]
    const sender = item.sender
    return (
      <div
        className={`flex ${sender === SENDER.Recipient ? 'flex-row-reverse' : ''} px-6 pt-6`}
        key={item.id}
      >
        <div className="flex-1">
          <Com data={item} sender={sender} />
        </div>
        <div className="w-8 h-8 bg-black">头像</div>
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
