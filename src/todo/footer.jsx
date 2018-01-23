import '../assets/styles/footer.styl'
export default{
    data(){
        return {
            author:"jocky"
        }
    },
    render(){
        return (
            <div id="footer">
                <span>Written By {this.author}</span>
            </div>
        )
    }
}