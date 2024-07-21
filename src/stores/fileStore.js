import { defineStore } from 'pinia'
import Papa from 'papaparse'

export const useFileStore = defineStore('fileStore', {
  state: () => ({
    fileContent: '',
    parsedCSV: null
  }),
  actions: {
    setFileContent(content) {
      this.fileContent = content
      this.parseCSV(content)
    },
    parseCSV(content) {
      const result = Papa.parse(content, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      })
      this.parsedCSV = result.data
    }
  }
})
