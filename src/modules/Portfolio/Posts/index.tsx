import fruitSlices from '@/assets/images/Fruit-Slice.png'
import mathGame from '@/assets/images/Math-game.png'
import rentalAnalysisTool from '@/assets/images/RentalAnalysisTool.gif'
import herokuapp from '@/assets/images/herokuapp.png'
import warehosuse from '@/assets/images/warehouse.png'
import Post from './Post'

const Posts = () => {
  const posts = [
    {
      title: 'Project 2',
      subtitle: 'Data Analysis and PDF generator app',
      imageUrl: rentalAnalysisTool,
      description:
        'Utilized the dataset that was generated with the previously built webscrapper and created a GUI that would allow me to interact with data.',
    },
    {
      title: 'Project 3',
      subtitle: 'Backend Node File manager',
      imageUrl: herokuapp,
      description:
        'Utilized server side node, and javascript to make a File manager. In broswer pdf viewing, and chunk playback functionality. Deployed with Heroku.',
    },
    {
      title: 'Project 4',
      subtitle: 'Warehousing company',
      imageUrl: warehosuse,
      description:
        'Indepth and complete warehouse operations managemer with docTests',
      codeLink: 'https://github.com/luisVargasGu/warehouse',
    },
    {
      title: 'Project 5',
      subtitle: 'Math Game game',
      imageUrl: mathGame,
      description: 'Fun little game to practice your multiplication tables.',
      codeLink: 'https://github.com/luisVargasGu/Math-Game',
    },
    {
      title: 'Project 6',
      subtitle: 'Fruit slice game',
      imageUrl: fruitSlices,
      description:
        'A twist on the styling of the math game. Used Jquery to make this fruit ninja like game.',
      codeLink: 'https://github.com/luisVargasGu/Fruit-slice-game',
    },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </section>
  )
}

export default Posts
