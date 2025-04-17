export default function Profile({ data, updateData }) {
  return (
    <div>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name=""
          id=""
          value={data.name}
          onChange={(e) => updateData("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name=""
          id=""
          value={data.email}
          onChange={(e) => updateData("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Age: </label>
        <input
          type="number"
          name=""
          id=""
          value={data.age}
          onChange={(e) => updateData("age", e.target.value)}
        />
      </div>
    </div>
  );
}
