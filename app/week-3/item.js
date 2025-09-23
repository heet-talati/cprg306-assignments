export default function Item({ name, quantity, category }) {
  return (
    <>
      <li className="border rounded-sm p-2 | animate bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-100">
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
