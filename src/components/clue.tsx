import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  category: string
  difficulty: number
}

export async function Clue(props: Props) {
  const { category, difficulty } = props
  const value = difficulty * 200

  const params = new URLSearchParams({ category: category.toLowerCase(), difficulty: difficulty.toString() })
  const url = `${process.env.API_URL}/clues/random?${params.toString()}`
  const clue: ClueResponse = await fetch(url).then(res => res.json())
  const data = clue.data[0]
  // This will always be false. The API did not scrape the daily double clues.
  const dd = data.daily_double

  return (
    <Dialog>
      <DialogTrigger className={cn('p-12 w-full', dd && 'bg-daily-double bg-cover bg-center')} disabled={!data.clue}>
        <p className={cn(dd && 'bg-background/90 text-accent py-2 px-3 rounded-lg shadow')}>{value}</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category} for {value}
          </DialogTitle>
          <DialogDescription className='text-3xl text-white font-bold py-8 flex flex-col gap-6'>
            <p>{data.clue}</p>
            <Link href={`/clue/${data.id}`} target='_blank' className='text-accent text-center'>
              Answer
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
