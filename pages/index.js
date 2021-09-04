function Home() {
<head>
    <script>
    var httpGet = () => {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET", 'https://www.google.com.br', false ); // false for synchronous request
                xmlHttp.send( null );
                return xmlHttp.responseText;
            }
    
    console.log(httpGet())
    </script>
</head>
    return <div>Página em desenvolvimento com chat</div>
}
export default Home