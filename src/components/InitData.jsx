function Data(){
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(console.log);
  return(
    <div>AAAAAAAAA</div>
  )
}


export default Data;