const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  
   function nodeRemoveAt(indx) {
    let current = l[indx];
    this.next = l[indx + 1];
    
     if(indx === 0) {
       current = current.next;
     } else {
       let prev = null;
       let index = 0;
      
       while(index < indx) {
         prev = current;
         current = current.next;
         index++
       }
      
       prev.next = current.next;

     }
     l.length--;
     return l;
   }
  
   let current = l[0];
   let indx = 0;
   this.next = l[indx + 1];
    
   while(current) {
     if(current.value != k) {
       current = current.next;
       indx++
     }
   }

  return nodeRemoveAt(indx);
}

module.exports = {
  removeKFromList
};
