import { PostProps } from '@/types'

const Post: React.FC<PostProps> = ({
  title,
  subtitle,
  imageUrl,
  description,
  codeLink,
}) => {
  return (
    <article className="p-4 bg-white shadow-md rounded-md mb-6">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
          <br />
          {subtitle && (
            <span className="text-lg font-normal text-gray-600">
              {subtitle}
            </span>
          )}
        </h2>
      </header>
      <div className="block mb-4">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="actions special flex space-x-4">
        {codeLink && (
          <li>
            <a
              href={codeLink}
              className="button bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              View Code
            </a>
          </li>
        )}
      </ul>
    </article>
  )
}

export default Post
