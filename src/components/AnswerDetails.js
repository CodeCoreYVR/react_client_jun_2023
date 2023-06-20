const AnswerDetails = ({body, author, created_at}) => {
    return (
      <div>
        <p>{body}</p>
        <p>By {author.full_name}</p>
        <p>
          <small>Created at:</small>
          <small>{created_at.toLocaleString}</small>
        </p>
      </div>
    )
}


export default AnswerDetails