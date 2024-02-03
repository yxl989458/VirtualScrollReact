const AnswerMessage = ({ message }: { message: string }) => {
    return (
        <p className="md:text-xl leading-10" dangerouslySetInnerHTML={{ __html: message }}></p>
    )
}
export default AnswerMessage
