export default function Rating({ filters, handleInputChange }) {
  //Rating input for filter
  return (
    <div className="form-control">
      <input
        type="number"
        name="rating"
        min="0"
        max="10"
        step="0.5"
        className="input placeholder-gray-900 rounded-full w-[11.4em]"
        placeholder="Enter the Rating"
        value={filters?.rating}
        onChange={handleInputChange}
      />
    </div>
  );
}
