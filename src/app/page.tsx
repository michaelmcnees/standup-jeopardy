import { Clue } from '@/components/clue'

export default async function HomePage() {
  const categories: CategoryResponse = await fetch(`${process.env.API_URL}/categories`).then(res => res.json())
  // Pick 5 random categories from the array
  const selectedCategories = categories.data.sort(() => Math.random() - Math.random()).slice(0, 5)

  return (
    <div className='container py-8'>
      <h1 className='text-foreground font-bold text-3xl text-center mb-8'>Standup Jeopardy!</h1>
      <table className='w-full'>
        <thead>
          <tr>
            {selectedCategories.map(category => (
              <th key={category.category} className='border border-white py-8 px-2 text-2xl w-1/5 h-36'>
                {category.category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {selectedCategories.map(category => (
              <td key={category.category} className='border border-white text-4xl text-center font-bold'>
                <Clue key={`${category.category}_${1}`} category={category.category} difficulty={1} />
              </td>
            ))}
          </tr>
          <tr>
            {selectedCategories.map(category => (
              <td key={category.category} className='border border-white text-4xl text-center font-bold'>
                <Clue key={`${category.category}_${2}`} category={category.category} difficulty={2} />
              </td>
            ))}
          </tr>
          <tr>
            {selectedCategories.map(category => (
              <td key={category.category} className='border border-white text-4xl text-center font-bold'>
                <Clue key={`${category.category}_${3}`} category={category.category} difficulty={3} />
              </td>
            ))}
          </tr>
          <tr>
            {selectedCategories.map(category => (
              <td key={category.category} className='border border-white text-4xl text-center font-bold'>
                <Clue key={`${category.category}_${4}`} category={category.category} difficulty={4} />
              </td>
            ))}
          </tr>
          <tr>
            {selectedCategories.map(category => (
              <td key={category.category} className='border border-white text-4xl text-center font-bold'>
                <Clue key={`${category.category}_${5}`} category={category.category} difficulty={5} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
