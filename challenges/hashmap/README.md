# Hashtables
**HashMap or HashTable is one of common type in data structure**

## Challenge
**Creating a hash table that would be flexible to add a key and set a value for it by hashing the key before inserting anything to the linked list.**

## Approach & Efficiency
**Big(O) -> Time -> n(1)**
**Big(O) -> Space -> n(n)**

## API
- **_hash_** is a method that will take any key and hash it by converting each character into a number code and then multiply it to any prime number and then getting it module by the specified table size.

- **_add_** is adding a key and its value to the linked list and hashing each passed key.

- **_get_** is getting all of the values for a certain key.

- **_contain_** is a method to check if this key exists in the table or not.