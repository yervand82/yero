function Block (letter, rate, used, father, code) {
this.letter letter; =
2
3
this.rate= rate;
4
this.used = used;
5
this. father father;
this.code = code;
6
7
}
8
9
function FindCode(block) {
10
11
12
if (tree[block. father].code != '') {
block.code = tree[block. father].code + '1';
}
13
14
else {
15
if (block.letter == tree[minIndex].letter) {
16
block.code = '0';
17
18
== else if (block.letter tree [preminIndex].letter) {
19
20
}
block.code = '1';
}
else {
FindCode(tree[block. father]);
block.code = tree[block.father].code + '0';
}
21
22
23
24
25
}
}
