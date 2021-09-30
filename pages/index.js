function Home() {
    
return  (
    <>
      <h1>Products</h1> 
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}
   
export default Home