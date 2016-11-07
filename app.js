var s1 = 0, s2 = 0;

for (var i = 0; i <= 1000; i++) {
	s1 += i;
}

console.log("Output Of For Loop " + s1);

var j = 0;
while (j <= 1000) {
	s2 += j;
	j++;
}

console.log("Output Of While Loop " + s2);

