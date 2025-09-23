import ItemList from "./item-list";
import Head from "next/head";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <div className="bg-[url('https://i.gifer.com/QFK.gif')] bg-auto animate-pulse">
      <main className="mx-auto max-w-xl p-4 flex flex-col bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhtN3M0ZmJnbHdkd3BlYnRnMzJ1cjl4NWpqcjd2YXRjNXA1ZHpoeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Ztl4SjQ3eeudkkw/giphy.gif')] bg-contain bg-center animate-spin">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <ItemList></ItemList>
      </main>
    </div>
  );
}
