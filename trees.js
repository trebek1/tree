var Node = function(val){
	this.val = val; 
	this.left = null; 
	this.right = null; 

	return this; 
}

var Tree = function(root){
	if(root instanceof Node){
		this.root = root; 
	}else{
		this.root = new Node(root); 	
	}
	return this; 
}; 


Node.prototype.insert = function(val){

	if(val > this.val){
		if(this.right === null){
			this.right = new Node(val);
		}else{
			this.right.insert(val);	
		}
	}else if(val < this.val){
		if(this.left === null){
			this.left = new Node(val);
		}else{
			this.left.insert(val); 	
		}
	}else{
		console.log('this is an illegal insertion')
	}
}


var bst = new Tree(50); 
bst.root.insert(25);
bst.root.insert(75);
bst.root.insert(15);
bst.root.insert(10);
bst.root.insert(20);
bst.root.insert(21);
bst.root.insert(22);
// console.log("this is bst ", bst);
// console.log("this is bst.left ", bst.root.left);
// console.log("this is bst.right ", bst.root.right);

// height as a function 
function height(node){
	if(node === null){
		return 0;
	}else{
		return 1 + Math.max(height(node.left), height(node.right)); 
	}
}

console.log(height(bst.root));


// height as a prototype 

Node.prototype.height = function(){

	if(this.left || this.right){
		// 1 for not counting the root, one for the terminating level
		return 1 + Math.max(this.left!== null? this.left.height(): 1, this.right!== null? this.right.height(): 1);
	}else{
		return 0; 
	}
	



}

console.log(bst.root.height());

function isBst(root){

}











