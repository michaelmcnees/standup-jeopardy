export default async function ClueDetailPage({ params }: { params: { id: string } }) {
  const clue: ClueResponse = await fetch(`${process.env.API_URL}/clues/${params.id}`).then(res => res.json())

  return (
    <div className='flex flex-col justify-center items-center gap-4 py-12'>
      <h1 className='text-2xl font-bold'>{clue.data[0].response}</h1>
      <p>
        <strong>Clue:</strong> {clue.data[0].clue}
      </p>
      <p>Daily Double: {clue.data[0].daily_double.toString()}</p>
    </div>
  )
}
