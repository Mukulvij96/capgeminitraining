class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class unorderedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Inserting all the words of mukul.txt file in linked list
    insertStart(data) {
        var current;
        var node = new Node(data);
        if (this.head == null) {
            this.head = node;
            return true;
        }
        current = this.head;
        this.size++;

        while ((current.next) != null) {
            current = current.next;
        }
        current.next = node;

    }
    checkAvail(data) {
        if (this.head == data) {
            console.log("String Found at head");

        }
        var current = this.head;

        while (current != null) {
            if (current.data == data) {
                console.log("String already there");

                this.removeElement(data);
                break;
            }
            else {
                this.insertStart(data)

            }

            current = current.next;
        }

    }
    removeElement(data) {
        var current = this.head;
        var previousNode = current;
        if (current.data == data) {
            this.head = current.next;
        }
        else {
            while (current.next != null) {

                if (current.data == data) {
                    previousNode.next = current.next;
                }
                previousNode = current;
                current = current.next;
                this.size--;
            }
        }

        this.printList(data);

    }

    printList(data) {
        var current = this.head;

        var str = '';
        while (current) {
            str = str + ' ' + current.data;
            current = current.next;
        }
        console.log(str);
    }

}


class OrderedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Inserting all the words of mukul.txt file in linked list
    insertStart(data) {
        
         
            var node=new Node(data);
            if(this.head==null)
            {
                this.head=node;
                return true;
                
            }
            var current = this.head;
            var prev = current;
            //var c=0;
            //console.log(this.head.data);
            // iterate over the list 

            if(data < current.data)
            {
                
                node.next=current;
                this.head=node;
                return node.data;
            }

            while (current.data<data ) 
                {
                    if(current.next!=null)
                        {
                            prev=current;
                            current=current.next;
                            continue;
                        }
                        else
                        {
                            current.next=node;
                            return node.data;
                        }
                }
               
               prev.next=node;
               node.next=current;
               return node.data;
         
    }
    checkAvail(data) {
        if (this.head == data) {
            console.log("String Found at head");

        }
        var current = this.head;

        while (current != null) {
            if (current.data == data) {
                console.log("String already there");

                this.removeElement(data);
                break;
            }
            else {
                this.insertStart(data)

            }

            current = current.next;
        }

    }
    removeElement(data) {
        var current = this.head;
        var previousNode = current;
        if (current.data == data) {
            this.head = current.next;
        }
        else {
            while (current.next != null) {

                if (current.data == data) {
                    previousNode.next = current.next;
                }
                previousNode = current;
                current = current.next;
                this.size--;
            }
        }

        this.printList(data);

    }
    pop()
        {
          var current=this.head;
          
          while(current.next!=null)
          current=current.next;

          return current.data;
        }

        pop(pos)
        {
            
            var v=this.indexOf(pos);
            this.removeElement(data);
            return(v);

        }
    size()
    {
        var current=this.head;
        var count=0
        while(current)
        {
            count++;
            current=current.nxt;
        }
        return count;

    }

    printList(data) {
        var current = this.head;

        var str = "";
        while (current) {
            str = str + " " + current.data;
            current = current.next;
        }
        console.log(str);
        return(str);
    }

}


class Stack {
    constructor() {
        this.top = -1;
        this.arr = [];
        this.size = 0
    }
    push(item) {
        this.arr.push(item);
        this.top++;
        this.size++;
        console.log(this.arr);
    }
    pop() {
        if (this.top == -1)
            console.log("Stack empty");
        else
            this.arr.pop();

        this.top--;
        console.log(this.arr);
    }
    peek() {
        if (this.top != -1)
            return this.arr[this.top];
        else
            return false;
    }
    isEmpty() {
        if (this.top == -1)
            return false;
        else
            return true;
    }
}

class Banking {
    constructor() {
        this.front = null;
        this.back = null;
    }
    //whether the queue is empty or not
    isEmpty() {
        return !this.front;
    }
    //else if not empty
    enqueue(data) {
        //create a new node with element
        var node = new Node(data);
        this.current = this.front;
        //if the queue is empty from front and back to null
        if (this.isEmpty()) {

            this.front = null;
            this.front = node;

        }
        //if not empty then point the new node to the back
        else {
            while (this.current.next != null) {
                this.current = this.current.next;
                //and back pointer to null again   
            }

            this.current.next = node;

        }
        this.print();
    }
    print() {
        if (this.isEmpty()) {
            console.log("Empty queue");
        }

        else {
            var tempArr = new Array();
            var temp = this.front;


            while (temp != null) {
                tempArr.push(temp.data);
                temp = temp.next;
            }

            console.log( tempArr );
        }

    }
    dequeue() {
        //element to be removed from the front of the row
        var current = this.front;
        this.front=current.next;
        this.print();

    }
}

class Deque 
{
constructor()
{
    this.front=null;
    this.back=null;
    this.size=0;
    this.arr=[];
}
isEmpty()
{
    return !this.front;
} 

size()
{
    if(this.addFront())
this.size++;
return this.size;

}
addFront(data)
{   
    var current=null;
       var node=new Node(data);
    if(this.front==null)
{
this.front=node;
this.front.next=null;
this.size++;
}   
//console.log(this.front);
else
{      
        current=this.front;
        this.front.next=current;
        this.front=node;
        this.size++;
 

}
console.log(this.front.data);
//this.print();
}

/*print()
{
    var tempArr=new Array();
    var temp=this.front;
    while(temp.next!=null)
    {
        tempArr.push(temp.data);
        temp=temp.next;
    }
    console.log(tempArr);
    
}*/
addBack(data)
{
    //create a new node with element
    var node = new Node(data);
    this.current1 = this.front;
    //if the queue is empty from front and back to null
    if (this.front==null) {

                this.back = node;
                this.back.next=null;

    }
    //if not empty then point the new node to the back
    else {
        while (this.current1.next != null) {
            this.current1 = this.current1.next;
            //and back pointer to null again   
        }

        this.current1.next = node;

    }
    console.log(this.current1.data);
}


}

module.exports = { Node, unorderedList, Stack, Banking , Deque ,OrderedList }