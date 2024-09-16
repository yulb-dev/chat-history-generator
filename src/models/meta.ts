import dayjs from "dayjs"

export interface Meta {
    time?: dayjs.Dayjs
    backgroundImg?: string
}

export default () => {
    const [meta, setMeta] = useState<Meta>({
        time: dayjs()
    })
    return {
        meta, setMeta
    }
}