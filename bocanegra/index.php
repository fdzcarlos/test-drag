<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="./util/interfase/css/bootstrap4/bootstrap.min.css">
		<link rel="stylesheet" href="./util/interfase/css/slick/slick.css">
		<link rel="stylesheet" href="./util/interfase/css/style.css">

		<title>Bocanegra</title>

		<script src="./util/js/jquery-3.2.1.min.js"></script>
		<script src="./util/js/slick.min.js"></script>
		<script src="./util/js/side_script.js"></script>
	</head>
	<body>
		<div class="comparison">
			<figure>
				<div class="titulo" id="rightTittle">
					<span>Titulo 1</span>
				</div>
				<div class="descripcion" id="rightDesc">
					<span>Descripcion 1</span>
				</div>
				<div class="divisor" id="divisor">
					<div class="inDivisor">
						<div class="inception">
							<div class="titulo" id="leftTittle">
								<span>Titulo 2</span>
							</div>
							<div class="descripcion" id="leftDesc">
								<span>Descripcion 2</span>
							</div>	
						</div>
					</div>
				</div>
			</figure>
			<input type="range" min="0" max="100" value="50" id="slider" style="margin:0" oninput="moveDivisor()">
		</div>
	</body>
</html>
