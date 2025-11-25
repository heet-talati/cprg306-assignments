export default function Item({ id, name, quantity, category, onSelectItem }) {
  return (
    <>
      <li
        className="border rounded-sm p-2 cursor-pointer hover:bg-gray-800"
        onClick={() => onSelectItem(name)}
      >
        <p className="">{name}</p>
        <p className="">Quantity: {quantity}</p>
        <p className="">
          Category:{" "}
          {category
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </li>
    </>
  );
}
