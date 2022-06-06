const safe = {
	phoneNo: (cellValue) => {
		//"15757115753".replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')
		//"157****5753"
		if (Number(cellValue) && String(cellValue).length === 11) {
			var mobile = String(cellValue)
			var reg = /^(\d{3})\d{4}(\d{4})$/
			return mobile.replace(reg, '$1****$2')
		} else {
			return cellValue
		}
	}
}
export default safe;