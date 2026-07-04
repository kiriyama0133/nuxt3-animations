import { defineStore } from 'pinia'
import type { people } from '~/model/people'

export const usePeopleStore = defineStore('people', {
  state: (): {
    peopleArray: people[]
    searchPeople: people | null
  } => {
    const peopleArray: Array<people> = []
    const searchPeople: people | null = null
    return {
      peopleArray,
      searchPeople
    }
  },
  getters: {
    SelectAge: state => (age: number) => {
      return state.peopleArray.find(p => p.age === age)
    }
  },
  actions: {
    async AsyncGetPeopleByIndex(index: number) {
      try {
        const result = await new Promise<people | null>((resolve) => {
          setTimeout(() => {
            console.log('当前数组:', this.peopleArray)
            const person = this.peopleArray[index] ?? null
            this.peopleIncrementAge(index)
            resolve(person)
          }, 100)
        })
        console.log('result: ', result)
        this.searchPeople = result
        return this.searchPeople
      } catch (error) {
        this.searchPeople = null
        throw error
      }
    },
    peopleAdd(people: people) {
      this.peopleArray.push(people)
    },
    peopleShift() {
      this.peopleArray.shift()
    },
    peopleIncrementAge(index: number) {
      if (this.peopleArray[index]) {
        this.peopleArray[index].age++
      }
    }
  },
  debounce: {
    AsyncGetPeopleByIndex: 300
  }
})
