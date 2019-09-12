class Node {
    constructor(data, next) {
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
                break;
            } current = current.next;
        }
        this.removeElement(data);
    }
    removeElement(data) {
        var current=this.head;
        var previousNode=null;
        if(current.data==data)
        {
            this.head=current.next;
        }
        else{
            while(current.next!=null)
            {
                previousNode=current;
                current=current.next;
                if(previousNode.data==data )
                {
                    previousNode.next=current.next;
                }
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
class Stack {
    constructor()
    {
        this.top=-1;
        this.arr=[];
        this.size=0
    }
push(item)
{
    this.arr.push(item);
    this.top++;
    this.size++;
}
pop()
{   if(d)
    this.arr.pop()
}
}
module.exports = { Node, unorderedList ,Stack }