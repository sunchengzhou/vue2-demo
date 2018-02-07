var footerStyle={
  fontSize:40,
  color:"#bfbfbf",
  textAlign:"center",
  height:40,
  lineHeigh:40,
  margin:"30px auto",
  fontWeight:300
}
export default {
  data(){
    return {
      author:'sunchzh'
    }
  },
  render(){
    return(
      <div id="footer" style={footerStyle}>
        <div>版权所有，翻版必究&nbsp;&nbsp;author--{this.author}</div>
      </div>      
    )
  }
}