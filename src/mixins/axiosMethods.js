
export default{
    data() {
        return {
            
        }
    },
    methods: {
      async getData(url) {
            return await this.axios.get(url)
      }
        
    }
}