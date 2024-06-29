import scrapper from '@/assets/images/scrapper.jpg'

const FeaturedPost = () => (
  <article className="post featured p-6 mb-6 bg-white shadow-lg rounded-lg">
    <header className="major mb-4">
      <h2 className="text-2xl font-bold text-gray-800">
        My Name is Luis Vargas
      </h2>
      <p className="text-gray-600 mt-2">
        Hard-working software developer and statistician, with a flair for
        creating elegant solutions in the least amount of time.
      </p>
    </header>
    <header className="mb-4">
      <h2 className="text-xl font-semibold text-gray-700">WebScrapper</h2>
    </header>
    <a
      href="https://github.com/luisVargasGu/WebScrapper"
      target="_blank"
      className="image main block mb-4"
    >
      <img
        src={scrapper}
        alt="Web Scrapper"
        className="w-full h-[200px] rounded-lg"
      />
    </a>
    <ul className="actions special">
      <li>
        <a
          href="https://github.com/luisVargasGu/WebScrapper"
          target="_blank"
          className="button bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          View project details
        </a>
      </li>
    </ul>
  </article>
)

export default FeaturedPost
