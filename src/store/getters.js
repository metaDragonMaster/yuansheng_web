const getters = {
	// isSign:state => state.user.userInfo,
	errorText:state => state.error.errorText,
	userInfo:state => state.user.userInfo,
	userOpenInfoObject:state => state.user.userOpenInfoObject,
	formDataKeep:state => state.authentication.formDataKeep,
	formDataKeepAccount:state => state.authentication.formDataKeepAccount,
	needStartForm:state => state.authentication.needStartForm,
	formMccOptions:state => state.authentication.mccOptions,
	formAuthenType:state => state.authentication.authenType,
	toExamineType:state => state.authentication.toExamineType,
	formFail:state => state.authentication.formFail,
	formMsg:state => state.authentication.formMsg,
	scrollValue:state => state.scroll.scrollValue,
	resizeValue:state => state.resize.resizeValue,
	
	// formCooperativeId:state => state.authentication.cooperativeId,//认证上传图片时用，合作社id
}
export default getters