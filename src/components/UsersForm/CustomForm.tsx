import { UserInfo } from '@/models/userModel'
import {
  Form,
  GetProp,
  Input,
  message,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop'

export interface Props {
  userInfo?: UserInfo
  onChange?: (form: UserInfo) => void
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (img: any, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

export default (props: Props) => {
  const [form] = Form.useForm<UserInfo>()
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('请上传图片')
    }
    getBase64(file, (url) => {
      setFileList([file])
      props.onChange?.({ avatar: url })
    })
    return false
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  const imageUrl = props.userInfo?.avatar

  return (
    <Form
      labelCol={{ span: 6 }}
      form={form}
      initialValues={{ ...props.userInfo }}
    >
      <Form.Item<UserInfo> label="头像" name="avatar">
        <ImgCrop rotationSlider>
          <Upload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            fileList={fileList}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </ImgCrop>
      </Form.Item>
      <Form.Item<UserInfo> label="用户名" name="username">
        <Input placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  )
}
