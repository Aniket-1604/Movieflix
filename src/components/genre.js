export default function Genre({ genres, filters, handleInputChange }) {
  //Genre input for filter
  return (
    <div className="py-5 md:py-0 form-control">
      <select
        className="select text-gray-900 rounded-full select-bordered w-[13em]"
        name="genre"
        value={filters?.genre}
        onChange={handleInputChange}
      >
        <option>Choose your Genre</option>
        {genres?.map((genre) => (
          <option key={genre?.id} value={genre?.id}>
            {genre?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
