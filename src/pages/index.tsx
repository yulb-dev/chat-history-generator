import { Button, Card, Tabs, TabsProps } from 'antd'
import MessageForm, { Props } from '@/components/MessageForm'
import MessageList from '@/components/MessageList'
import { MessageDetail, MESSAGE_TYPE } from '@/constant'
import UsersForm from '@/components/UsersForm'

export default function HomePage() {
  const [messageList, setMessageList] = useState<MessageDetail[]>([])

  const handleSubmit: Props['onSubmit'] = (formData) => {
    console.log('formData', formData)
    setMessageList([...messageList, { ...formData, id: Date.now() }])
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '聊天',
      children: <MessageForm onSubmit={handleSubmit} />,
    },
    {
      key: '2',
      label: '用户信息',
      children: <UsersForm />,
    },
  ]

  return (
    <div className="h-full">
      <div className="p-5 flex flex-wrap">
        <Card className="flex-1 min-w-96">
          <Tabs defaultActiveKey="1" items={items} />
        </Card>
        <Card className="ml-4">
          <MessageList messageData={messageList} />
        </Card>
      </div>
    </div>
  )
}
