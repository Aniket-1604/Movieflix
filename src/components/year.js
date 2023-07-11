export default function Year({ filters, handleInputChange }) {
  //Year input for filter
  return (
    <div className="form-control">
      <input
        type="text"
        name="year"
        value={filters?.year}
        placeholder="Enter the Year"
        className="input placeholder-gray-900 rounded-full w-[11.4em]"
        onChange={handleInputChange}
      />
    </div>
  );
}
