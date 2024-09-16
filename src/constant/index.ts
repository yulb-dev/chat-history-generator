import Text from "@/components/MessageInfo/Text"

export interface MessageDetail {
    id: number
    type: MESSAGE_TYPE,
    sender: SENDER
    text?: string
    url?: string
}

export const enum SENDER {
    Recipient = 0,
    Sender = 1,
}


export const enum MESSAGE_TYPE {
    TEXT = 1, //文本
    IMAGE = 2, // 图片
    VIDEO = 3, // 视频
    FILE = 4, // 文件
    LINK = 5, // 链接
    transaction = 6, // 交易
}

export const SENDER_FILTER = [{
    label: '对方',
    value: SENDER.Recipient
}, {
    label: '我',
    value: SENDER.Sender
}]

export const MESSAGE_TYPE_FILTER = [
    { label: '文本', value: MESSAGE_TYPE.TEXT, component: Text, },
    { label: '图片', value: MESSAGE_TYPE.IMAGE, disabled: true },
    { label: '视频', value: MESSAGE_TYPE.VIDEO, disabled: true },
    { label: '文件', value: MESSAGE_TYPE.FILE, disabled: true },
    { label: '链接', value: MESSAGE_TYPE.LINK, disabled: true },
    { label: '交易', value: MESSAGE_TYPE.transaction, disabled: true },
]
