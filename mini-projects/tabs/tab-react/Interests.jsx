export default function Interests({ data, updateData }) {
  const onChangeHandler = (e) => {
    let temp = [...data.interests];
    const selectedCheckbox = e.target.name;
    const idx = data.interests.indexOf(selectedCheckbox);
    if (idx === -1) {
      temp.push(selectedCheckbox);
    } else {
      temp = [
        ...data.interests.slice(0, idx),
        ...data.interests.slice(idx + 1),
      ];
    }
    updateData("interests", temp);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={data.interests.includes("coding")}
            onChange={(e) => onChangeHandler(e)}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={data.interests.includes("cricket")}
            onChange={(e) => onChangeHandler(e)}
          />
          Cricket
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="game"
            checked={data.interests.includes("game")}
            onChange={(e) => onChangeHandler(e)}
          />
          Game
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cooking"
            checked={data.interests.includes("cooking")}
            onChange={(e) => onChangeHandler(e)}
          />
          Cooking
        </label>
      </div>
    </div>
  );
}
