	var vm = new Vue({
		el: "#app",
		data:{
			titulo:"Venta de medias",
			stock:true,
			imagen:"img/vmSocks-green-onWhite.jpg",
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
				imagen:"img/vmSocks-green-onWhite.jpg"
			},
			{
				id:2,
				color:"blue",
				imagen:"img/vmSocks-blue-onWhite.jpg"
			}
			],
			contar:0
		},
		methods:{
			elegir(img){
				this.imagen=img
			}
		}
	});