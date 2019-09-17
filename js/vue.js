	var vm = new Vue({
		el: "#app",
		data:{
			titulo:"Venta ",
			subtitulo:" de producto",
			selectedVariable:0,
			//stock:true,
			//imagen:"img/vmSocks-green-onWhite.jpg",
			//inventario:8,
			producto:
			[
			{
				id:1,
				descripcion:"80% de algodon"
			},
			{
				id:2,
				descripcion:"20% de polieser"
			}
			]
			,
			lista:[
			{
				id:1,
				color:"green",
				imagen:"img/vmSocks-green-onWhite.jpg",
				cantidad:10
			},
			{
				id:2,
				color:"blue",
				imagen:"img/vmSocks-blue-onWhite.jpg",
				cantidad:0
			}
			],
			contar:0
		},
		computed:{
			title(){
				return this.titulo+" "+this.subtitulo
			},
			imagen(){
				return this.lista[this.selectedVariable].imagen
			},
			inventario(){
				return this.lista[this.selectedVariable].cantidad
			}
		},
		methods:{
			elegir(index){
				this.selectedVariable=index
				console.log(index)
				//this.imagen=img
			},
			carrito(){
				this.contar+=1;
			}

		}
	});
