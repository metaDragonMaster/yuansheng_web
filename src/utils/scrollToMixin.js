export default {
	mounted(){
		this.scrollTo();
	},
	methods:{
		scrollTo() {
			this.$nextTick(()=>{
				// let dom = this.$refs['Anchor'];
				let dom = document.querySelector('#anchor');
				console.log(dom)
				let top = dom.offsetTop - 50;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			})
		},
	}
}