
type UserMessage = {
    message: string
}
const UserMessage = ({ message }: UserMessage) => {
    return (
        <p className="md:text-xl  text-xl font-display   [word-wrap:break-word]    font-regular">{message}</p>

    )
}
export default UserMessage
