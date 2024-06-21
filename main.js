class List {
  constructor(head) {
    this.head = head;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  append(value) {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }

    let newNode = new Node(value);
    current.next = newNode;
  }

  prepend(value) {
    let current = this.head;
    this.head = new Node(value);
    this.head.next = current;
  }

  size() {
    let size = 0;
    while (this.head != null) {
      size++;
      this.head = this.head.next;
    }
    console.log(size);
  }

  first() {
    console.log(this.head.value);
  }

  tail() {
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    console.log(this.head.value);
  }

  at(index) {
    let currentIndex = 0;
    while (this.head != null) {
      if (currentIndex == index) {
        console.log(this.head.value);
      } else {
        this.head = this.head.next;
      }
      currentIndex++;
    }
  }

  pop() {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let currentIndex = 0;
    while (current != null) {
      if (current.value == value) {
        return currentIndex;
      } else {
        current = current.next;
        currentIndex++;
      }
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current != null) {
      string = string + `( ${current.value} ) -> `;
      current = current.next;
    }
    string = string + "null";
    console.log(string);
  }

  insertAt(value, index) {
    let current = this.head;
    let currentIndex = 0;

    if (index == 0) {
      this.prepend(value);
    } else {
      while (current != null) {
        if (currentIndex + 1 == index) {
          let newNode = new Node(value);
          newNode.next = current.next;
          current.next = newNode;
          break;
        } else {
          current = current.next;
          currentIndex++;
        }
      }
    }
  }

  removeAt(index) {
    let current = this.head;
    let currentIndex = 0;

    if (index == 0) {
      this.head = this.head.next;
    } else {
      while (current != null) {
        if (currentIndex + 1 == index) {
          current.next = current.next.next;
          break;
        } else {
          current = current.next;
          currentIndex++;
        }
      }
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let node1 = new Node(5);
let node2 = new Node(34);
let node3 = new Node(53);

node1.next = node2;
node2.next = node3;

let list = new List(node1);
