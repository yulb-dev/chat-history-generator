import { useModel } from 'umi'
import CustomForm from './CustomForm'
import { Divider } from 'antd'
import { UserInfo } from '@/models/userModel'

export default () => {
  const { recipient, sender, setSender, setRecipient } = useModel('userModel')
  const handleSenderChange = (form: UserInfo) => {
    setSender({ ...sender, ...form })
  }
  const handleRecipientChange = (form: UserInfo) => {
    setRecipient({ ...recipient, ...form })
  }
  return (
    <div>
      <div className="border-l-2 border-indigo-500/100 pl-2">发送方</div>
      <CustomForm userInfo={recipient} onChange={handleRecipientChange} />
      <Divider />
      <div className="border-l-2 border-indigo-500/100 pl-2">接收方</div>
      <CustomForm userInfo={sender} onChange={handleSenderChange} />
    </div>
  )
}
