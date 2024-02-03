
type UserMessage = {
    message: string
}
const UserMessage = ({ message }: UserMessage) => {
    return (
        <p className="md:text-3xl  text-xl font-display   [word-wrap:break-word]    font-regular">{message}</p>

    )
}
export default UserMessage
