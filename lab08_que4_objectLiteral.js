{


    // object literal

    let linkedlist = {};
    linkedlist.add = function (elem) {
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

    linkedlist.remove = function (elem) {
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

    linkedlist.printingList = function (list, result) {
        if (list.next == null) {
            result += list.value;
            return result;
        }
        result += list.value + ',';
        return this.printingList(list.next, result);
    }
    linkedlist.print = function () {
        let result = 'LinkedList{';
        result = this.printingList(this, result);
        result += '}';
        console.log(result);
    }
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    //printing the list
    linkedlist.print();
    //printing the list after remove
    linkedlist.remove(3);
    linkedlist.print();
}