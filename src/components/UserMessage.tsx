
type UserMessage = {
    message: string
}
const UserMessage = ({ message }: UserMessage) => {
    return (
        <p className="text-3xl  font-display break-words [word-break:break-word] whitespace-pre-line  default   font-regular">{message}</p>

    )
}
export default UserMessage
