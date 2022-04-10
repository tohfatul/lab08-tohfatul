{


    function LinkedList() {

    }

    LinkedList.prototype.add = function (elem) {
        if (this.value === undefined) {
            this.value = elem;
            this.next = null;
        } else {
            let curr = this;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = { value: elem, next: null };
        }
    }

    LinkedList.prototype.remove = function (elem) {
        var curr = this;
        var prev = null;
        while (curr) {
            if (curr.value === elem) {
                if (prev == null) {
                    this.value = curr.next.value;
                    this.next = curr.next.next;
                } else {
                    prev.next = curr.next;
                }
                return true;
            }
            prev = curr;
            curr = curr.next;
        }
        return false;
    }
    LinkedList.prototype.printHelp = function (list, result) {
        if (list.next == null) {
            result += list.value;
            return result;
        }
        result += list.value + ',';
        return this.printHelp(list.next, result);
    }
    LinkedList.prototype.print = function () {
        let result = 'LinkedList{';
        result = this.printHelp(this, result);
        result += '}';
        console.log(result);
    }
    let linkedlist = new LinkedList();
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.print(); //printing the list
    linkedlist.remove(3);
    linkedlist.print(); //printing the list after remove
}