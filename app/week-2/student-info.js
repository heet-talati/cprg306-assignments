import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <p>Name: Heet Talati</p>
      <p>
        GitHub:{" "}
        <Link
          href={"https://github.com/heet-talati"}
          className="underline"
          target="_blank"
        >
          {" "}
          heet-talati/cprg306-assignments
        </Link>
      </p>
    </>
  );
}
