function Hello(props){
    
    let text ='Valorant'

    function dispName(){
        return 'Anshad'
    }
    
    return(
        <>
        <h2>Hello from hello Component {10+20}</h2>
        <h2>Hello from hello Component {text}</h2>
        <h2>Hello from hello Component {dispName()}</h2><br>
        </br>
        <h2>Hello Anshad</h2>
        </>
        
    )
    
}
export default Hello