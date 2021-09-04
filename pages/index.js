function Home() {
<head>
    <script>
        function myFunction() {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", 'https://www.google.com.br', false ); // false for synchronous request
            xmlHttp.send( null );
            document.getElementById("#demo").innerHTML = xmlHttp.responseText;
        }
        myFunction();
    </script>
</head>
    return <div id="demo" >Página em desenvolvimento com script 2</div>
}
export default Home