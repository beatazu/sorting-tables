let tab1 = [3, 7, 0, 8, 2];
let tab2 = [3,7,2,4,9,6,8,2,0,7,4]; 

let tab3 = [7,2,-4,9,6,8,2,100, 7, 0, 8, 2];

console.log('Przed sortowaniem tab1: ' + tab1);
console.log('Przed sortowaniem tab2: ' + tab2);
console.log('Przed sortowaniem tab3: ' + tab3);


let minSort = function (array) {
	let n = array.length;
	for ( let i = 0; i < n; i++) {
        for ( let d = 1; d < n - i; d++) {
            z = Math.min(array[i],array[i+d]);
            array[i+d] = Math.max(array[i],array[i+d]);
            array[i] = z;
        }
	}	
	return array;
};
	

console.log('Po sortowaniu tab1: ' + minSort(tab1));
console.log('Po sortowaniu tab2: ' + minSort(tab2));
console.log('Po sortowaniu tab3: ' + minSort(tab3));


