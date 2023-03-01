

const InputField = ({ text, descriptions, handelSubmit,
  handelText, handelDescriptions }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handelText(e.target.value)} />
      <input value={descriptions} onChange={(e) =>
        handelDescriptions(e.target.value)} />
      <button onClick={handelSubmit}>Create</button>
    </label>
  )
}

export default InputField