import type { ProductType } from '@/types'

export default function useFilterCategory() {
  function filterData(data: ProductType[], categories: string[]) {
    return data?.filter((item: ProductType) => {
      if (categories.length && !categories.includes(item.category)) return false
      
      // Add more filters
      return true
    })
  }
  return filterData
}
