"use strict"
export function filterHasValue(obj) {
	//过滤对象并返回有值的属性的对象
	let form = {};
	for (let i in obj) {
		if (!!obj[i]) {
			form[i] = obj[i];
		}
	}
	return form;
}
export function excludeAttr(obj, excludes) {
	//过滤对象,排除所选的属性并返回剩余属性的对象
	let exc = [];
	let form = {};
	if (typeof(excludes) == 'string') {
		exc.push(excludes);
	} else {
		exc = [
			...excludes,
		];
	}
	// console.log(exc)
	for (let i in obj) {
		// console.log(!exc.includes(i))
		if (!exc.includes(i)) {
			form[i] = obj[i];
		}
	}
	return form;
}
export function getItem(list, value, label) {
	// list 对象列表, value值, label列表中需要指定值的属性名
	//获取列表中含有指定值的对象
	let item = {};
	let valueLabel = label || 'value';
	list.map(obj => {
		if (value == obj[valueLabel]) {
			item = obj;
		}
	});
	if (!item) {
		item.label = '';
	}
	return item;
};
export function getItemLabel(list, value, valueAttr,labelAttr) {
	// list 对象列表, value值, valueAttr指定符合的属性名，labelAttr指定符合的属性名
	//获取列表中含有指定值的对象
	let item = {};
	let valueLabel = valueAttr || 'value';
	labelAttr = labelAttr || 'label'
	list.map(obj => {
		if (value == obj[valueLabel]) {
			item = obj;
		}
	});
	if (!item) {
		item[labelAttr] = '';
	}
	// console.log(item,item[labelAttr])
	return item[labelAttr];
};

export function filterTextByLength(Text, length = 100, truncate = "...") {
	//根据输入的文字长度，隐藏移除文字并以省略号的形式表达溢出隐藏。
	//css无法解决文字溢出问题时用。
	let text = Text || ""
	if (text.length >= length) {
		return text.substring(0, length) + truncate;
	} else {
		if (text.length <= 0) {
			return ''
		}
		return text;
	}
}
export function combineAttrs(objA, objB) {
	//两个对象的相同属性结合然后赋值，返回第一个对象的值。
	//常用于打开修改模块时的表单赋值。
	let boo = false;
	for (let i in objA) {
		for (let j in objB) {
			// console.log(j,objB[j],!!objB[j]||objB[j] == 0);
			boo = !!objB[j] || objB[j] > -1;
			// console.log(j,objB[j],boo);
			if (i == j && boo) {
				// console.log(i,j);
				objA[i] = objB[j];
			}
		}
	}
	// Object.keys(objA).forEach(key=>{objA[key] = objB[key]});
	return objA;
}
export function stringToNumberArray(str, separate) {
	// 常用与ids字符串转换成数字类型的数组
	separate = separate || ',';
	return str.split(separate).map(item => parseInt(item));
}

export function removeDuplicationById(arr1,arr2,attrName) {
	// 传入的是两个对象形式的数组，并且必须有相同且数组内不重复的key值,key的属性名默认为'id'
	// 根据相同且当前数组内不重复值的key去重且合并。
	attrName = attrName || 'id';
	let ids = arr1.map(item=>item[attrName]);
	let add = arr2.filter(item=>!ids.includes(item[attrName]))
	return [].concat(add,familys);
}

export function htmlToText(htmlString) {
	let temp = htmlString.replace(/<\/?.+?>/g, '');
	let result = temp.replace(/ /g, ''); //result为获取从文字得到后的内容，去除空格
	// .replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '').replace(/<br\/?>/gi, '').replace(/<[^>/]+>/g, '').replace(/(\n)?<\/([^>]+)>/g, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ').replace(/<\/?(img)[^>]*>/gi, '').replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;/g,"\'").replace(/&quot;/g,"\"").replace(/<\/?.+?>/g,"")
	// let zh = temp.replace(/[a-zA-Z]+/g, ''); //去除英文
	return result;
}
export const countStatistics = (n) => {
	//统计字数
	/*	@统计规则：
			中文 	+1
			图片标签 +1
			英文		+1/2
	*/
	let temp = n.replace(/<\/?.+?>/g, '');
	let result = temp.replace(/ /g, ''); //result为获取从文字得到后的内容，去除空格
	let zh = temp.replace(/[a-zA-Z]+/g, ''); //去除英文
	let imageLabel = n.match(/<img[^>]+>/g); //图片标签：type:Array
	let imageLength;
	if (imageLabel) {
		imageLength = imageLabel.length;
	}
	if (!imageLabel) {
		imageLength = 0;
	}
	return imageLength + zh.length + (result.length - zh.length) / 2;
	// console.log("格式化之后的内容：",this.spanInfo)
}

const util = {
	filterHasValue,
	excludeAttr,
	getItem,
	filterTextByLength,
	combineAttrs,
	stringToNumberArray,
	getItemLabel,
	htmlToText,
	countStatistics,
};
export default util
