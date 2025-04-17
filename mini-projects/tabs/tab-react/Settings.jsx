export default function Settings({ data, updateData }) {
  return (
    <div>
      <strong>Theme</strong>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="dark"
            id=""
            checked={data.theme === "dark"}
            onChange={() => updateData("theme", "dark")}
          />
          Dark
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="light"
            id=""
            checked={data.theme === "light"}
            onChange={() => updateData("theme", "light")}
          />
          Light
        </label>
      </div>
    </div>
  );
}
