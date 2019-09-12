/*const n1 = {
     data:100
}
const n2 = {
    data:200
    }
    n1.next =n2;
    console.log(n1);

*/
class Node {
     constructor(data, next = null) {
          this.data = data;
          this.next = next;
     }
}

class linkedList {
     constructor() {
          this.head = null;
          this.size = 0;
     }

     //INsert at first node
     insertFirst(data) {
         
          this.head = new Node(data, this.head);
          this.size++;
         
     }
     //insert last node
     insertLast(data) {
          let node = new Node(data);
          let current;
          if (this.current == null) {
               this.head = node;
          }
          else {
               current = this.head;
               while (current.next) {
                    current = current.next;
               }
               current.next = node;
               this.size++;
          }

     }
     //insert at index
     insertIndex(data, index) {
          if (index < 0 && index > this.size)
               return;
          if (index === 0) {
               this.insertFirst(data);
               return;
          }
          const node = new Node();
          let current, previous;
          current = this.head;
          let count = 0;
          while (count < index) {
               previous = current;
               count++;
               current.next;
          }
          node.next=current;
          previous.next=node;



     }
     //print list data
     printListData() {
          let current = this.head;
          while (current) {
               console.log(current.data);
               current = current.next;
          }
     }

     //delet data
     //remove at index
}
const ll = new linkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);
ll.insertIndex(600,2);
ll.printListData();
    //console.log(ll);

    