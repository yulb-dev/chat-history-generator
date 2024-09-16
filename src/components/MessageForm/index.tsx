import {
  MESSAGE_TYPE,
  MESSAGE_TYPE_FILTER,
  SENDER,
  SENDER_FILTER,
} from '@/constant'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, Radio, Select } from 'antd'

type FieldType = {
  id: number
  type: MESSAGE_TYPE
  sender: SENDER
  text?: string
}

export interface Props {
  onSubmit?: (formData: FieldType) => void
}

export default (props: Props) => {
  const [form] = Form.useForm<FieldType>()
  return (
    <Form
      name="message_info"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      form={form}
      initialValues={{ type: MESSAGE_TYPE.TEXT, sender: SENDER.Sender }}
      onFinish={(value) => props.onSubmit?.(value)}
    >
      <Form.Item<FieldType>
        label="发送方"
        name="sender"
        rules={[{ required: true, message: '请选择发送方' }]}
      >
        <Radio.Group>
          {SENDER_FILTER.map(({ value, label }, i) => (
            <Radio value={value} key={i}>
              {label}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item<FieldType>
        label="消息类型"
        name="type"
        rules={[{ required: true, message: '请选择消息类型' }]}
      >
        <Select style={{ width: 120 }} options={MESSAGE_TYPE_FILTER} />
      </Form.Item>

      <Form.Item<FieldType>
        label="文本内容"
        name="text"
        rules={[{ required: true, message: '文本内容不可为空' }]}
      >
        <Input.TextArea rows={4} placeholder="请输入文本内容" maxLength={200} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}
