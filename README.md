# trabalhoihc.github.io
<!DOCTYPE html>
<html>
<head>
	<title>Clinicas Médicas</title>
	<link href="styles/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="blue-container">
		<div class="container">
			<header>
				<div class="header">
					<a href="index.html" class="nome">Clinicas Médicas</a>
					<a href="#" class="hide-desktop">
						<img src="images/ham.svg" alt="Ativar menu" class="menu" id="menu">
					</a>
				</div>
				<nav class="nav" style="display: none;" id="nav">
					<ul>
						<li><a href="#">Minha Conta</a></li>
						<li><a href="#">Minhas Consultas</a></li>
						<li><a href="#">Sair</a></li>
					</ul>
				</nav>
			</header>
		</div>
	</div>
	<div class="boa">
		<div class="container">
			<section class="opcoes">
				<h2>Opções</h2>
				<ul class="selectboxes">
					<li>
						<select class="estados" id='estados'>
							<option>Selecionar Estado</option>
							<option>SP</option>
							<option>RJ</option>
							<option>RS</option>
						</select>
					</li>
					<li>
						<select class="cidades" id='cidades'>
							<option>--</option>
						</select>
					</li>
					<li>
						<select class="especialidades" id='especialidades'>
							<option>--</option>
						</select>
					</li>
				</ul>
				<button id="btn" class="btn">Buscar</button>
			</section>
		</div>
		<section class="clinicas hide" id="clinicas">
			<div class="container">
				<h2>Clinicas</h2>
				<ul>
					<li>
						<div class="card">
							<a href="#"><img src="images/clínica-mega-imagem-squarelogo-1554780359501.png" class="card-img-top" alt="Imagem da Clinica Mega Imagem"></a>
							<div class="card-body">
								<p class="card-text">Clinica Mega Imagem</p>
								<div class="avaliacao">
									<p>
									Nota: 4.8;
									<br>
									Avaliações: 234;
									</p>
								</div>
							</div>
							<button class="confirm"><a href="#">Selecionar</a></button>
						</div>
					</li> 
					<li>
						<div class="card">
							<a href="#"><img src="images/clínica-mega-imagem-squarelogo-1554780359501.png" class="card-img-top" alt="Imagem da Clinica Mega Imagem"></a>
							<div class="card-body">
								<p class="card-text">Clinica Mega Imagem</p>
								<div class="avaliacao">
									<p>
									Nota: 4.8;
									<br>
									Avaliações: 234;
									</p>
								</div>
							</div>
							<button class="confirm"><a href="#">Selecionar</a></button>
						</div>
					</li> 
				</ul>
			</div>
		</section>
	</div>
	<footer>
		<div class="container">
			<p class="footerlogo"><a href="index.html">Clinicas Médicas</a></p>
			<ul class="footer-links">
				<li><a href="#">Contato</a></li>
				<li><a href="#">Sobre</a></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">Trabalhe Conosco</a></li>
				<li><a href="#">Redes Socias</a></li>
			</ul>
		</div>
	</footer>
	<script src="script.js"></script>
</body>
</html>
