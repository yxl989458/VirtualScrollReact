
type UserMessage = {
    message: string
}
const UserMessage = ({ message }: UserMessage) => {
    return (
        <p className="md:text-xl  text-xl font-display   [word-wrap:break-word]    font-regular" dangerouslySetInnerHTML={{ __html: message }}></p>

    )
}
export default UserMessage
