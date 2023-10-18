<!DOCTYPE html>
<html>
<head>
	<title>Page Title</title>
	<meta charset="utf-8">
	</head>
	<body>
		<div id='lugar'>Modificando o documento pelo JavaScript</div>
		<script type="text/javascript">
		{
			var doc = document.getElementById("lugar");
			doc.innerHTML = "<h1>Oi Turma!!!</h1>"
			doc.innerHTML =doc.innerHTML +"<ol>Aprenderemos:" // cria lista
			doc.innerHTML =doc.innerHTML +"<li>Variaveis</li>"; // opção 1
			doc.innerHTML =doc.innerHTML +"<li>Tipos de Dados</li> "; // opção 2
			doc.innerHTML =doc.innerHTML + "<li>Entrada e Saida</li>";//opção 3
			doc.innerHTML =doc.innerHTML +"</ol>"; // Finalização da lista
		}
	</script>
	</body>
</html>