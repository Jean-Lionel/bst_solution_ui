
export default{
    data() {
        return {
            
        }
    },
    methods: {
      async getData(url) {
            return await this.axios.get(url)
      },
      async postData(url, data=null) {
            return await this.axios.post(url, data)
      },
      async putData(url, data=null) {
            return await this.axios.put(url, data)
      },
      async deleteData(url, data=null) {
            return await this.axios.delete(url, data)
      },
        
    }
}