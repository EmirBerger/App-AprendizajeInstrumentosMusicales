const InputLabel = ({ texto, type, name, id, placeholder, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={id}
        className="block mb-1 mt-3 text-2xl font-medium text-gray-400"
      >
        {texto}
      </label>
      <input type={type}
        name={name}
        id={id}
        className="w-full h-12 px-4 bg-gray-500 rounded-lg text-white text-xl placeholder-white"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="min-h-7">
        {error && <small className="text-red-500">{error}</small>}
      </div>
    </div>
  )
}

export default InputLabel