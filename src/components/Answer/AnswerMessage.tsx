const AnswerMessage = ({ message }: { message: string }) => {
    return (
        <p className=" leading-8
        " dangerouslySetInnerHTML={{ __html: message }}></p>
    )
}
export default AnswerMessage
