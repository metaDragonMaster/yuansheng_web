const REGEXP = {
	"only":{
		"chinses":(str)=>{return new RegExp(/[\u4e00-\u9fa5],{0,}$/).test(str);},
		"english":(str)=>{return new RegExp(/[a-zA-Z]/).test(str);},
		"number":(str)=>{return new RegExp(/^[0-9]*$/).test(str);},
		// "nAndE":(str)=>{return new RegExp(/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{0,6}/).test(str);},
	},
	"email":(str)=>{return new RegExp(/^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/).test(str);},
	"QQ":(str)=>{return new RegExp(/[1-9][0-9]{4,}/).test(str);},
	"phone":(str)=>{return new RegExp(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/).test(str);},
	// "idNo":(str)=>{return new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/).test(str);},//身份证
	"idNo":(str)=>{return new RegExp(/(^\d{17}([0-9]|X|x)$)/).test(str);},//身份证
	"IP":(str)=>{return new RegExp(/((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})(\\.((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})){3}/).test(str);},
	"realName":(str)=>{return new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/).test(str);},//真实姓名
	"username":(str)=>{return new RegExp(/^[a-zA-Z0-9\u4E00-\u9FA5\uf900-\ufa2d]{2,19}$/).test(str);},//昵称只由数字、字母和中文组成,输入2-20字符
	// "username":(str)=>{return new RegExp(/[A-Za-z0-9_]{3,20}/).test(str);},//callback(new Error('请输入2-20位的英文、数字或下划线'));
	// "password":(str)=>{return new RegExp(/^[a-zA-Z0-9_]{5,19}/).test(str);},//首个必须为字母，且只有数字字母下划线组成，长度为6-20位
	"password":(str)=>{return new RegExp(/[a-zA-Z0-9_.]{6,20}/).test(str);},	//callback(new Error('请输入6-20位的英文、数字或下划线'));
	"title":(str)=>{return new RegExp(/[a-zA-Z0-9\u4e00-\u9fa5]+$/).test(str);},
	"inputNumber":(str)=>{return new RegExp(/^([1-9]\d{0,9}|0)(\.\d{1,6})?$/).test(str);},//填写金额 允许一个小数点
	"floatNumber":(str)=>{return new RegExp(/^\d+(\.\d+)?$/).test(str)},
}
export default REGEXP
