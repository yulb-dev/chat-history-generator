export interface UserInfo {
    avatar?: string
    username?: string
}

export default () => {

    const [sender, setSender] = useState<UserInfo>()
    const [recipient, setRecipient] = useState<UserInfo>({ username: '小灰灰' })

    return {
        sender,
        recipient,
        setSender,
        setRecipient
    }
}