import { MessageDetail, SENDER } from '@/constant'
import { useModel } from 'umi'
import Options from '@/components/MessageInfo'
import dayjs from 'dayjs'
import signal from '@/assets/images/ios-single-4-dark.png'
import wifi from '@/assets/images/ios-wifi-3-dark.png'
import battery from '@/assets/images/ios-battery-dark.png'
import back from '@/assets/images/wechat-nav-back.png'
import right from '@/assets/images/wechat-nav-right.png'
import bottomBar from '@/assets/images/bottom-bar.png'

interface Props {
  messageData?: MessageDetail[]
}

export default (props: Props) => {
  const { recipient: recipientUser, sender: senderUser } = useModel('userModel')
  const { meta } = useModel('meta')

  console.log(' props.messageData', props.messageData)
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
      className="flex flex-col"
    >
      <div
        className="nav-bar flex items-center pl-14 pr-5 py-2.5"
        style={{ color: '#353535' }}
      >
        <div className="text-sm font-semibold flex-1">
          {meta.time?.format('HH:mm')}
        </div>
        <div>
          <img src={signal} style={{ height: '13px' }} />
        </div>
        <div className="ml-1">
          <img src={wifi} style={{ height: '13px' }} />
        </div>
        <div className="ml-1 relative">
          <img src={battery} style={{ height: '13px' }} />
          <div
            className="bg-black rounded-sm absolute"
            style={{ height: '8px', width: '60%', top: '2.5px', left: '2px' }}
          ></div>
        </div>
      </div>
      <div
        className="nav-bar flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: '1px solid rgb(230, 230, 230)' }}
      >
        <div>
          <img src={back} style={{ height: '16px' }} />
        </div>
        <div
          className="font-semibold mx-4 truncate"
          style={{ color: '#181818' }}
        >
          {recipientUser?.username ?? '匿名'}
        </div>
        <div>
          <img src={right} style={{ width: '20px' }} />
        </div>
      </div>
      <div
        className="overflow-auto"
        style={{
          flex: '1 1 0px',
          backgroundImage: meta.backgroundImg
            ? `url(${meta.backgroundImg})`
            : 'none',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {list}
      </div>
      <div>
        <img src={bottomBar} alt="" />
      </div>
    </div>
  )
}
