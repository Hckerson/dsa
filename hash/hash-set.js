class SimpleHashSet {
    constructor(count) {
        this.count = count;
        this.buckets = Array.from({ length: count }, () => []);
    }

    hashFunction = (value) => {
        let sumOfChar = 0;

        for (const char of String(value)) {
            sumOfChar += char.codePointAt(0);
        }

        return sumOfChar % this.count;
    };

    contains = (value) => {
        const index = this.hashFunction(value);
        return this.buckets[index].some((id) => id === value);
    };

    add = (value) => {
        const index = this.hashFunction(value);
        const bucket = this.buckets[index];
        bucket.includes(value) ? null : bucket.push(value);
    };

    remove = (value) => {
        const index = this.hashFunction(value);
        const bucket = this.buckets[index];
        bucket.includes(value) ? bucket.splice(bucket.indexOf(value), 1) : null;
    };

    printSet = () => {
        this.buckets.forEach((bucket, idx) => {
            console.log(
                `Bucket ${idx} with ${bucket.length ? `${bucket}` : "no element"}`,
            );
        });
    };
}

const hashSet = new SimpleHashSet(10);

hashSet.add("Charlotte");
hashSet.add("Thomas");
hashSet.add("Jens");
hashSet.add("Peter");
hashSet.add("Lisa");
hashSet.add("Adele");
hashSet.add("Michaela");
hashSet.add("Bob");

hashSet.printSet();

console.log("\n'Peter' is in the set:", hashSet.contains("Peter"));
console.log("Removing 'Peter'");
hashSet.remove("Peter");
console.log("'Peter' is in the set:", hashSet.contains("Peter"));
console.log("'Adele' has hash code:", hashSet.hashFunction("Adele"));
