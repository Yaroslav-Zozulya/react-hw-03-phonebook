const Filter = ({ handleSearchInput }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" name="search" onChange={handleSearchInput} />
    </>
  );
};

export default Filter;
