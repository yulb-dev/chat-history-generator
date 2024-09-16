import { Button, Card } from 'antd';
import MessageForm, { Props } from '@/components/MessageForm';
import MessageList from '@/components/MessageList';
import { MessageDetail, MESSAGE_TYPE } from '@/constant';

export default function HomePage() {
  const [messageList, setMessageList] = useState<MessageDetail[]>([])

  const handleSubmit: Props['onSubmit'] = (formData) => {
    console.log('formData', formData)
    setMessageList([...messageList, { ...formData, id: Date.now() }])
  }

  return (
    <div className='h-full'>
      <div className='p-5 flex'>
        <Card style={{ width: 600 }}>
          <MessageForm onSubmit={handleSubmit} />
        </Card>
        <Card className='flex-1'>
          <MessageList messageData={messageList} />
        </Card>
      </div>

    </div>
  );
}
