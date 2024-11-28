import { Quiz } from "./components/Quiz";

const mockImageUrls = [
  "https://utfs.io/f/flVExL0YDvUOxn3Oa9Vo31YdLl20mewpR8zBbZGjXhnyDNtQ",
  "https://utfs.io/f/flVExL0YDvUOB00zDjOJ0Sdf62hV3zoLcKXqUpu4G9TtjxFg",
  "https://utfs.io/f/flVExL0YDvUOAfXVoCQivKW8U64V9YszbnPoqCAtw2IMr0ap",
  "https://utfs.io/f/flVExL0YDvUOPahhHDv1cu5EfQ8tkGsTvIjrZ3PwV7bBdMAN"
]

const mockImages = mockImageUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function Home() {
  return (
    <main>
      <div className="flex justify-self-center w-11/12 h-3 border-2 border-black bg-royal-purple " />
      <div className="p-12">
        <Quiz/>
      </div>
      <div className="flex justify-self-center w-11/12 h-3 border-2 border-black bg-royal-purple" />
    </main>
  );
}
