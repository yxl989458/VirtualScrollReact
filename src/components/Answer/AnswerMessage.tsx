const AnswerMessage = ({ message }: { message: string }) => {
    return (
        <p className="text-xl font-medium " dangerouslySetInnerHTML={{ __html: message }}></p>
    )
}


export default AnswerMessage
