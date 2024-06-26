import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const FetchNews = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey : ['news'],
        queryFn : async () => {
          const response = await axios.get(` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ca824c980aaa4e10a0968ec4206b529f`)
          return response.data.articles
        }
      })
      return {
        data, isError, isLoading, error
      }
}

export const useFetchEverything = (query) => {
  const {data, isLoading, isError, isFetched, refetch} = useQuery({
    queryKey : ['AllNews'],
    queryFn : async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=ca824c980aaa4e10a0968ec4206b529f`)
      console.log(response)
      return response.data.articles
    }
  })

  return {
    data, isError, isLoading, refetch, isFetched
  }
}
