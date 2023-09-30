import { defineStore } from 'pinia'

export const useProjects = defineStore('ProjectsPinia', {
  state: () => ({
    namesProjects: <string[]>['/item', '/work', '/work2'],
  }),
  getters: {},
  actions: {
    addName(str: string) {
      this.namesProjects.push(this.convertHashToPath(str))
    },

    convertHashToPath(hash: string) {
      return '/' + hash.replace('#', '').trim().replaceAll(' ', '—')
    },
  },
})
