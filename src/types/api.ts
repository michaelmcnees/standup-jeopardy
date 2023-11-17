type CategoryResponse = {
  status: string
  data: Array<{
    category: string
    clue_count: number
  }>
}

type ClueResponse = {
  status: string
  data: [
    {
      id: number
      game_id: number
      value: number
      daily_double: boolean
      round: string
      category: string
      clue: string
      response: string
    }
  ]
}
