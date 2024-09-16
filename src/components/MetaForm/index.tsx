import { UserInfo } from '@/models/userModel'
import {
  Form,
  FormProps,
  GetProp,
  Input,
  message,
  TimePicker,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop'
import { Meta } from '@/models/meta'
import { useModel } from 'umi'

import dayjs from 'dayjs'

const format = 'HH:mm'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (img: any, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

export default () => {
  const [form] = Form.useForm<Meta>()
  const { meta, setMeta } = useModel('meta')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('请上传图片')
    }
    getBase64(file, (url) => {
      setMeta({
        ...meta,
        backgroundImg: url,
      })
      setFileList([file])
    })
    return false
  }

  const handleValuesChange: FormProps['onValuesChange'] = (
    changedValues,
    values
  ) => {
    setMeta({ ...values, backgroundImg: meta.backgroundImg })
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  const imageUrl = meta.backgroundImg
  return (
    <Form
      labelCol={{ span: 6 }}
      form={form}
      initialValues={{ ...meta }}
      onValuesChange={handleValuesChange}
    >
      <Form.Item<Meta> label="时间" name="time">
        <TimePicker format={format} />
      </Form.Item>
      <Form.Item<Meta> label="背景" name="backgroundImg">
        <ImgCrop rotationSlider aspect={9 / 16}>
          <Upload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            fileList={fileList}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ height: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </ImgCrop>
      </Form.Item>
    </Form>
  )
}
